import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/promotion" element={<About />} />
                <Route path="/house-plan" element={<Contact />} />
                <Route path="/build" element={<Contact />} />
                <Route path="/financing" element={<Contact />} />
                <Route path="/about" element={<Contact />} />
                <Route path="/not-found" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default routes