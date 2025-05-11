import type { CollectionEntry } from "astro:content";
import { MapPin } from "lucide-react";
interface Props {
    startup: CollectionEntry<"startups">["data"];
}
const StartupCard = ({ startup }: Props) => {
    return (
        <div className="text-white animate-in fade-in duration-300 bg-gradient-to-r from-teal-600 to-teal-400 rounded-md p-4 overflow-hidden border border-teal-500 hover:border-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-300 transition-colors">
            <a
                href={startup.website}
                target="_blank"
            >
                <div className="flex gap-4">
                    <img src={startup.logo.src} alt={startup.companyName} className="max-h-24 max-w-24" />
                    <div>
                        <h2 className="text-2xl font-bold">{startup.companyName}</h2>
                        <p><MapPin className="inline"/> {startup.country}</p>
                        <p><i>{startup.shortDescription}</i></p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default StartupCard;
