import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
    const {component: Component, redirectTo, path, token} = props
    return(
        token 
            ?   <Route path={path} component={Component}/>
            :   <Redirect to={redirectTo}/>
    )
}

export default ProtectedRoute