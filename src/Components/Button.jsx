import React from "react";

function Button(props) {
  const { child, alt, className, width, height, onClick } = props;
  return (
    <button className={`${className}`} onClick={onClick}>
      <img src={child} alt={alt} height={height} width={width} />
    </button>
  );
}

export default Button;
