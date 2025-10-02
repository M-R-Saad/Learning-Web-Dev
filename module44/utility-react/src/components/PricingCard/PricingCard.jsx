import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ option }) => {
    const { name, price, description, features } = option;
    
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 h-full">
            <div className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
                
                <div className="flex-grow">
                    <PricingFeatures features={features} />
                </div>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gray-100 hover:bg-blue-500 text-gray-700 hover:text-white border-2 border-gray-200 hover:border-blue-500">
                    Choose Plan
                </button>
            </div>
        </div>
    );
};

export default PricingCard;