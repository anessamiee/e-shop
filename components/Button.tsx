import Link from 'next/link'
import { UrlObject } from 'url'

declare type Url = string | UrlObject

type Props = {
  children: React.ReactNode
  secondary?: boolean
  className?: string | undefined
  id?: string | undefined
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
  herf?: Url
  scroll?: boolean
}

const Button: React.FC<Props> = ({
  children,
  secondary,
  className,
  id,
  onClick,
  herf,
  scroll,
}) => {
  const button =
    'w-full select-none rounded-[10px] py-1 text-center transition duration-[300] ease-linear active:bg-opacity-90 '
  const pri =
    button +
    'bg-blue text-light-grey hover:shadow-[0px_2px_30px_rgba(69,93,122,0.6)] ' +
    className

  const sec =
    button +
    'border-[2.5px] border-blue bg-white hover:shadow-[0px_2px_15px_rgba(69,93,122,0.6)] ' +
    className

  return (
    <Link href={`${herf !== undefined ? herf : '/'}`} scroll={scroll}>
      <a
        role={'button'}
        className={`${secondary ? sec : pri}`}
        id={id}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  )
}
export default Button
