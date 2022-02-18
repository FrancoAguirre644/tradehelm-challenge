const Item: React.FC = () => {
    return (
        <div className="flex justify-between my-3 p-3 border-2 border-gray-200 rounded">
            <div>
                Product
            </div>
            <div className="cursor-pointer">
                Delete
            </div>
        </div>
    )
}

export default Item