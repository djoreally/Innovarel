import React from "react";

const SingleProjectSkeleton = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 mt-10">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    className=" w-full animate-pulse shadow-lg bg-[#3A2B71] rounded-lg p-5 flex flex-col justify-between gap-3"
                    key={index}
                >
                    <div className="space-y-2 w-full">
                        <div className="h-6 bg-gray-400 rounded w-1/2 mx-auto"></div>
                        <div className="h-6 bg-gray-400 rounded w-1/3 mx-auto"></div>
                        <div className="h-24 bg-gray-400 rounded w-full"></div>
                    </div>

                    <div className="w-full h-80 rounded-lg bg-gray-300"></div>

                    <div className="flex flex-row items-center justify-center gap-2 w-full">
                        <div className="h-6 rounded bg-gray-400 w-24"></div>
                        <div className="h-6 rounded bg-gray-400 w-24"></div>
                        <div className="h-6 rounded bg-gray-400 w-24"></div>
                    </div>
                </div>
            ))}
            {/* Additional project placeholders */}
        </div>
    );
};

export default SingleProjectSkeleton;
