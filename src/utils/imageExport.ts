import type { ImageAdjustments } from '../types';

/**
 * Generates an image based on the adjustments, fitting the full photo by default.
 */
export async function generateCroppedImage(
  imageSrc: string,
  adjustments: ImageAdjustments,
  outputSize: number = 800,
  circular: boolean = false
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = outputSize;
      canvas.height = outputSize;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject(new Error('Não foi possível obter o contexto 2D do Canvas'));
        return;
      }

      // Fill background color
      ctx.fillStyle = adjustments.backgroundColor || '#ffffff';
      ctx.fillRect(0, 0, outputSize, outputSize);

      if (circular) {
        ctx.beginPath();
        ctx.arc(outputSize / 2, outputSize / 2, outputSize / 2, 0, Math.PI * 2);
        ctx.clip();
      }

      ctx.save();

      // Move context to center
      ctx.translate(outputSize / 2, outputSize / 2);

      // Apply pan offsets (scaled to outputSize)
      const scaleFactor = outputSize / 280;
      ctx.translate(adjustments.x * scaleFactor, adjustments.y * scaleFactor);

      // Apply rotation
      ctx.rotate((adjustments.rotation * Math.PI) / 180);

      // Apply flip
      if (adjustments.flipHorizontal) {
        ctx.scale(-1, 1);
      }

      // Fit the full image inside the square by default. Users can zoom in
      // when they want a tighter crop and pan to choose the framing.
      const imgRatio = img.width / img.height;
      let drawWidth: number;
      let drawHeight: number;

      if (imgRatio > 1) {
        drawWidth = outputSize;
        drawHeight = outputSize / imgRatio;
      } else {
        drawWidth = outputSize * imgRatio;
        drawHeight = outputSize;
      }

      // Apply zoom
      drawWidth *= adjustments.zoom;
      drawHeight *= adjustments.zoom;

      // Draw centered
      ctx.drawImage(
        img,
        -drawWidth / 2,
        -drawHeight / 2,
        drawWidth,
        drawHeight
      );

      ctx.restore();

      resolve(canvas.toDataURL('image/png', 0.95));
    };

    img.onerror = (err) => {
      reject(err);
    };

    img.src = imageSrc;
  });
}

export function downloadDataUrl(dataUrl: string, filename: string = 'avatar-preview.png') {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
