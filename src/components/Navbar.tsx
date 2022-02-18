export const Navbar = () => {

    return (
        <>
            <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">

                <div className="hidden lg:block">
                    <span
                        style={{ letterSpacing: "0.70rem" }}
                        className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2"
                    >
                        Supermarket App
                    </span>
                </div>
                {/* Small Screen Show */}
                <div className="lg:hidden flex items-center">
                    <span
                        style={{ letterSpacing: "0.10rem" }}
                        className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2"
                    >
                        Supermarket App
                    </span>
                </div>
                {/* Both Screen show */}
                <div className="flex items-center">
                    <div className="hover:bg-gray-200 rounded-lg p-2" title="Search">
                        <svg
                            className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </div>
                </div>
                {/* Mobile Navber */}
                {/* End Mobile Navber */}
            </nav>
        </>
    );
};
      
