import React from 'react'
import { Route } from 'react-router'
import BackToTop from '../../component/BackTop/BackToTop'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'

export default function HomeTemplate(props) {
    return (
        <>
            <Route path={props.path} render={(propsRoute) => {
                return <>
                    <Header />
                    <props.component {...propsRoute} />
                    <BackToTop />
                    <Footer />
                </>
            }}

            />
        </>
    )
}
