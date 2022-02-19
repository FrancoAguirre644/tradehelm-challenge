import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import { Item, RootStore } from "../models/models";
import { createItem, deleteItem } from "../redux/actions/itemActions";

const HomePage: React.FC = () => {

    const [item, setItem] = useState<Item>({ description: '' });
    const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

    const { items, loading } = useSelector((state: RootStore) => state);

    const dispatch = useDispatch();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(createItem(item));

        setItem({ description: '' });

        setIsModalVisible(false);

    }

    const handleDelete = (item: Item) => { dispatch(deleteItem(item.id!)); }
    
    if(loading) return <Loading/>

    return (
        <div className="grid grid-cols-1 place-items-center p-4 font-medium italic">
            <div className="md:w-1/2 sm:w-full">

                <h1 className="text-3xl text-center">Supermarket list</h1>

                <h1 className="text-2xl text-center">
                    {items.length > 0 ? `${items.length} items(s)` : `No Items`}
                </h1>

                {
                    items.map(item => (
                        <CardItem key={item.id} item={item} deleteItem={handleDelete} />
                    ))
                }

                <button className="p-2 my-2 border-2 border-pink-500 hover:bg-pink-500 hover:text-white w-full rounded"
                    onClick={() => setIsModalVisible(!isModalVisible)}>
                    Add Item
                </button>

                {
                    isModalVisible && (
                        <Modal setIsModalVisible={setIsModalVisible}
                            handleSubmit={handleSubmit}
                            handleChangeInput={handleChangeInput}
                            item={item}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default HomePage;
