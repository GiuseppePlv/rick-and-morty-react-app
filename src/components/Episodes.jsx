import { useState } from "react";
import TableMain from "./Table"
import ApiCategories from "../constants/apiCategories";
function Episodes() {
    const [category, setCategory] = useState(ApiCategories.EPISODES)
    const tabHeader = ['id', 'name', 'air_date', 'episode'];


    return (
        <>
            <TableMain category={category} tabHeader={tabHeader}></TableMain>
        </>
    );
}

export default Episodes