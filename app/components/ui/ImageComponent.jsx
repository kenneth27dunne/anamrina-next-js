import Image from "next/image";

const ImageComponent = ({ 
  localSrc, 
  strapiImage, 
  alt = "Image", 
  className = "", 
  imgProps = {}, 
  useThumbnail = true,
  priority = false,
  loading = "lazy"
}) => {
    
  var strapiPath = strapiImage?.formats?.small?.url ?? strapiImage?.formats?.thumbnail?.url  
  var stp = strapiPath && strapiPath.length > 0 ? (strapiPath.startsWith("http") ? strapiPath : process.env.NEXT_PUBLIC_BASE_URL + strapiPath) : ""

  let src = localSrc
    ? localSrc
    : stp;

  if (!src) return null; // Avoid rendering if no image source is provided

  // Determine loading strategy
  const loadingStrategy = priority ? "eager" : loading;

  return (
    <Image
      src={src}
      alt={alt ?? "Image"}
      className={className}
      loading={loadingStrategy}
      priority={priority}
      {...imgProps}
    />
  );
};

export default ImageComponent;
