interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  showText?: boolean
  dark?: boolean
}

export default function Logo({ variant = 'full', className = '', showText = false, dark = false }: LogoProps) {
  const iconSrc = '/logo-icon.svg'
  const fullLogoSrc = '/logo.svg'

  if (variant === 'icon') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img 
          src={iconSrc} 
          alt="Polaris" 
          className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0"
        />
        {showText && (
          <span className={`text-xl md:text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Polaris
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={fullLogoSrc} 
        alt="Polaris Consulting" 
        className="h-10 md:h-12 w-auto max-w-[200px] md:max-w-[250px]"
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
