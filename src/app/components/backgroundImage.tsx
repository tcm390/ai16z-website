interface BackgroundImageProps {
  imageUrl: string;
  altText?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  altText = "background image",
}) => {
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
      <img
        src={imageUrl}
        alt={altText}
        className="h-[300%] md:h-full w-[300%] md:w-full"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          animation: "zoom-in-out 30s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
