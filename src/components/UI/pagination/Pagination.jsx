import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ page, changePage, totalPages }) => {

    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='page__wrapper'>
            {pagesArray.map(page_num =>
                <span
                    onClick={() => changePage(page_num)}
                    key={page_num}
                    className={page === page_num ? 'page page__current' : 'page'}>
                    {page_num}
                </span>
            )}
        </div>
    )
}

export default Pagination
