import Link from "next/link";

export default function Products(){
    return (
        <div>
            <Link className="bg-black text-white rounded-md
            py-1 px-2" href={"./new"}>Add New Product</Link>
        </div>
    )
}