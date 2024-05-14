import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SingleProject = ({ project }) => {
    // console.log(project);
    const { _id, name, live_link, image, features } = project || {};
    return (
        <>
            {/* <section class="relative w-full mx-auto overlay-parent h-96">
                <Image
                    className=" w-full  rounded-md h-96"
                    src={image.url}
                    alt="project image"
                    width={500}
                    height={500}
                    // fill
                />
                <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md overlay-content"></div>
                <div class="absolute inset-0 flex items-center justify-center overlay-content">
                    <a href={live_link} target="_blank">
                        <Button className="bg-tertiary text-white">See Live Site</Button>
                    </a>
                </div>
            </section> */}
            <Card className="shadow-lg bg-white dark:bg-white text-center p-5 rounded-lg flex flex-col justify-between items-center py-10 gap-5">
                <div className=" w-full">
                    <h3 className="my-3 text-3xl font-bold text-secondary dark:text-tertiary border-white px-3 rounded-3xl">
                        {name}
                    </h3>
                    {/* <h3 className="my-0 text-xl font-bold text-secondary border-white px-3 rounded-3xl">
                        {category}
                    </h3> */}
                    {features?.length > 0 && (
                        <div className="flex flex-wrap justify-center items-center text-start  w-full">
                            <div className="bg-secondary dark:bg-tertiary p-3 rounded-lg w-full flex items-center justify-center flex-wrap gap-1">
                                {features?.map((feature, index) => (
                                    <Badge
                                        className="!border !border-white rounded-md !text-white text-xs"
                                        key={index}
                                        variant={"outline"}
                                    >
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full h-72  rounded-lg bg-secondary dark:bg-tertiary overflow-hidden hover:overflow-hidden p-1">
                    <div
                        className="w-full h-full bg-cover bg-no-repeat bg-animation rounded-md  dark:border-tertiary"
                        // style={{
                        //     backgroundImage: `url(${logo})`,
                        // }}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    ></div>
                </div>

                <div className="flex flex-row items-center md:justify-center justify-center gap-2 w-full">
                    <a href={live_link} target="_blank">
                        <Button
                            className={
                                "bg-secondary dark:bg-tertiary border-secondary dark:border-tertiary hover:text-secondary dark:hover:text-tertiary"
                            }
                        >
                            Contact us
                        </Button>
                    </a>
                </div>
            </Card>
        </>
    );
};

export default SingleProject;
