import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
            <div className="shadow-lg bg-[#3A2B71] text-center p-5 rounded-lg flex flex-col justify-between items-center py-10">
                <div className="my-3 space-y-2 w-full">
                    <h3 className="my-0 text-3xl font-bold text-white border-white px-3 rounded-3xl">
                        {name}
                    </h3>
                    {/* <h3 className="my-0 text-xl font-bold text-secondary border-white px-3 rounded-3xl">
                        {category}
                    </h3> */}
                    <div className="mt-3 flex flex-wrap justify-center items-center text-start md:h-24 w-full">
                        <div className="bg-primary p-3 rounded-lg w-full flex items-center justify-center flex-wrap gap-1">
                            {features?.map((feature, index) => (
                                <Badge
                                    className="!border !border-secondary rounded-md !text-secondary text-xs"
                                    key={index}
                                    variant={"outline"}
                                >
                                    {feature}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-72 overflow-hidden hover:overflow-hidden rounded-lg bg-white">
                    <div
                        className="w-full h-full bg-cover bg-no-repeat bg-animation"
                        // style={{
                        //     backgroundImage: `url(${logo})`,
                        // }}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    ></div>
                </div>

                <div className="flex flex-row items-center md:justify-center justify-center gap-2 w-full">
                    <Button variant={"animated"} className="">
                        <a href={live_link} target="_blank" rel="noreferrer">
                            <div className="absolute inset-0 w-1 bg-secondary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="bottom-[2px] relative text-primary group-hover:text-white text-xs font-bold">
                                Live Site
                            </span>
                        </a>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SingleProject;
