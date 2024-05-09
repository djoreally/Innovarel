import React from "react";

const TeamSkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-tertiary dark:border-gray-700 dark:hover:border-transparent animate-pulse"
                    key={index}
                >
                    <div className="w-32 h-32 rounded-full bg-gray-300"></div>
                    <div className="mt-4 h-6 w-32 bg-gray-300 rounded"></div>
                    <div className="mt-2 h-4 w-24 bg-gray-300 rounded"></div>
                    <div className="flex mt-3 -mx-2">
                        <div className="bg-gray-300 h-10 w-10 rounded-full mr-2"></div>
                        <div className="bg-gray-300 h-10 w-10 rounded-full mr-2"></div>
                        <div className="bg-gray-300 h-10 w-10 rounded-full mr-2"></div>
                        <div className="bg-gray-300 h-10 w-10 rounded-full mr-2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamSkeleton;
