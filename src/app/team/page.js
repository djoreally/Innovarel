"use client";
import { GithubIcon, LinkIcon, LinkedinIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetTeamQuery } from "@/redux-toolkit/team/teamApi";
import TeamSkeleton from "@/components/skeletons/TeamSkeleton";
import Image from "next/image";
import Link from "next/link";

const TeamPage = () => {
    const { data: team, isLoading, error } = useGetTeamQuery();
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

                {isLoading && <TeamSkeleton />}
                {error && <h1>{error.message}</h1>}
                {!isLoading && team.result.length === 0 && <h3>No Data Found</h3>}
                {!isLoading && team.result.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                        {team.result.map((member) => {
                            const {
                                _id,
                                name,
                                image,
                                designation,
                                facebook_link,
                                github_link,
                                portfolio_link,
                                linkedin_link,
                            } = member || {};
                            return (
                                <div
                                    className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-tertiary dark:border-gray-700 dark:hover:border-transparent"
                                    key={_id}
                                >
                                    <Image
                                        className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                        src={image.url}
                                        alt=""
                                        width={500}
                                        height={500}
                                    />

                                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                        {name}
                                    </h1>

                                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                        {designation}
                                    </p>

                                    <div className="flex mt-3 -mx-2">
                                        <a href={github_link} target="_blank">
                                            <Button
                                                size="icon"
                                                className="bg-white dark:bg-white border-none text-black dark:text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                disabled={!github_link}
                                            >
                                                <GithubIcon />
                                            </Button>
                                        </a>
                                        <a href={facebook_link} target="_blank">
                                            <Button
                                                size="icon"
                                                className="bg-white dark:bg-white border-none text-blue-600 dark:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                disabled={!facebook_link}
                                            >
                                                <FacebookIcon />
                                            </Button>
                                        </a>

                                        <a href={linkedin_link} target="_blank">
                                            <Button
                                                size="icon"
                                                className="bg-white dark:bg-white border-none text-sky-500 dark:text-sky-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                disabled={!linkedin_link}
                                            >
                                                <LinkedinIcon />
                                            </Button>
                                        </a>
                                        <a href={portfolio_link} target="_blank">
                                            <Button
                                                size="icon"
                                                target="_blank"
                                                className="bg-white dark:bg-white border-none text-black dark:text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                                disabled={!portfolio_link}
                                            >
                                                <LinkIcon />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TeamPage;
