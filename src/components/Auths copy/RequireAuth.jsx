import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./Auth"

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth()

    if (!(auth.user || localStorage.getItem("token"))) {
        return < Navigate to='/loginpage' state= {{path : location.pathname}}/>
    }

    return children
}