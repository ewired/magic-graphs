import type { Coordinate, BoundingBox } from '@shape/types';
import { IMAGE_DEFAULTS, type Image } from '.';
import {
  rectHitbox,
  rectEfficientHitbox,
  getRectBoundingBox,
} from '@shape/rect/hitbox';

/**
 * @param point - the point to check if it is in the image
 * @returns a function that checks if the point is in the image
 */
export const imageHitbox = (image: Image) => {
  const { at, width, height, rotation } = {
    ...IMAGE_DEFAULTS,
    ...image,
  };

  const isInRect = rectHitbox({
    at,
    width,
    height,
    rotation,
  });

  return (point: Coordinate) => isInRect(point);
};

export const getImageBoundingBox = (image: Image) => {
  const { at, width, height } = image;

  return getRectBoundingBox({
    at,
    width,
    height,
  });
};

export const imageEfficientHitbox = (image: Image) => {
  const { at, width, height } = image;

  const isInRectEfficientHitbox = rectEfficientHitbox({
    at,
    width,
    height,
  });

  return (boxToCheck: BoundingBox) => isInRectEfficientHitbox(boxToCheck);
};
