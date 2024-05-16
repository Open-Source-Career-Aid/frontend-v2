const Icon = ({ id }: {id: string }, { size = 24, ...props }) => {

  return(
    <svg width={size} height={size} {...props}>
      <use href={`./icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon