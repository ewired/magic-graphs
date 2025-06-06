import type { Ref } from 'vue';
import type { Collaborator, CollaboratorMap } from '@graph/collab/types';
import colors from '@colors';
import { rect, type Rect } from '@shape/rect';
import { circle, type Circle } from '@shape/circle';

export const collabTagShapes = (collaborator: Collaborator) => {
  const {
    name: collaboratorName,
    color: collaboratorColor,
    mousePosition,
  } = collaborator;

  const { x, y } = mousePosition;

  const MIN_TAG_WIDTH = 35;
  const MAX_TAG_WIDTH = 150;

  const width = Math.min(
    Math.max(collaboratorName.length * 11, MIN_TAG_WIDTH),
    MAX_TAG_WIDTH,
  );
  const height = 20;
  const topLeftOffset = 10;

  const tag: Rect = {
    at: {
      x: x - width - topLeftOffset,
      y: y - height - topLeftOffset,
    },
    width,
    height,
    color: collaboratorColor,
    borderRadius: 5,
    textArea: {
      text: {
        content: collaboratorName,
        color: colors.WHITE,
        fontSize: 14,
        fontWeight: 'bold',
      },
      color: colors.TRANSPARENT,
    },
  };

  const cursorPoint: Circle = {
    radius: 3,
    at: { x, y },
    color: collaboratorColor,
  };

  return {
    tag,
    cursorPoint,
  };
};

export const usePaintCollabTags =
  (collaborators: Ref<CollaboratorMap>) => (ctx: CanvasRenderingContext2D) => {
    for (const collaborator of Object.values(collaborators.value)) {
      const { tag, cursorPoint } = collabTagShapes(collaborator);
      rect(tag).draw(ctx);
      circle(cursorPoint).draw(ctx);
    }
  };
