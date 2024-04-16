import Image from "next/image";
import React from "react";
import happinessImg from "../../assets/images/happiness.png";
import monitorImg from "../../assets/images/monitor.png";
import startupImg from "../../assets/images/startup.png";
import confettiImg from "../../assets/images/confetti.png";

const Summary = () => {
    return (
        <section className="bg-primary dark:bg-white py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 lg:w-8/12 mx-auto justify-between">
                <div className="text-center">
                    <p className="text-5xl p-2 text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Satisfied Clients</p>
                    <Image className="h-8 w-8 mx-auto" src={happinessImg} alt="" />
                </div>
                <div className="text-center">
                    <p className="text-5xl p-2 text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Project Completed</p>
                    <Image className="h-8 w-8 mx-auto" src={monitorImg} alt="" />
                </div>
                <div className="text-center">
                    <p className="text-5xl p-2 text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Project Launched</p>
                    <Image className="h-8 w-8 mx-auto" src={startupImg} alt="" />
                </div>
                <div className="text-center">
                    <p className="text-5xl p-2 text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Years Completed</p>
                    <Image className="h-8 w-8 mx-auto" src={confettiImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Summary;
