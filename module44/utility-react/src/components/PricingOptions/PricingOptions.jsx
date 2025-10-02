import React from 'react';
import { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricing = use(pricingPromise);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                    Choose Your Perfect Plan
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transform your fitness journey with our comprehensive gym membership plans. 
                    Find the perfect fit for your lifestyle and goals.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricing.map((option) => (
                    <PricingCard 
                        key={option.id} 
                        option={option}
                    />
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Why Choose Our Gym?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                        <div className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>State-of-the-art Equipment</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Expert Personal Trainers</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Flexible Scheduling</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingOptions;