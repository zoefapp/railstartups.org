import React from "react";
import { motion } from "framer-motion";
import type { CollectionEntry } from "astro:content";
interface Props {
    startup: CollectionEntry<"startups">["data"];
}
const StartupCard = ({ startup }: Props) => {
    return (
        <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white bg-gradient-to-r from-teal-600 to-teal-400 rounded-md p-4 overflow-hidden border border-teal-500 hover:border-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-300 transition-colors"
            href={startup.website}
            target="_blank"
        >
            <div className="flex gap-4">
                <img src={startup.logo.src} alt={startup.companyName} width="100" height="100" />
                <div>
                    <h2 className="text-2xl tracking-tighter font-bold">{startup.companyName}</h2>
                    <p>{startup.country}</p>
                </div>
            </div>
        </motion.a>
    );
};

export default StartupCard;
