import { useEffect, useState } from "react";
import './Flipkart.css';

function Flipkart() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let res = await fetch("http://localhost:1000/products");
            let data = await res.json();
            setItems(data);
        }
        fetchData();
    }, []);

    console.log(items);

    return (
        <>
            <h1 style={{ textAlign: "center", textDecoration: "underline" }}>Product List : </h1>
            <div>
                {items.map((item) => (
                    <div className="items" key={item.id}>
                        <h2>{item.id}</h2>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                        <p>Ratings: ⭐ {item.ratings}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Flipkart