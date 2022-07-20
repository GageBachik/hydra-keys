type Props = {
  height?: string
  width?: string
  fill?: string
  className?: string
}

const ArrowSvg: React.FC<Props> = ({ height, width, fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      width={width}
      height={height}
      fill={fill}
      color={fill}
      className={className}
      style={{ marginLeft: '15px' }}
      xmlSpace="preserve"
    >
      <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  )
}

export default ArrowSvg
