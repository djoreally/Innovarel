import { BarChart3Icon, PartyPopperIcon, RocketIcon, SmilePlusIcon } from "lucide-react";

const Summary = () => {
    return (
        <section className="bg-primary dark:bg-white py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 lg:w-8/12 mx-auto justify-between">
                <div className="text-center">
                    <p className="text-5xl p-2 text-secondary dark:text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Satisfied Clients</p>
                    <SmilePlusIcon className="w-16 h-16 mx-auto text-secondary dark:text-tertiary" />
                </div>
                <div className="text-center">
                    <p className="text-5xl p-2 text-secondary dark:text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Project Completed</p>
                    <BarChart3Icon className="w-16 h-16 mx-auto text-secondary dark:text-tertiary" />
                </div>
                <div className="text-center">
                    <p className="text-5xl p-2 text-secondary dark:text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Project Launched</p>
                    <RocketIcon className="w-16 h-16 mx-auto text-secondary dark:text-tertiary" />
                </div>
                <div className="text-center">
                    <p className="text-5xl p-2 text-secondary dark:text-tertiary">0000+</p>
                    <p className="text-white dark:text-primary text-2xl pb-2">Years Completed</p>
                    <PartyPopperIcon className="w-16 h-16 mx-auto text-secondary dark:text-tertiary" />
                </div>
            </div>
        </section>
    );
};

export default Summary;
