import React from 'react'
import { Route } from 'react-router'

export default function UserTemplate(props) {
    // path component
    return (
        <>
            <Route path={props.path} render={(propsRoute) => {
                return (
                    <>
                        <props.component {...propsRoute} />
                    </>
                )
            }} />
        </>
    )
}
