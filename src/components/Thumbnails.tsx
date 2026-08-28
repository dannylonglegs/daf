type ThumbnailsProps = {
  images: string[];
  onSelect: (idx: number) => void;
  hoveredIndex: number | null;
  onHoverChange: (idx: number | null) => void;
  className?: string;
};

export default function Thumbnails({
  images,
  onSelect,
  hoveredIndex,
  onHoverChange,
  className = "",
}: ThumbnailsProps) {
  return (
    <div
      className={`my-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-w-[900px] ${className}`}
    >
      {images.map((src, idx) => (
        <button
          key={src}
          type="button"
          onClick={() => onSelect(idx)}
          onMouseEnter={() => onHoverChange(idx)}
          onMouseLeave={() => onHoverChange(null)}
          className={`aspect-square overflow-hidden border cursor-pointer transition ${
            hoveredIndex === idx ? "invert border-white" : "border-white/40"
          }`}
        >
          <img
            src={src}
            alt={`Thumbnail ${idx + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </button>
      ))}
    </div>
  );
}