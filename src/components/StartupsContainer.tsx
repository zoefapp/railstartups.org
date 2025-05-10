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
            <h1 className="text-4xl font-bold tracking-tighter text-center my-4">Welcome to the Rail Startups community</h1>
            <p className="text-left text-pretty text-sm text-slate-800">
                Across Europe, a new wave of entrepreneurs is reimagining the future of train travel. We believe <b>rail can be bigger, bolder, simpler—and yes, even sexier</b>.
                From making train journeys more accessible to designing innovative services that attract more people to sustainable travel, we are full of good ideas. <b>Our challenge is to make our ideas and businesses viable within the current ecosystem of railway companies and major industry players.</b>
            </p>
            <p className="text-left text-pretty text-sm text-slate-800 pt-4">                                
                That's why we're here—to <b>connect, support, and empower each other</b>. Together, we can take up more space, amplify our impact, and help rail take its rightful place at the heart of European mobility.
            </p>
            <div className="border-b border-teal-900/20 mx-auto w-2/3 my-6"></div>
            <h2 className="text-3xl font-bold tracking-tighter text-center my-4">Our members</h2>
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
