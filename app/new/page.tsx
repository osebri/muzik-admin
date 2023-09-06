"use client";
import { useState } from "react";
import axios from "axios";
export default function New(){
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    

        async function createProduct(ev: { preventDefault: () => void; }){
        ev.preventDefault()
        const data = {title, artist, description, price}
        await axios.post("./api/products", data)
        console.log(title)
    }
    return (
    <div className="flex flex-col">
        <form onSubmit={createProduct} className="flex flex-col">
        <h1 className="m-5 text-xl">New Vinyl</h1>
        <label>Album Name</label>
        <input type="text" placeholder="Album Name" value={title} onChange={ev => setTitle(ev.target.value)}/>
        <label>Artist</label>
        <input type="text" placeholder="Artist" value={artist} onChange={ev => setArtist(ev.target.value)}/>
        <label>Description</label>
        <textarea placeholder="Description" value={description} onChange={ev => setDescription(ev.target.value)}/>
        <label>Price</label>
        <input type="text" placeholder="Price" value={price} onChange={ev => setPrice(ev.target.value)}/>
        <button type="submit" className="bg-black text-white m-5">Submit</button>
        </form>
        </div>
    );
}