"use client";
import Image from "next/image";
import { useGetSponsorsQuery } from "@/redux-toolkit/sponsors/sponsorsApi";

const Sponsors = () => {
    const { data: sponsorsData, isLoading, error } = useGetSponsorsQuery();
    return (
        <section className="bg-cover bg-center w-11/12 lg:w-8/12 mx-auto mt-10">
            <div className="flex justify-center items-center text-lg p-1 shadow-sm rounded-2xl bg-secondary dark:bg-tertiary w-full md:w-1/2 lg:w-1/3 mx-auto  my-10">
                <h1 className="text-white">Collaborators, Partners and Sponsors</h1>
            </div>
            {error && <h1>{error.message}</h1>}
            {!isLoading && sponsorsData.result.length === 0 && (
                <h3 className="text-center">No Data Found</h3>
            )}
            {!isLoading && sponsorsData.result.length > 0 && (
                <div className="flex flex-row justify-center flex-wrap px-4 w-full mx-auto">
                    {sponsorsData.result.map((sponsor) => {
                        const {
                            _id,

                            image,
                            url,
                        } = sponsor || {};
                        return (
                            <a
                                key={_id}
                                href={url}
                                target="_blank"
                                className=" hover:bg-secondary dark:hover:bg-tertiary p-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-full w-24 h-24 flex justify-center items-center"
                            >
                                <Image
                                    src={image.url}
                                    alt=""
                                    className="mx-auto w-18 h-18 rounded-full"
                                    width={500}
                                    height={500}
                                />
                            </a>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Sponsors;
