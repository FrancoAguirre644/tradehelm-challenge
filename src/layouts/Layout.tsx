import React from "react";
import { Navbar } from "../components/Navbar";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <section className="flex bg-gray-100">
                <div className="w-full h-full">
                    {children}
                </div>
            </section>
        </>
    );
};

export default Layout;