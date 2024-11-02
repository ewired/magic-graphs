import { ref, type Ref } from "vue";
import type { UserEditableGraphOptions } from "./useUserEditableGraph";
import { usePersistentGraph } from "./usePersistentGraph";
import { io, Socket } from "socket.io-client";
import type { GEdge, GNode } from "@graph/types";
import colors from "@utils/colors";
import { getRandomElement } from "@utils/array";

const getSocketURL = () => {
  const isLocalhost = window.location.hostname === 'localhost'
  return isLocalhost ? 'http://localhost:3000' : '/'
}

export type Collaborator = {
  id: string
  name: string
  color: string
  mousePosition: { x: number, y: number }
}

export type CollaboratorMove = {
  id: Collaborator['id']
  mousePosition: Collaborator['mousePosition']
}

export interface GraphEvents {
  nodeAdded: (node: GNode) => void
  nodeRemoved: (nodeId: GNode['id']) => void
  nodeMoved: (node: GNode) => void

  edgeAdded: (edge: GEdge) => void
  edgeRemoved: (edgeId: GEdge['id']) => void

  collaboratorJoined: (collaborator: Collaborator) => void
  collaboratorLeft: (collaboratorId: Collaborator['id']) => void

  collaboratorMoved: (collaboratorMove: CollaboratorMove) => void
}

export const useCollaborativeGraph = (
  canvas: Ref<HTMLCanvasElement | undefined | null>,
  options: Partial<UserEditableGraphOptions> = {}
) => {
  const graph = usePersistentGraph(canvas, options)
  const socket: Socket<GraphEvents, GraphEvents> = io(getSocketURL())

  const collaborators = ref<Map<Collaborator['id'], Collaborator>>(new Map())

  socket.on('connect', () => {
    console.log('socket connected')
  })

  socket.on('connect_error', (error) => {
    console.log('socket connection error', error)
  })

  socket.on('collaboratorJoined', (collaborator) => {
    collaborators.value.set(collaborator.id, collaborator)
  })

  graph.subscribe('onNodeAdded', (node, { broadcast }) => {
    if (!broadcast) return
    socket.emit('nodeAdded', node)
  })

  socket.on('nodeAdded', (node) => {
    graph.addNode(node, { broadcast: false, focus: false })
  })

  graph.subscribe('onNodeRemoved', (node, { broadcast }) => {
    if (!broadcast) return
    socket.emit('nodeRemoved', node.id)
  })

  socket.on('nodeRemoved', (nodeId) => {
    graph.removeNode(nodeId, { broadcast: false })
  })

  graph.subscribe('onNodeMoved', (node, { broadcast }) => {
    if (!broadcast) return
    socket.emit('nodeMoved', node)
  })

  socket.on('nodeMoved', (node) => {
    graph.moveNode(node.id, node.x, node.y, { broadcast: false })
  })

  graph.subscribe('onEdgeAdded', (node, { broadcast }) => {
    if (!broadcast) return
    socket.emit('edgeAdded', node)
  })

  socket.on('edgeAdded', (node) => {
    graph.addEdge(node, { broadcast: false, focus: false })
  })

  graph.subscribe('onEdgeRemoved', (edge, { broadcast }) => {
    if (!broadcast) return
    socket.emit('edgeRemoved', edge.id)
  })

  socket.on('edgeRemoved', (edgeId) => {
    graph.removeEdge(edgeId, { broadcast: false })
  })

  const names = ['Dila', 'Mila', 'Pila', 'Lila', 'Fila', 'Gila', 'Hila', 'Kila', 'Zila', 'Xila']
  const collabColors = [
    colors.AMBER_500,
    colors.BLUE_500,
    colors.CYAN_500,
    colors.GREEN_500,
    colors.INDIGO_500,
    colors.LIME_500,
    colors.ORANGE_500,
    colors.PINK_500,
    colors.PURPLE_500,
    colors.RED_500,
  ]

  const me = {
    id: '',
    name: getRandomElement(names),
    color: getRandomElement(collabColors),
    mousePosition: { x: 0, y: 0 }
  }

  setTimeout(() => {
    if (!socket.id) throw new Error('Socket ID is not defined')
    me.id = socket.id
    socket.emit('collaboratorJoined', me)
  }, 1000)

  const collaboratorMoveRepaint = graph.repaint('collaborative-graph/collaborator-mouse-move')

  graph.subscribe('onMouseMove', (ev) => {
    const { offsetX, offsetY } = ev
    me.mousePosition = { x: offsetX, y: offsetY }
    socket.emit('collaboratorMoved', {
      id: me.id,
      mousePosition: me.mousePosition
    })
    collaboratorMoveRepaint()
  })

  socket.on('collaboratorMoved', (collaboratorMove) => {
    const movedCollaborator = collaborators.value.get(collaboratorMove.id)
    if (!movedCollaborator) throw new Error('moving collaborator not found')
    movedCollaborator.mousePosition = collaboratorMove.mousePosition
    collaboratorMoveRepaint()
  })

  return graph
}