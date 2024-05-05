import React from "react";

const SingleProjectSkeleton = () => {
    return (
        <div>
            {/* <div className="flex justify-center text-black">
                <ul className="list-none flex flex-wrap gap-5 text-base mt-4 md:mt-6 mb-4 md:mb-6 justify-center">
                    <li className="h-8 bg-gray-300 rounded-lg w-16"></li>
                    <li className="h-8 bg-gray-300 rounded-lg w-28"></li>
                    <li className="h-8 bg-gray-300 rounded-lg w-36"></li>
                    <li className="h-8 bg-gray-300 rounded-lg w-20"></li>
                    <li className="h-8 bg-gray-300 rounded-lg w-24"></li>
                    <li className="h-8 bg-gray-300 rounded-lg w-12"></li>
                </ul>
            </div> */}
            <div className="relative w-full mx-auto animate-pulse">
                <div className="bg-gray-300 rounded-md h-96"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 bg-gray-400 rounded w-24"></div>
                </div>
            </div>
            {/* Additional project placeholders */}
        </div>
    );
};

export default SingleProjectSkeleton;
