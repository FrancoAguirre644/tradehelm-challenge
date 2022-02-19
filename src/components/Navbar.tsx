import useDarkMode from "../hooks/useDarkMode";

export const Navbar: React.FC = () => {

    const [colorTheme, setTheme] = useDarkMode();

    return (
        <>
            <nav className='sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white dark:bg-black dark:border-b-2 dark:border-b-zinc-500'>
                <div className="hidden lg:block">
                    <span style={{ letterSpacing: "0.70rem" }}
                        className="flex items-left text-center font-bold uppercase text-gray-800 dark:text-white text-2xl cursor-pointer px-2"
                    >
                        Supermarket App
                    </span>
                </div>
                {/* Small Screen Show */}
                <div className="lg:hidden flex items-center">
                    <span style={{ letterSpacing: "0.10rem" }}
                        className="flex items-left text-center font-bold uppercase text-gray-800 dark:text-white text-2xl cursor-pointer px-2"
                    >
                        Supermarket App
                    </span>
                </div>
                {/* Both Screen show */}
                <div className="flex items-center">
                    <div className="hover:bg-gray-200 rounded-lg p-2" title="Search" onClick={() => setTheme(colorTheme)}>
                        {
                            colorTheme === 'dark' ?
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
                                :
                                <svg
                                    className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                        }
                    </div>
                </div>
                {/* Mobile Navber */}
                {/* End Mobile Navber */}
            </nav>
        </>
    );
};

