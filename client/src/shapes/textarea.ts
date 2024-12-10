import type { TextArea } from "@shape/types";
import { getCanvasScale } from "@utils/components/useCanvasCoord";
import type { DeepRequired } from "@utils/types";
import { rectHitbox } from "./rect/hitbox";

export const engageTextarea = (
  ctx: CanvasRenderingContext2D,
  textArea: DeepRequired<TextArea>,
  handler: (str: string) => void
) => {
  const { at, text, activeColor: bgColor } = textArea;

  const scale = getCanvasScale(ctx);
  const transform = ctx.getTransform();

  // apply canvas transforms onto textArea.at
  const transformedX = transform.a * at.x + transform.c * at.y + transform.e;
  const transformedY = transform.b * at.x + transform.d * at.y + transform.f;

  const { color: textColor, content, fontSize, fontWeight } = text;

  // prevent text jumping after click as much as possible (sometimes jumps 1 pixel)
  const topPadding = scale === 1 ? 5 : Math.round(scale * 5);

  const inputWidth =
    Math.max(fontSize * 2, fontSize * 0.6 * content.length) * scale;
  const inputHeight = fontSize * 2 * scale;

  const input = document.createElement("textarea");

  input.style.position = "absolute";
  input.style.left = `${Math.round(transformedX)}px`;
  input.style.top = `${Math.round(transformedY)}px`;
  input.style.width = `${Math.round(inputWidth)}px`;
  input.style.height = `${Math.round(inputHeight)}px`;
  input.style.zIndex = "1000";

  input.style.resize = "none";

  input.style.overflow = "hidden";
  input.style.border = "none";
  input.style.padding = "0";

  input.style.paddingTop = `${topPadding}px`;

  input.style.margin = "0";
  input.style.fontSize = `${fontSize * scale}px`;
  input.style.color = textColor;
  input.style.backgroundColor = bgColor;
  input.style.fontFamily = "Arial";
  input.style.textAlign = "center";
  input.style.fontWeight = fontWeight;
  input.style.outline = "none";
  input.style.boxSizing = "border-box";

  // no text wrapping
  input.style.whiteSpace = "nowrap";

  const adjustSize = () => {
    const currentWidth = parseFloat(input.style.width);
    const newWidth = Math.max(input.scrollWidth, fontSize * 2);

    const deltaWidth = newWidth - currentWidth;
    input.style.left = `${parseFloat(input.style.left) - deltaWidth / 2}px`;

    input.style.width = `${newWidth}px`;
  };

  input.onfocus = adjustSize;
  input.oninput = adjustSize;

  input.value = content;

  const isClickOutsideInput = (input: HTMLElement, event: MouseEvent) => {
    const { x, y, width, height } = input.getBoundingClientRect();

    const rect = {
      at: { x, y },
      width,
      height,
    };

    const { clientX, clientY } = event;
    return !rectHitbox(rect)({ x: clientX, y: clientY });
  };

  const removeInput = () => {
    input.onblur = null;
    handler(input.value);
    document.removeEventListener("mousedown", handleMouseDown);
    document.removeEventListener("wheel", removeInput);

    setTimeout(() => {
      // setTimeout to allow canvas time to update
      input.remove();
    }, 50);
  };

  input.onblur = removeInput;

  input.onkeydown = (ev) => {
    ev.stopPropagation();
    if (ev.key === "Enter") {
      ev.preventDefault();
      removeInput();
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    if (isClickOutsideInput(input, event)) removeInput();
  }

  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("wheel", removeInput, { passive: true });

  const responsiveCanvas = document.getElementById(
    "responsive-canvas-container"
  );
  if (!responsiveCanvas)
    throw new Error("responsive canvas container not found");
  responsiveCanvas.appendChild(input);
  setTimeout(() => {
    input.focus();
    input.setSelectionRange(0, input.value.length);
  }, 5);
};
