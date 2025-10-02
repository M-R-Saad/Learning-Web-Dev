import React from 'react';

const PricingFeatures = ({ features }) => {
    return (
        <div className="mb-6">
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                        <svg 
                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingFeatures;