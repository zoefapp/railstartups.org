import { useStore } from "@nanostores/react";
import { $selectedCategory, setFilters, type AllCategories } from "../store/startups";
const StartupsFilters = ({ startupFilters }: { startupFilters: AllCategories }) => {
    const currentCategory = useStore($selectedCategory);

    const classList = {
        default: "bg-teal-200 hover:bg-teal-300 border-transparent",
        selected: "bg-teal-300 border-teal-500",
    };
    if (!startupFilters) return null;
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 text-black">
            <button
                onClick={() => setFilters(null)}
                className="bg-teal-200 border border-transparent text-xs uppercase rounded-sm px-4 py-1 transition-all hover:bg-teal-300 active:translate-y-0.5"
            >
                all
            </button>

            {startupFilters?.map((category) => (
                <button
                    key={category}
                    onClick={() => setFilters(category)}
                    className={`px-4 tracking-wider py-1 text-xs rounded-sm border uppercase transition-all active:translate-y-0.5 ${
                        classList[currentCategory === category ? "selected" : "default"]
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default StartupsFilters;
