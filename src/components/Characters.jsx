import { useState } from "react";
import TableMain from "./Table"
import ApiCategories from "../constants/apiCategories";
function Characters() {
    const [category, setCategory] = useState(ApiCategories.CHARACTERS)
    const tabHeader = ['image', 'name', 'status', 'species', 'gender', 'type', 'details'];

    return (
        <>
            <TableMain category={category} tabHeader={tabHeader}></TableMain>
        </>
    );
}

export default Characters