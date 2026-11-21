import { useState } from 'react';
import { Film } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackVariant?: 'crimson' | 'studio';
  showLabel?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'MARSHA YOSELINE FAU',
  fallbackSubtitle = 'PORTFOLIO 2026',
  fallbackVariant = 'studio',
  showLabel = true,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const bgStyle =
      fallbackVariant === 'crimson'
        ? 'bg-[radial-gradient(circle_at_35%_25%,rgba(225,29,72,0.45),rgba(110,13,25,0.92)_65%,#070B12_100%)]'
        : 'bg-[radial-gradient(circle_at_75%_20%,rgba(56,189,248,0.28),rgba(12,26,42,0.92)_60%,#05080D_100%)]';

    if (!showLabel) {
      return (
        <div
          role="img"
          aria-label={alt}
          className={`pointer-events-none select-none ${bgStyle} ${className}`}
        >
          <div className="w-full h-full opacity-25 bg-[radial-gradient(rgba(125,211,252,0.35)_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center p-6 text-center select-none ${bgStyle} ${className}`}
      >
        <div className="w-12 h-12 rounded-xl border border-white/15 bg-black/30 flex items-center justify-center mb-3 text-[#7DD3FC]">
          <Film className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="font-display text-lg tracking-wider text-white/90 leading-tight">
          {fallbackTitle}
        </span>
        <span className="font-condensed text-[11px] font-semibold tracking-[0.2em] text-white/55 uppercase mt-1">
          {fallbackSubtitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
