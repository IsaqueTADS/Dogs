import React from "react";

const SairSvg = (props) => {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.293 9.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L21.586 15H12a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 6a1 1 0 011-1h9a1 1 0 011 1v4a1 1 0 11-2 0V7H7v14h7v-3a1 1 0 112 0v4a1 1 0 01-1 1H6a1 1 0 01-1-1V6z"
        fill="#333"
      />
    </svg>
  );
};

export default SairSvg;
