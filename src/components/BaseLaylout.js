import React from "react";
import Head from './Head';
import NavAside from './NavAside';

export default function BaseLayout({ children }) {
    return (
        <>
            <Head />

            <div className="container md:pt-5 mx-auto min-h-screen">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4">
                        <NavAside />
                    </div>

                    <div className="col-span-12 md:col-span-8">{children}</div>
                </div>
            </div>
        </>
    );
}
