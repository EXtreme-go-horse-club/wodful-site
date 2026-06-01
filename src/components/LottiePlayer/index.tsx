import * as React from "react";

type LottiePlayerProps = {
  src: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  keepLastFrame?: boolean;
};

type PlayerComponent = React.ComponentType<{
  src?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  keepLastFrame?: boolean;
}>;

export const LottiePlayer = ({
  src,
  style,
  loop = false,
  autoplay = true,
  keepLastFrame = true,
}: LottiePlayerProps) => {
  const [Player, setPlayer] = React.useState<PlayerComponent | null>(null);

  React.useEffect(() => {
    import("@lottiefiles/react-lottie-player").then((mod) => {
      setPlayer(() => mod.Player as PlayerComponent);
    });
  }, []);

  if (!Player) {
    return <div style={style} aria-hidden />;
  }

  return (
    <Player
      src={src}
      style={style}
      loop={loop}
      autoplay={autoplay}
      keepLastFrame={keepLastFrame}
    />
  );
};
