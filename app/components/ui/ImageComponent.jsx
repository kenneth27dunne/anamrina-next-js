import Image from "next/image";

const ImageComponent = ({ localSrc, strapiImage, alt = "Image", className = "", imgProps = {} }) => {
    
  var strapiPath = strapiImage?.formats?.thumbnail?.url

  console.log("1 - ", strapiPath)

  var stp = strapiPath && strapiPath.length > 0 ? (strapiPath.startsWith("http") ? strapiPath : process.env.NEXT_PUBLIC_BASE_URL + strapiPath) : ""

  console.log("2 - ", stp)

  let src = localSrc
    ? localSrc
    : stp;

  console.log("3 - ", src)

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
