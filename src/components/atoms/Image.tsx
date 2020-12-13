import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<Props> = ({ src, alt, className = "", ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default Image;
