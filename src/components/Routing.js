import { Routes, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from "./Home";
import About from "./About";
import BookingForm from "./BookingForm";
import * as React from "react";

function Routing () {
    return (
    <>
        <div className="route">
            <Routes> 
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Home />}></Route>
                <Route path="/reservations" element={<BookingForm />}></Route>
                <Route path="/order-online" element={<Home />}></Route>
                <Route path="/login" element={<BookingForm />}></Route>
            </Routes>
        </div>
    </>
    )
}

export default Routing;