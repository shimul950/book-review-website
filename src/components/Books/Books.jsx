import { useEffect, useState } from "react";

const Books = () => {
    const[books,setBooks] =useState([]);
    useEffect(()=>{
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    },[])
    return (
        <div>
            <h1 className="text-center text-5xl font-semibold">Books {books.length}</h1>
        </div>
    );
}
export default Books;