import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
export default function Master_user() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}