import * as React from "react"

function CloseSVG(props) {
  return (
    <svg
      width={224}
      height={224}
      viewBox="0 0 224 224"
      {...props}
    >
      <path
        d="M224 22.56L201.44 0 112 89.44 22.56 0 0 22.56 89.44 112 0 201.44 22.56 224 112 134.56 201.44 224 224 201.44 134.56 112 224 22.56z"
        fill="#C1C1C1"
        fillOpacity={0.8}
      />
    </svg>
  )
}

export default CloseSVG