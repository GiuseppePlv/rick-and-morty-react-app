import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Paginator({ page, setPage, resInfo, setResInfo }) {
    const handleNextPage = () => {
        setPage(page + 1);

    }

    const handlePrevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const handleLastPage = () => {
        if (resInfo && resInfo.pages) {
            setPage(resInfo.pages);
        }
    }

    const handleFirstPage = () => {
        setPage(1);
    }

    const handleMidPage = (newPage) => () => {
        setPage(newPage);
    }


    return (
        <>
            <Pagination>
                <Pagination.First onClick={handleFirstPage} />
                <Pagination.Prev onClick={handlePrevPage} />

                <Pagination.Item active><span>{page}</span></Pagination.Item>
                <Pagination.Item disabled={page === resInfo.pages} onClick={handleMidPage(page + 1)} >{page + 1}</Pagination.Item>
                <Pagination.Item disabled={page === resInfo.pages} onClick={handleMidPage(page + 2)} >{page + 2}</Pagination.Item>
                <Pagination.Item disabled={page === resInfo.pages} onClick={handleMidPage(page + 3)} >{page + 3}</Pagination.Item>
                <Pagination.Item disabled={page === resInfo.pages} onClick={handleMidPage(page + 4)} >{page + 4}</Pagination.Item>

                <Pagination.Next onClick={handleNextPage} disabled={page === resInfo.pages} />
                <Pagination.Last onClick={handleLastPage} disabled={page === resInfo.pages} />
            </Pagination>
        </>

    );
}

export default Paginator;