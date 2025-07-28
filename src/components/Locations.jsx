import { useState } from "react";
import TableMain from "./Table"
import ApiCategories from "../constants/apiCategories";
function Locations() {
    const [category, setCategory] = useState(ApiCategories.LOCATIONS)
    const tabHeader = ['id', 'name', 'type', 'dimension'];


    return (
        <>
            <TableMain category={category} tabHeader={tabHeader}></TableMain>
        </>
    );
}

export default Locations