import Image from "next/image";
import { Button } from "@/components/ui/button";

const SingleProject = ({ project }) => {
    // console.log(project);
    const { _id, name, live_link, image } = project || {};
    return (
        <section class="relative w-full mx-auto overlay-parent h-96">
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
        </section>
    );
};

export default SingleProject;
