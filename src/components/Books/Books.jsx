import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const[books,setBooks] =useState([]);
    const [datalength , setDataLength] = useState(6);
    useEffect(()=>{
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    },[])
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-5xl font-semibold mb-5">Books {books.length}</h1>
            <div className="grid grid-cols-3 gap-5  ">
                {
                    books.slice(0,datalength).map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
            <div className={datalength === books.length && 'hidden' }>
                <button onClick={()=>setDataLength(books.length)} className='btn border-2 border-green-500 text-green-500 mt-4'>Show All</button>
            </div>
            
        </div>
    );
}
export default Books;