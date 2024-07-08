import { LoaderCircle } from "lucide-react";
import HeroLogo from "../../src/assets/hero-logo.webp";
// Store
import { $searchString, $selectedCategory, type AllCategories, type Data } from "../store/startups";
import { useStore } from "@nanostores/react";
// Components
import StartupsFilters from "./StartupsFilters";
import StartupsSearch from "./StartupsSearch";
import StartupCard from "./StartupCard";

type Props = {
    startups: Data;
    startupFilters: AllCategories;
};

const StartupsContainer = ({ startups, startupFilters }: Props) => {
    const searchString = useStore($searchString);
    const selectedCategory = useStore($selectedCategory);

    if (!startups) {
        return (
            <div className="self-center justify-self-center">
                <LoaderCircle className="animate-spin text-teal-400" size={48} />
            </div>
        );
    }

    return (
        <section>
            <img src={HeroLogo.src} alt="Logo" className="size-72 shrink-0 mx-auto" />
            <h1 className="text-4xl font-bold tracking-tighter text-center my-4">Rail Startups</h1>
            <p className="text-center text-pretty text-sm text-slate-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, inventore.
            </p>
            <div className="border-b border-teal-900/20 mx-auto w-2/3 my-6"></div>
            <div className="grid items-center gap-4">
                <StartupsFilters startupFilters={startupFilters} />
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
