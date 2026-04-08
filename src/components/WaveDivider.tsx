export default function WaveDivider({
  fill = "#ffffff",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        className="w-full h-12 sm:h-16 md:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
