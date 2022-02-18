import Item from "../components/Item";

const HomePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center p-4 font-medium italic">
            <div className="w-1/2">
                
                <h1 className="text-3xl text-center">Supermarket list</h1>

                <h1 className="text-2xl text-center">1 items(s)</h1>

                <Item/>

                <button className="p-2 border-2 border-pink-500 hover:bg-pink-500 hover:text-white w-full rounded">Add Item</button>

            </div>
        </div>
    )
}

export default HomePage;
