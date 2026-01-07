interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  dark?: boolean
}

export default function Logo({ variant = 'full', className = '', dark = false }: LogoProps) {
  const logoSrc = '/logo.svg'

  if (variant === 'icon') {
    // For icon variant, we'll show just the compass icon part
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src={logoSrc} 
          alt="Polaris Consulting" 
          className="h-10 w-auto"
          style={{ objectFit: 'contain' }}
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Polaris Consulting" 
        className="h-12 md:h-14 w-auto"
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
