import * as React from "react";

const DogsSvgFooter = (props) => {
  return (
    <svg
      width={28}
      height={22}
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z"
        fill="#764701"
      />
      <circle cx={21} cy={3} r={3} fill="#764701" />
      <circle cx={7} cy={3} r={3} fill="#764701" />
    </svg>
  );
};

export default DogsSvgFooter;
