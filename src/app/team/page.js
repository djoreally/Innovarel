"use client";
import { GithubIcon, LinkIcon, LinkedinIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetTeamQuery } from "@/redux-toolkit/team/teamApi";

const TeamPage = () => {
    const { data: team, isLoading, error } = useGetTeamQuery();
    console.log(team);
    return (
        <section className="h-screen flex items-center">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-4xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Our Executive Team
                </h1>

                {/* <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex
                        placeat modi magni quia error alias, adipisci rem similique, at omnis
                        eligendi optio eos harum.
                    </p> */}

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-tertiary dark:border-gray-700 dark:hover:border-transparent">
                        <img
                            className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                        />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                            arthur melo
                        </h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                            design director
                        </p>

                        <div className="flex mt-3 -mx-2">
                            <Button
                                size="icon"
                                href="#"
                                className="bg-white dark:bg-white border-none text-black dark:text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            >
                                <GithubIcon />
                            </Button>

                            <Button
                                size="icon"
                                href="#"
                                className="bg-white dark:bg-white border-none text-blue-600 dark:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            >
                                <FacebookIcon />
                            </Button>

                            <Button
                                size="icon"
                                href="#"
                                className="bg-white dark:bg-white border-none text-sky-500 dark:text-sky-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            >
                                <LinkedinIcon />
                            </Button>
                            <Button
                                size="icon"
                                href="#"
                                className="bg-white dark:bg-white border-none text-black dark:text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            >
                                <LinkIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamPage;
