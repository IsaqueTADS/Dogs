import React from "react";

const EstatisticasSvg = (props) => {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={6} y={14} width={2} height={8} rx={1} fill="#333" />
      <rect x={13} y={10} width={2} height={12} rx={1} fill="#333" />
      <rect x={20} y={6} width={2} height={16} rx={1} fill="#333" />
    </svg>
  );
};

export default EstatisticasSvg;
