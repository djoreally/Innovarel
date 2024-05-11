"use client";
import sponsor1 from "../../assets/images/logo-light1.png";
import Image from "next/image";
import Link from "next/link";
import { useGetSponsorsQuery } from "@/redux-toolkit/sponsors/sponsorsApi";

const Sponsors = () => {
    const { data: sponsorsData, isLoading, error } = useGetSponsorsQuery();
    return (
        <section className="bg-cover bg-center w-11/12 lg:w-8/12 mx-auto ">
            {error && <h1>{error.message}</h1>}
            {!isLoading && sponsorsData.result.length === 0 && (
                <h3 className="text-center">No Data Found</h3>
            )}
            {!isLoading && sponsorsData.result.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-6 justify-center md:justify-between px-4">
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
                                className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                            >
                                <Image src={image} alt="" className="mx-auto" />
                            </a>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Sponsors;
