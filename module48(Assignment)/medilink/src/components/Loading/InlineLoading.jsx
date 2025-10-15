import React from 'react';

const InlineLoading = ({ message = "", size = "md" }) => {
    return (
        <div className="flex items-center justify-center gap-3 py-4">
            <span className={`loading loading-${size} loading-spinner text-info`}></span>
            {message && <span className="text-gray-600">{message}</span>}
        </div>
    );
};

export default InlineLoading;