import Table from 'react-bootstrap/Table';
import Paginator from './Paginator';
import React, { useEffect, useState } from 'react';
import * as MainService from '../services/main.service';
import Filters from './Filters/Filters';
import ApiCategories from '../constants/apiCategories';
import CharactersDetail from './Detail/Characters-detail';
function TableMain({ category, tabHeader }) {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); //Starting from page 1
    const [resInfo, setResInfo] = useState({});
    const [filters, setFilters] = useState(location.state || {}); // Filters for the API call
    useEffect(() => {
        let methodName;
        switch (category) {
            case ApiCategories.CHARACTERS:
                methodName = 'getCharacter'
                console.log('Fetching characters...');
                break;
            case ApiCategories.EPISODES:
                methodName = 'getEpisodes'
                console.log('Fetching episodes...');
                break;
            case ApiCategories.LOCATIONS:
                methodName = 'getLocations'
                console.log('Fetching locations...');
                break;

            default:
                console.warn('Unknown category:', category);
        }
        MainService[methodName](page, filters).then(data => {
            if (data && data.results instanceof Array) {
                setResInfo(data.info);
                setData(data.results);
            }
        });
    }, [page, filters]);

    return (
        <>
            <br></br>
            <Filters filters={filters} setFilters={setFilters} category={category} />
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {tabHeader && tabHeader.map((header, index) => (
                            <th style={{ maxWidth: '180px', textTransform: 'capitalize' }} key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((obj, index) => (
                        <tr key={index}>
                            {tabHeader.map((key, i) => {
                                if (key === 'image') {
                                    return (
                                        <td key={i}>
                                            <img src={obj[key]} alt={obj.name} className="img-fluid rounded" style={{ width: '100px', height: '100px' }} />
                                        </td>
                                    );
                                } else if (key === 'details') {
                                    return (
                                        <td key={i}>
                                            <CharactersDetail obj={obj} index={index}></CharactersDetail>
                                        </td>
                                    );
                                } else {
                                    return <td key={i}>{obj[key]}</td>;
                                }
                            })}
                        </tr>
                    ))}
                </tbody>

            </Table>
            <Paginator page={page} setPage={setPage} resInfo={resInfo} setResInfo={setResInfo} />
        </>
    );
}

export default TableMain;