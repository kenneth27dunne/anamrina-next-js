import Image from "next/image";

const ImageComponent = ({ localSrc, strapiImage, alt = "Image", className = "", imgProps = {} }) => {
    
  const src = localSrc
    ? localSrc
    : `${process.env.NEXT_PUBLIC_BASE_URL}${strapiImage.formats.thumbnail.url}`;

  if (!src) return null; // Avoid rendering if no image source is provided

  return (
    <Image
      src={src}
      alt={alt ?? "Image"}
      className={className}
      {...imgProps}
    />
  );
};

export default ImageComponent;
