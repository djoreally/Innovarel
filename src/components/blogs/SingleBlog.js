import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import blog from "../../assets/images/blog1.jpg";
import Link from "next/link";

const SingleBlog = ({ blog }) => {
    // console.log(blog);
    const { blog: blog_text, image, title, _createdAt, _id } = blog || {};
    return (
        <Card className="relative flex-shrink-0 w-full dark:bg-white rounded-lg ">
            <CardHeader>
                <div className="rounded-lg">
                    <Image
                        className="rounded-lg w-full h-96"
                        src={image.url}
                        alt=""
                        width={500}
                        height={500}
                    />
                    <p className="absolute transform rotate-90 - bg-tertiary py-2 px-4 rounded-xl text-white font-semibold md:mt-[-310px] ml-[-25px] mt-[-158px]">
                        {_createdAt.slice(0, 10)}
                    </p>
                </div>
                <br />
            </CardHeader>
            <CardContent>
                {/* <small className="text-tertiary text-base">Design // Development</small> */}
                <h3 className="text-3xl font-bold text-black my-4">{title}</h3>
                <div className="text-black">
                    <PortableText
                        value={blog_text[0]}
                        //   components={/* optional object of custom components to use */}
                    />
                </div>
                <Link href={`/blogs/${_id}`}>
                    <button className="text-tertiary text-base mt-4">Read More</button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default SingleBlog;
