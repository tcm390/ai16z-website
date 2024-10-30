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
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
