import { StyledImage } from "./Image.styles";

function Image({ src, alt, width, border }) {

  console.log(border);
  return (
    <StyledImage
      type="image"
      width={width}
      border={border}
      src={src}
      alt={alt}
    />
  );
}

export default Image;
