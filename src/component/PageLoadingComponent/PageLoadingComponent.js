import React from 'react'
import { useSelector } from 'react-redux'
import './PageLoadingComponent.css'
export default function PageLoadingComponent() {
    const {loadingComponent} = useSelector(state => state.IsLoadingReducer)
    // console.log(loadingComponent);
    if(loadingComponent){
        return (
            <>
                <div id="preloader">
                    <div id="loader"></div>
                </div>         
            </>
        )

    }else{
        return ''
    }
}
