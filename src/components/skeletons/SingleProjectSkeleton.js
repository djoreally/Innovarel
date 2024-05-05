import React from "react";

const SingleProjectSkeleton = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 mt-10">
            {Array.from({ length: 6 }).map((_, index) => (
                <div className="relative w-full mx-auto animate-pulse" key={index}>
                    <div className="bg-gray-300 rounded-md h-96"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 bg-gray-400 rounded w-24"></div>
                    </div>
                </div>
            ))}
            {/* Additional project placeholders */}
        </div>
    );
};

export default SingleProjectSkeleton;
