import { useEffect } from "react";
import { LoaderCircle } from "lucide-react";
// Store
import { setStartups, $startups, $searchString, $selectedCategory } from "../store/startups";
import { useStore } from "@nanostores/react";
// Components
import StartupsFilters from "./StartupsFilters";
import StartupsSearch from "./StartupsSearch";
import StartupCard from "./StartupCard";
import { getCollection } from "astro:content";

const StartupsContainer = () => {
    const startups = useStore($startups);
    const searchString = useStore($searchString);
    const selectedCategory = useStore($selectedCategory);

    useEffect(() => {
        const getStartups = async () => {
            try {
                console.log("fetching contents");
                const startups = await getCollection("startups");
                setStartups(startups.map((startup) => startup.data));
            } catch (e) {
                console.error((e as Error).message);
            }
        };
        getStartups();
    }, []);

    if (!startups) {
        return (
            <div className="self-center justify-self-center">
                <LoaderCircle className="animate-spin text-teal-400" size={48} />
            </div>
        );
    }

    return (
        <section>
            <h1 className="text-4xl font-bold tracking-tighter text-center my-4">Rail Startups</h1>
            <p className="text-center text-pretty text-sm text-slate-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, inventore.</p>
            <div className="border-b border-teal-900/20 mx-auto w-2/3 my-6"></div>
            <div className="grid items-center gap-4">
                <StartupsFilters />
                <StartupsSearch />
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {startups
                    .filter((startup) =>
                        startup.companyName.toLowerCase().includes(searchString.toLowerCase())
                    )
                    .filter(
                        (startup) =>
                            selectedCategory === null ||
                            startup.categories.includes(selectedCategory)
                    )
                    .map((startup) => (
                        <StartupCard key={startup.companyName} startup={startup} />
                    ))}
            </section>
        </section>
    );
};

export default StartupsContainer;
