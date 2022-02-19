import { ChangeEvent, FormEvent } from "react";
import { Item } from "../models/models";

interface IProps {
    item: Item,
    setIsModalVisible: (value: boolean) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Modal: React.FC<IProps> = ({ item, setIsModalVisible, handleSubmit, handleChangeInput }) => {
    return (
        <>
            {/* Black Overlay */}
            <div className='fixed top-0 left-0 z-30 w-full h-full bg-black dark:bg-gray-900 opacity-50' />
            {/* End Black Overlay */}

            {/* Modal Start */}
            <div className='fixed inset-0 flex items-center z-30 justify-center overflow-auto'>
                <div className="mt-32 md:mt-0 relative bg-white dark:bg-black border-2 rounded w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
                    <div className="flex items-center justify-between w-full pt-4">
                        <span className="text-left font-semibold text-2xl tracking-wider dark:text-white">
                            Add Item
                        </span>
                        {/* Close Modal */}
                        <span onClick={() => setIsModalVisible(false)}
                            className="cursor-pointer text-gray-100 py-2 px-2 rounded-full bg-pink-500 dark:bg-purple-700"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="flex space-x-1 py-4">
                            <div className="w-full flex flex-col space-y-1 space-x-1 dark:text-white">
                                <label htmlFor="name">Product Description *</label>
                                <input className="px-4 py-2 border-2 dark:bg-black" name="description" type="text" onChange={handleChangeInput} value={item.description} />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
                            <button className="p-2 border-2 border-pink-500 hover:bg-pink-500 hover:text-white dark:text-white dark:border-purple-600 dark:hover:bg-purple-600 w-full rounded">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Modal End */}
        </>
    )
}

export default Modal;