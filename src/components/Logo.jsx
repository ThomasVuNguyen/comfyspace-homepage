import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={140}
      height={32}
      priority
      {...props}
    />
  )
}
