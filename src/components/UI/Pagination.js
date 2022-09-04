import React from 'react';
import MyButton from "./button/MyButton";
import {usePagination} from "../hooks/usePagination";

const Pagination = ({totalPages, changePage, page}) => {
    const pages = usePagination(totalPages)

    return (
        <>
            {pages.map(pge => <MyButton style={{margin: '15px 0', color: pge === page ? 'red' : 'black'}}
                                        key={pge} onClick={() => changePage(pge)}>{pge}</MyButton>)}
        </>
    );
};

export default Pagination;