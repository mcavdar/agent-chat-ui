export function LangGraphLogoSVG({
  className,
  width,
  height,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 128 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

<rect
    x="16"
    y="18"
    width="96"
    height="84"
    rx="28"
    stroke="#0A0A0A"
    stroke-width="8"
  />

  <path
    d="M44 86 L30 102 L52 94"
    stroke="#0A0A0A"
    stroke-width="8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <circle cx="46" cy="60" r="5" fill="#14B8A6"/>
  <circle cx="64" cy="60" r="5" fill="#14B8A6"/>
  <circle cx="82" cy="60" r="5" fill="#14B8A6"/>
    </svg>
  );
}
