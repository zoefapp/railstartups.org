import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { getCollection, type CollectionEntry } from "astro:content";
import { useStore } from "@nanostores/react";
import { $selectedCategory, setFilters } from "../store/startups";
const StartupsFilters = () => {
    const [allCategories, setAllCategories] =
        useState<CollectionEntry<"startups">["data"]["categories"]>();
    const currentCategory = useStore($selectedCategory);
    useEffect(() => {
        const getStartups = async () => {
            try {
                const startups = await getCollection("startups");
                const categories = startups
                    .map((startup) => startup.data.categories)
                    .flat()
                    .filter((v, i, a) => a.indexOf(v) === i);
                setAllCategories(categories);
            } catch (e) {
                console.error((e as Error).message);
            }
        };
        getStartups();
    }, []);

    const classList = {
        default: "bg-teal-200 hover:bg-teal-300 border-transparent",
        selected: "bg-teal-300 border-teal-500",
    };
    if (!allCategories) return null;
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 text-black">
            <button
                onClick={() => setFilters(null)}
                className="bg-teal-200 border border-transparent text-xs uppercase rounded-sm px-4 py-1 transition-all hover:bg-teal-300 active:translate-y-0.5"
            >
                all
            </button>

            {allCategories?.map((category) => (
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
