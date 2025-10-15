import React from 'react';

const Loading = ({ message = "Loading...", size = "xl" }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[50vh] gap-4">
            <span className={`loading loading-${size} loading-spinner text-info`}></span>
            <p className="text-gray-600 font-medium">{message}</p>
        </div>
    );
};

export default Loading;