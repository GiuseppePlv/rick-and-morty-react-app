import { useEffect, useState } from "react";
import ApiCategories from "../../constants/apiCategories";
import CharactersFilter from "./CharactersFilter";
import LocationsFilter from "./LocationsFilter";
import EpisodesFilter from "./EpisodesFilter";

function Filters({ filters, setFilters, category }) {
    const [filterCategory, setFilterCategory] = useState(null)
    useEffect(() => {
        let filterType;
        switch (category) {
            case ApiCategories.CHARACTERS:
                filterType = ApiCategories.CHARACTERS
                break;
            case ApiCategories.EPISODES:
                filterType = ApiCategories.EPISODES
                break;
            case ApiCategories.LOCATIONS:
                filterType = ApiCategories.LOCATIONS
                break;
            default:
        }
        setFilterCategory(filterType);
    },
        [category]);

    return (
        <div className="filters">
            <br></br>
            {filterCategory === ApiCategories.CHARACTERS ?
                <CharactersFilter filters={filters} setFilters={setFilters}></CharactersFilter> : <></>
            }
            {filterCategory === ApiCategories.LOCATIONS ?
                <LocationsFilter filters={filters} setFilters={setFilters}></LocationsFilter> : <></>
            }
            {filterCategory === ApiCategories.EPISODES ?
                <EpisodesFilter filters={filters} setFilters={setFilters}></EpisodesFilter> : <></>
            }

        </div>
    )
}
export default Filters;