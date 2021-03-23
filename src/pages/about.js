import React from "react";
import BaseLayout from "../components/BaseLaylout";

export default function About() {
    return (
        <BaseLayout>
            <main>
                <h1 className="pb-5 text-2xl text-gray-900">About Me</h1>

                <p className="mb-2 text-sm">
                    Hello! I'am Charlie Fan, a Front End Developer from Toronto.
                    I've been developing and maintaining several web projects
                    for 5 years.
                </p>

                <p className="mb-4 text-sm">
                    Since 2016, I've been working for 51.ca as a Front End
                    Developer. In this role, I work closly with Backend
                    Developers and UI Designers to develop web based
                    applications and support maintain them to assure their
                    functionality. Also I develop Reusable UI Components and
                    JavaScript modules to achieve agile development and
                    functionality.
                </p>

                <h2 className="pb-4 text-lg text-gray-800">
                    Stacks and Tools:
                </h2>

                <div className="mb-2 p-3 rounded-lg shadow-md">
                    <h6 className="pb-2">JavaScript</h6>

                    <ul className="flex items-start flex-wrap">
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            ECMAScript 6+
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            TypeScript
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            React
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Vue
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Redux
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            jQuery
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Node.js
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            NEXT.js
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Gatsby
                        </li>
                    </ul>
                </div>

                <div className="mb-2 p-3 rounded-lg shadow-md">
                    <h6 className="pb-2">Styling</h6>

                    <ul className="flex items-start flex-wrap">
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            CSS
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            SASS
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Bootstrap
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Tailwindcss
                        </li>
                    </ul>
                </div>

                <div className="mb-2 p-3 rounded-lg shadow-md">
                    <h6 className="pb-2">Backend</h6>

                    <ul className="flex items-start flex-wrap">
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            PHP
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Laravel
                        </li>
                    </ul>
                </div>

                <div className="mb-4 p-3 rounded-lg shadow-md">
                    <h6 className="pb-2">Tools</h6>

                    <ul className="flex items-start flex-wrap">
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Webpack
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Rollup
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Gulp
                        </li>
                        <li className="rounded-full py-1 px-2 mr-2 mb-2 text-xs bg-gray-200 leading-none text-gray-600">
                            Jest
                        </li>
                    </ul>
                </div>

                <h2 className="pb-4 text-lg text-gray-800">Projects:</h2>

                <div className="flex flex-row mb-5">
                    <a
                        className="flex items-center w-24 h-24 mr-5 bg-gray-50 rounded-lg shadow-lg text-xs text-center text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://house.51.ca/mls"
                    >
                        51.CA <br /> MLS&reg; Listings Searching application
                    </a>

                    <a
                        className="flex items-center w-24 h-24 mr-5 bg-gray-50 rounded-lg shadow-lg text-xs text-center text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.51.ca/jobs"
                    >
                        51.CA <br /> Job Searching application
                    </a>

                    <a
                        className="flex items-center w-24 h-24 bg-gray-50 rounded-lg shadow-lg text-xs text-center text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://house.51.ca/rental"
                    >
                        51.CA <br /> Rental Listings Searching application
                    </a>
                </div>
            </main>
        </BaseLayout>
    );
}
