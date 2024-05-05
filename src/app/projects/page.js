"use client";
import SingleProject from "@/components/projects/SingleProject";
import SingleProjectSkeleton from "@/components/skeletons/SingleProjectSkeleton";
import { useGetProjectsQuery } from "@/redux-toolkit/projects/projectApi";

const ProjectsPage = () => {
    const { data: allProjects, isLoading, error } = useGetProjectsQuery();

    return (
        <section className="bg-cover bg-center py-20" style={{ backgroundImage: "" }}>
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-tertiary w-48 mx-auto my-5">
                    <h1 className="text-white">Projects</h1>
                </div>
                <h3 className="text-center text-4xl font-bold text-primary dark:text-white">
                    Take A Look At Our Latest Work
                </h3>
                <div className="flex justify-center text-black">
                    <ul className="list-none flex flex-wrap gap-5 text-base mt-4 md:mt-6 mb-4 md:mb-6 justify-center">
                        <li className="text-base dark:text-white px-3 py-2 rounded-lg hover:bg-tertiary hover:text-white cursor-pointer">
                            All
                        </li>
                        <li className="text-base dark:text-white px-3 py-2 rounded-lg hover:bg-tertiary hover:text-white cursor-pointer">
                            Web Design
                        </li>
                        <li className="text-base dark:text-white px-3 py-2 rounded-lg hover:bg-tertiary hover:text-white cursor-pointer">
                            Web Development
                        </li>
                        <li className="text-base dark:text-white px-3 py-2 rounded-lg hover:bg-tertiary hover:text-white cursor-pointer">
                            Branding
                        </li>
                        <li className="text-base dark:text-white px-3 py-2 rounded-lg hover:bg-tertiary hover:text-white cursor-pointer">
                            Mobile App
                        </li>
                        <li className="text-base dark:text-white px-3 py-2 rounded-lg hover:bg-tertiary hover:text-white cursor-pointer">
                            SEO
                        </li>
                    </ul>
                </div>
                {isLoading && <SingleProjectSkeleton />}
                {error && <h1>{error.message}</h1>}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
                    {allProjects?.result?.map((project) => (
                        <SingleProject key={project._id} project={project} />
                    ))}
                </div>
                {/* <div className="w-full flex justify-center mt-10">
                    <Button>See all projects</Button>
                </div> */}
            </div>
        </section>
    );
};

export default ProjectsPage;
