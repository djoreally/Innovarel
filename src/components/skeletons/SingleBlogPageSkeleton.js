import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SingleBlogPageSkeleton = () => {
    return (
        <Card className="my-10 relative flex-shrink-0 w-full md:w-1/2 dark:bg-white rounded-lg animate-pulse h-[40rem]">
            <CardHeader>
                <div className="rounded-lg">
                    <div className="bg-gray-300 rounded-lg h-48"></div>
                    {/* <div className="absolute transform -rotate-90 bg-gray-400 py-2 px-4 rounded-xl text-transparent font-semibold md:mt-[-310px] ml-[-25px] mt-[-158px]">
                        25 / March
                    </div> */}
                </div>
                <br />
            </CardHeader>
            <CardContent>
                <div className="h-4 bg-gray-300 rounded mt-4 w-32"></div>
                <div className="h-6 bg-gray-300 rounded mt-4 w-full"></div>
                <div className="h-4 bg-gray-300 rounded mt-4 w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded mt-4 w-24"></div>
                <div className="h-4 bg-gray-300 rounded mt-4 w-32"></div>
                <div className="h-6 bg-gray-300 rounded mt-4 w-full"></div>
                <div className="h-4 bg-gray-300 rounded mt-4 w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded mt-4 w-24"></div>
            </CardContent>
        </Card>
    );
};

export default SingleBlogPageSkeleton;
