type SVGFilterProps = {
  sliderValue: number;   
  normalizedY?: number;   
};

export default function SVGFilter({ sliderValue }: SVGFilterProps) {
  return (
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <filter id="glow">
          <feColorMatrix
            in="SourceGraphic"
            type="luminanceToAlpha"
            result="LUMINANCE"
          />
          <feDiffuseLighting in="LUMINANCE" surfaceScale={40} result="LIGHTING">
            <feDistantLight azimuth={sliderValue} elevation={120} />
          </feDiffuseLighting>
          <feComposite in="LIGHTING" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}
