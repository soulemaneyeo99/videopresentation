import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // 1. Background Animation (Subtle Zoom)
  const bgScale = interpolate(frame, [0, 150], [1, 1.1], {
    extrapolateRight: "clamp",
  });

  // 2. Title Animation (Spring Entrance)
  const titleSpring = spring({
    frame: frame - 15,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
    },
  });

  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 0.5], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  // 3. Subtitle Typewriter Effect
  const subtitleText = "L'intelligence visuelle à 360 degrés.";
  const typeWriterProgress = interpolate(frame, [45, 120], [0, subtitleText.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const currentSubtitle = subtitleText.slice(0, Math.floor(typeWriterProgress));

  return (
    <div
      className="flex flex-col items-center justify-center bg-zinc-950 font-sans text-white"
      style={{
        width,
        height,
      }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-linear-to-br from-indigo-600/20 via-zinc-950 to-emerald-500/10"
        style={{
          transform: `scale(${bgScale})`,
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Title */}
        <h1
          className="text-8xl font-black tracking-tighter"
          style={{
            transform: `scale(${titleScale}) translateY(${titleY}px)`,
            opacity: titleOpacity,
            filter: `blur(${interpolate(titleSpring, [0, 1], [20, 0])}px)`,
          }}
        >
          VISION <span className="text-indigo-500">360</span>
        </h1>

        {/* Subtitle */}
        <p className="min-h-[2rem] text-2xl font-medium text-zinc-400 opacity-80 decoration-indigo-500/30 underline-offset-8 hover:underline">
          {currentSubtitle}
          <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-indigo-500" />
        </p>

        {/* Decorative Element */}
        <div
          className="mt-8 h-px w-24 bg-linear-to-r from-transparent via-indigo-500 to-transparent"
          style={{
            transform: `scaleX(${titleSpring})`,
            opacity: titleOpacity,
          }}
        />
      </div>
    </div>
  );
};
