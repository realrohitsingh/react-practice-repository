import React, { useEffect, useState } from "react";
import "./Shopping.css";

function Shopping() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let res = await fetch("https://dummyjson.com/products");
            let data = await res.json();
            setItems(data.products);
        }
        fetchData();
    }, []); // Empty dependency

    console.log(items);

    return (
        <>
            <h1>My Shopping App : </h1>
            <div className="shopping">
                {items.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <div className="items">
                                <div className="thumbnail">
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                                <div className="details">
                                    <p>
                                        <b>{item.title.toUpperCase()}</b> || <b>{item.brand}</b> ||
                                        <b> {item.category.toUpperCase()}</b>
                                    </p>
                                    <p>
                                        M.R.P : <strike>{item.price}$</strike>
                                    </p>
                                    <p>OfferPrice : {item.price - item.price * 0.15}$</p>
                                    <span>Rating : {item.rating}</span>
                                    <p>{item.description}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
}

export default Shopping;
