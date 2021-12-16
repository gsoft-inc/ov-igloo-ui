let Canvas: HTMLCanvasElement;

export function GetTextWidth(text: string, font: string): number {
  const canvas = Canvas || (Canvas = document.createElement('canvas'));
  canvas.width = 1000;
  canvas.height = 1000;

  const context = canvas.getContext('2d');

  if (context == null) return 0;

  context.font = font;

  const metrics = context.measureText(text);

  return Math.ceil(metrics.width);
}
