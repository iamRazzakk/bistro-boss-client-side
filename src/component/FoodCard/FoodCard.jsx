const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 mr-4 mt-4 px-4 text-white absolute right-0">{price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;