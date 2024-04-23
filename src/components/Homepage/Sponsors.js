import React from "react";
import sponsor1 from "../../assets/images/logo-light1.png";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
    return (
        <section className="bg-cover bg-center w-11/12 lg:w-8/12 mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-6 justify-center md:justify-between px-4">
                <Link
                    href={"/"}
                    className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                >
                    <Image src={sponsor1} alt="" className="mx-auto" />
                </Link>
                <Link
                    href={"/"}
                    className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                >
                    <Image src={sponsor1} alt="" className="mx-auto" />
                </Link>
                <Link
                    href={"/"}
                    className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                >
                    <Image src={sponsor1} alt="" className="mx-auto" />
                </Link>
                <Link
                    href={"/"}
                    className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                >
                    <Image src={sponsor1} alt="" className="mx-auto" />
                </Link>
                <Link
                    href={"/"}
                    className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                >
                    <Image src={sponsor1} alt="" className="mx-auto" />
                </Link>
                <Link
                    href={"/"}
                    className="hover:bg-tertiary py-3 text-tertiary mb-2 md:mb-0 md:mr-2 rounded-xl"
                >
                    <Image src={sponsor1} alt="" className="mx-auto" />
                </Link>
            </div>
        </section>
    );
};

export default Sponsors;
