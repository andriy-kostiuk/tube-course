import clsx from 'clsx'

interface AvatarProps {
  src?: string
  alt?: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fallback?: string
  className?: string
}

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
  '2xl': 120,
}

export const Avatar = ({ src, alt = 'Avatar', size, className }: AvatarProps) => {
  return (
    <div className={clsx('avatar', `avatar--${size}`, className)}>
      {src && (
        <img
          alt={alt}
          src={src}
          width={sizeMap[size]}
          height={sizeMap[size]}
          className={'avatar--image'}
        />
      )}
    </div>
  )
}
