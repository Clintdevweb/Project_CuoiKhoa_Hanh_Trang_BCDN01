import React from 'react'
import { useSelector } from 'react-redux'
import './PageLoading.css'
export default function PageLoading() {
    const {loadingGlobal} = useSelector(state => state.IsLoadingReducer)
    // console.log(loadingGlobal);
    if(loadingGlobal){
        return (
            <>
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </>
        )

    }else{
        return ''
    }
}
