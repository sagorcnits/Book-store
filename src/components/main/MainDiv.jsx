import { useEffect, useState } from "react";
import Card from "../card/Card";
import TotalBook from "../totalBook/TotalBook";


const MainDiv = () => {
const [bookes,setBoooks] = useState([])
const [cart,setCart] = useState([])


useEffect(()=>{
    fetch("book.json")
    .then(res => res.json())
    .then(data => setBoooks(data))
},[])

// console.log(bookes)

function addItem(books){
const already = cart.find(book => book.id === books.id)

if(!already) {
    setCart([...cart, books]) 
}else {
    alert("already added")
}

}


    return (
        <div className="max-w-6xl mx-auto my-10">
            <h1 className="text-center font-bold text-6xl my-8">Simple Book Store</h1>
            <div className="flex gap-4 my-10">
                <div className="grid md:grid-cols-3 gap-4 w-[75%]">
                {bookes.map((book,id) => <Card addItem={addItem} key={id} book={book}></Card>)}
                </div>
                <div className="w-[25%]">
                        <div className=" bg-[#f5f3f0] rounded-lg">
                            <TotalBook cart={cart}></TotalBook>
                        </div>
                </div>
               
            </div>
        </div>
    );
};

export default MainDiv;