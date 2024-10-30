interface BackgroundImageProps {
  imageUrl: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <div
        className="h-[200%] md:h-full w-[200%] md:w-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          animation: "zoom-in-out 30s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
