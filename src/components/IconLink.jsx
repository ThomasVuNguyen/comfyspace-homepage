import Link from 'next/link'
import clsx from 'clsx'

export function IconLink({
  children,
  className,
  compact = false,
  icon: Icon,
  href,
  ...props
}) {
  // Check if it's an external link
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'))
  
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          className,
          'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium font-display text-white/30 transition-colors hover:text-sky-300',
          compact ? 'gap-x-2' : 'gap-x-3',
        )}
        {...props}
      >
        <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
        {Icon && <Icon className="h-4 w-4 flex-none" />}
        <span className="self-baseline text-white">{children}</span>
      </a>
    )
  }

  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        className,
        'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium font-display text-white/30 transition-colors hover:text-sky-300',
        compact ? 'gap-x-2' : 'gap-x-3',
      )}
    >
      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
      {Icon && <Icon className="h-4 w-4 flex-none" />}
      <span className="self-baseline text-white">{children}</span>
    </Link>
  )
}
