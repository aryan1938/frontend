import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
// import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
import { ToastContainer } from "react-toastify"

export default function Master_admin() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer/>
        </>
    )
}