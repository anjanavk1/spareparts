'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    const phoneNumber = '0655568682'; // Format: country code + number without spaces or special chars
    const message = 'Hello, I would like to inquire about spare parts.';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with us
            </span>
        </button>
    );
}
