import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import blog from "../../assets/images/blog1.jpg";
import Link from "next/link";
import SingleBlogPageSkeleton from "../skeletons/SingleBlogPageSkeleton";

const SingleBlog = () => {
    return (
        // <Card className="relative flex-shrink-0 w-full md:w-1/2 dark:bg-white rounded-lg">
        //     <CardHeader>
        //         <div className="rounded-lg">
        //             <Image className="rounded-lg" src={blog} alt="" />
        //             <p className="absolute transform rotate-90 - bg-tertiary py-2 px-4 rounded-xl text-white font-semibold md:mt-[-310px] ml-[-25px] mt-[-158px]">
        //                 25 / March
        //             </p>
        //         </div>
        //         <br />
        //     </CardHeader>
        //     <CardContent>
        //         <small className="text-tertiary text-base">Design // Development</small>
        //         <h3 className="text-3xl font-bold text-black mt-4">
        //             Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.
        //         </h3>
        //         <p className="text-base text-black mt-4">
        //             Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam.
        //             Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit.
        //             Pellentesque ut scelerisque ante.
        //         </p>
        //         <Link href={"/blogs/1"}>
        //             <button className="text-tertiary text-base mt-4">Read More</button>
        //         </Link>
        //     </CardContent>
        // </Card>
        <SingleBlogPageSkeleton />
    );
};

export default SingleBlog;
