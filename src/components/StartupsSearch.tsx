import { setSearchString, $searchString } from "../store/startups";
import { useStore } from "@nanostores/react";
import { Search } from "lucide-react";
const StartupsSearch = () => {
    const searchString = useStore($searchString);

    const onChange = (e: any) => {
        setSearchString(e.target.value);
    };

    return (
        <div className="bg-white flex items-center w-1/2 mt-2 mb-8 mx-auto h-10 rounded-md overflow-clip border border-teal-800">
            <Search className="bg-teal-800 h-full w-10 p-2" color="white" />
            <input
                type="text"
                placeholder="Search"
                value={searchString}
                onChange={onChange}
                className="group px-2 h-10 w-full focus-within:outline-none"
            />
        </div>
    );
};

export default StartupsSearch;
