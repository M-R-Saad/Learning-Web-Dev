import React from 'react';

const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#59C6D2] via-[#aaf0d1] to-[#23BE0A] text-gray-700 transition-all duration-700">
            <div className="bg-white px-10 py-12 rounded-2xl shadow-2xl text-center max-w-lg border border-[#59C6D2] animate-fade-in">
                <svg width="72" height="72" fill="none" viewBox="0 0 72 72" className="mx-auto mb-6 animate-bounce-slow">
                    <circle cx="36" cy="36" r="36" fill="#59C6D2" opacity="0.15"/>
                    <circle cx="36" cy="36" r="28" fill="#23BE0A" opacity="0.10"/>
                    <path d="M36 22v18M36 48h.01" stroke="#23BE0A" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <h2 className="text-4xl font-extrabold mb-3 text-[#59C6D2] animate-slide-down">
                    404 - Page Not Found
                    </h2>
                <p className="playfair-display mb-8 text-gray-500 text-lg animate-fade-in">
                    Oops! The page you are looking for doesn’t exist.<br />
                    Let’s get you back on track!
                </p>
                <a
                    href="/"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#23BE0A] via-[#59C6D2] to-[#aaf0d1] text-white rounded-lg font-bold shadow-lg hover:scale-105 transition-transform duration-200 font-['Inter','Segoe UI',sans-serif] animate-pop"
                >
                    Go Home
                </a>
            </div>
            <style>
                {`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-down {
                    from { transform: translateY(-30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pop {
                    0% { transform: scale(0.9); }
                    80% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                .animate-fade-in { animation: fade-in 1s ease; }
                .animate-slide-down { animation: slide-down 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
                .animate-bounce-slow { animation: bounce-slow 2s infinite; }
                .animate-pop { animation: pop 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
                `}
            </style>
        </div>
    );
};

export default Errorpage;