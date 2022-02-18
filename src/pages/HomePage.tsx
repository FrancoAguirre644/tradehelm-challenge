import { useSelector } from "react-redux";
import Item from "../components/Item";
import { RootStore } from "../models/models";

const HomePage: React.FC = () => {

    const { items } = useSelector((state: RootStore) => state);

    return (
        <div className="grid grid-cols-1 place-items-center p-4 font-medium italic">
            <div className="w-1/2">

                <h1 className="text-3xl text-center">Supermarket list</h1>

                <h1 className="text-2xl text-center">1 items(s)</h1>

                {
                    items.map(item => (
                        <Item />
                    ))
                }

                <button className="p-2 border-2 border-pink-500 hover:bg-pink-500 hover:text-white w-full rounded">Add Item</button>

            </div>
        </div>
    )
}

export default HomePage;
