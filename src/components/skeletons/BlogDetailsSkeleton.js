import React from "react";

const BlogDetailsPageSkeleton = () => {
    return (
        <main className="py-20 w-11/12 mx-auto">
            <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96 animate-pulse">
                <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gray-300"></div>
                <div className="absolute left-0 top-0 w-full h-full z-0 bg-gray-400"></div>
                <div className="w-full p-4 absolute bottom-0 left-0 z-20">
                    <div className="px-4 py-1 bg-gray-500 inline-flex items-center justify-center mb-2 w-24 h-6"></div>
                    <div className="text-4xl font-semibold h-16 w-full bg-gray-500 mb-2"></div>
                    <div className="flex mt-3">
                        <div className="h-10 w-10 rounded-full mr-2 bg-gray-500"></div>
                        <div>
                            <div className="font-semibold text-sm h-4 w-24 bg-gray-500 mb-1"></div>
                            <div className="font-semibold text-xs h-3 w-16 bg-gray-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 max-w-screen-md mx-auto">
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
                <div className="h-5 w-full bg-gray-500 mb-4 animate-pulse"></div>
            </div>
        </main>
    );
};

export default BlogDetailsPageSkeleton;
