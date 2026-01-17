'use client';

import Link from "next/link";
import Image from "next/image";

const lubricants = [
    { name: 'Castrol', logo: '/oils/castrol.png' },
    { name: 'Shell', logo: '/oils/shell.png' },
    { name: 'ADNOC', logo: '/oils/adnoc.png' },
    { name: 'Total', logo: '/oils/total.png' },
    { name: 'Zic', logo: '/oils/zic.png' },
    { name: 'Dufe', logo: '/oils/dufe.png' },
    { name: 'BP', logo: '/oils/bp.png' },
];

export function LubricantsSlider() {
    return (
        <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-infinite">
                {/* Duplicate the array 3 times for seamless infinite scroll */}
                {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-8 flex-shrink-0">
                        {lubricants.map((oil, index) => (
                            <Link
                                key={`${setIndex}-${oil.name}-${index}`}
                                href={`/shop?category=${encodeURIComponent(oil.name)}`}
                                className="group flex-shrink-0"
                            >
                                <div className="bg-transparent rounded-xl transform hover:-translate-y-1 transition-all duration-300 w-48 h-48 flex items-center justify-center p-4 relative overflow-hidden">
                                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                                        <Image
                                            src={oil.logo}
                                            alt={`${oil.name} logo`}
                                            width={180}
                                            height={120}
                                            className="object-contain max-h-32 transition-transform duration-500 group-hover:scale-110 filter drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
