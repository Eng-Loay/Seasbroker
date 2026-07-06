import { useEffect, useState } from 'react'
import { resolveAssetUrl } from '../utils/resolveAssetUrl'

export default function SafeImage({ src, fallback, alt = '', className, ...props }) {
  const resolved = resolveAssetUrl(src, fallback)
  const [currentSrc, setCurrentSrc] = useState(resolved)

  useEffect(() => {
    setCurrentSrc(resolveAssetUrl(src, fallback))
  }, [src, fallback])

  return (
    <img
      {...props}
      className={className}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback)
        }
      }}
    />
  )
}
