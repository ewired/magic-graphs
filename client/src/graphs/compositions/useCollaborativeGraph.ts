import type { Ref } from "vue";
import type { UserEditableGraphOptions } from "./useUserEditableGraph";
import { usePersistentGraph } from "./usePersistentGraph";
import { io, Socket } from "socket.io-client";
import type { GEdge, GNode } from "@graph/types";

const getSocketURL = () => {
  const isLocalhost = window.location.hostname === 'localhost'
  return isLocalhost ? 'http://localhost:3000' : '/'
}

interface GraphEvents {
  nodeAdded: (node: GNode) => void
  nodeRemoved: (nodeId: GNode['id']) => void
  edgeAdded: (edge: GEdge) => void
  edgeRemoved: (edgeId: GEdge['id']) => void
}

export const useCollaborativeGraph = (
  canvas: Ref<HTMLCanvasElement | undefined | null>,
  options: Partial<UserEditableGraphOptions> = {}
) => {
  const graph = usePersistentGraph(canvas, options)
  const socket: Socket<GraphEvents, GraphEvents> = io(getSocketURL())

  const receivedIds = new Set<string>()

  socket.on('connect', () => {
    console.log('socket connected')
  })

  socket.on('connect_error', (error) => {
    console.log('socket connection error', error)
  })

  graph.subscribe('onNodeAdded', (node, { broadcast }) => {
    if (!broadcast) return
    socket.emit('nodeAdded', node)
  })

  socket.on('nodeAdded', (node) => {
    graph.addNode(node, { broadcast: false })
  })

  graph.subscribe('onNodeRemoved', (node, { broadcast }) => {
    if (!broadcast) return
    socket.emit('nodeRemoved', node.id)
  })

  socket.on('nodeRemoved', (nodeId) => {
    graph.removeNode(nodeId, { broadcast: false })
  })

  graph.subscribe('onEdgeAdded', (node) => {
    socket.emit('edgeAdded', node)
  })

  socket.on('edgeAdded', (node) => {
    if (receivedIds.has(node.id)) return
    receivedIds.add(node.id)
    setTimeout(() => receivedIds.delete(node.id), STORE_ID_DURATION)

    graph.addEdge(node)
  })

  graph.subscribe('onEdgeRemoved', (edge) => {
    socket.emit('edgeRemoved', edge.id)
  })

  socket.on('edgeRemoved', (edgeId) => {
    if (receivedIds.has(edgeId)) return
    receivedIds.add(edgeId)
    setTimeout(() => receivedIds.delete(edgeId), STORE_ID_DURATION)

    graph.removeEdge(edgeId)
  })

  return graph
}