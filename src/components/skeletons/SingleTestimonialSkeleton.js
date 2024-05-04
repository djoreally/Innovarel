const SingleTestimonialSkeleton = () => {
    return (
        <div className="w-full">
            <div className="w-full card shadow-xl rounded-lg hover:bg-gradient-to-r from-tertiary to-[#9CFAAC] hover:text-white mt-8 dark:bg-white p-5 text-black animate-pulse">
                <div className="mt-2">
                    <div className="h-4 bg-gray-300 rounded mt-2 w-full"></div>
                    <div className="h-4 bg-gray-300 rounded mt-2 w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
                </div>
                <div className="flex items-center justify-start mt-4">
                    <div>
                        <div className="w-10 h-10 mx-4 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                        <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialSkeleton;
