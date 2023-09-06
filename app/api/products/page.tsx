import { url } from "inspector";
import mongoose from "mongoose";
import {product} from "@/app/models/products";
export default async function handle(req: any, res: { json: (arg0: any) => void; }){
   /* const {method}=req
    
    if(method==='POST'){
        const{title,artist,description,price} = req.body;
        const productDoc = await product.create({
            title,description,price
        })
        res.json(productDoc)*/
        res.json(req)
    //}
}