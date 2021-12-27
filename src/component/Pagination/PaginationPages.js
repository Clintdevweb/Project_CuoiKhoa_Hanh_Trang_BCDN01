import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import './Pagination.css'
import { getCoursePag } from '../../Redux/action/CourseAction'

export default function PaginationPages() {
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(12)
    const { coursesPagination } = useSelector(state => state.CourseReducer) 

    const dispatch = useDispatch()
    
    const handlePageChanges = ({ selected }) => {
        setCurrentPage(selected + 1)
    }

    useEffect(() => {
       const action = getCoursePag(currentPage,count)
       dispatch(action)
    }, [currentPage])

    return (
        <>
            <ReactPaginate
                nextLabel="Sau >"
                pageRangeDisplayed={3}
                pageCount={coursesPagination.totalPages}
                previousLabel="< Trước"
                pageClassName="page-item"
                pageLinkClassName="pageLinkPages"
                previousClassName="page-item"
                previousLinkClassName="pageLinkPages"
                nextClassName="page-item"
                nextLinkClassName="pageLinkPages"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="pageLinkPages"
                containerClassName="paginationPages"
                activeClassName="active"
                renderOnZeroPageCount={null}
                onPageChange={handlePageChanges}
            />

        </>
    )
}
