import React from 'react';
import { useEffect, useState } from "react";
import uniqid from 'uniqid';

const Categories = () => {

    const [productCats, setProductCats] = useState([]);

    useEffect(() => {
        fetchCats();
      },[])
        
    const fetchCats = async() => {
        const data = await fetch ('https://fakestoreapi.com/products/categories');
        const cats = await data.json();
        const catsArray = cats.map(cat=>{return {id: uniqid(), cat: cat}});
        console.log(catsArray);
        setProductCats(catsArray);
        }

    return(
        <div>
            <ul>
            {
            productCats.map((cat) => {return(<li key={cat.id}>{cat.cat}</li>)}
            )}
            </ul>
        </div>
        
    )
}

export default Categories;