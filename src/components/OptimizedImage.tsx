import { useState, useEffect } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    sizes?: string;
}

/**
 * Componente de imagen optimizado con:
 * - Lazy loading nativo
 * - Soporte para WebP con fallback
 * - Priorización configurable
 * - Placeholder mientras carga
 */
export default function OptimizedImage({
    src,
    alt,
    className = '',
    priority = false,
    sizes = '100vw',
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        // Intentar convertir a WebP si es de Cloudinary
        if (src.includes('cloudinary.com')) {
            const webpSrc = src.replace(/\.(jpg|jpeg|png)/, '.webp');
            setImageSrc(webpSrc);
        }
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder mientras carga */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
            )}

            <img
                src={imageSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'low'}
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    // Fallback a la imagen original si WebP falla
                    if (imageSrc !== src) {
                        setImageSrc(src);
                    }
                }}
                sizes={sizes}
            />
        </div>
    );
}
