import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ children }) => {
    const localstorage = localStorage.getItem("AppToken")
    return localstorage ? children : <Navigate to="/login" />
}
export default ProtectedRoute