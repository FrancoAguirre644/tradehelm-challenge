import { Item } from "../models/models"

interface IProps {
    item: Item;
    deleteItem : (item: Item) => void;
}

const CardItem: React.FC<IProps> = ({ item, deleteItem }) => {
    return (
        <div className="flex justify-between my-3 p-3 border-2 border-gray-200 rounded">
            <div>
                {item.description}
            </div>
            <div className="cursor-pointer" onClick={() => deleteItem(item!)}>
                Delete
            </div>
        </div>
    )
}

export default CardItem;