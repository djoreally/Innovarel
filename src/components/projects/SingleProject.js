import Image from "next/image";
import project1 from "../../assets/images/project-1.jpeg";
import { Button } from "@/components/ui/button";
import SingleProjectSkeleton from "../skeletons/SingleProjectSkeleton";

const SingleProject = () => {
    return (
        // <div class="relative w-full mx-auto overlay-parent h-96">
        //     <Image class=" w-full object-cover rounded-md h-96" src={project1} alt="Random image" />
        //     <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md overlay-content"></div>
        //     <div class="absolute inset-0 flex items-center justify-center overlay-content">
        //         <Button className="bg-tertiary text-white">See Live Site</Button>
        //     </div>
        // </div>
        <SingleProjectSkeleton />
    );
};

export default SingleProject;
