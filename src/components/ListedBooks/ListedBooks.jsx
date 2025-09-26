import { useEffect, useState } from "react";
import { useLoaderData, NavLink, Outlet } from "react-router";
import { getStoredReadBooks, getStoredWishlistBooks } from "../utility/localStorage";

const ListedBooks = () => {
    const books = useLoaderData()
    const [listedReadBooks, setListedReadBooks] = useState([]);
    const [listedWishlistBooks, setListedWishlistBooks] = useState([]);

    useEffect(() => {
        const storedReadBooksId = getStoredReadBooks();
        if (books.length > 0) {
            const readbooklisted = books?.filter(book => storedReadBooksId.includes(book.bookId));
            setListedReadBooks(readbooklisted);

        }
    }, [books])

    useEffect(()=>{
        const storedWishlistBooksId = getStoredWishlistBooks();
        if(books.length >0){
            const wishlistBooklisted =books?.filter(book => storedWishlistBooksId.includes(book.bookId));
            setListedWishlistBooks(wishlistBooklisted);
        }
    },[books])

    

    return (
        <>
            <h1 className="text-5xl font-bold text-center my-10">My Read and Wishlist</h1>
            <div className="flex gap-3 text-xl text-gray-500 my-10">

                <NavLink className={({ isActive }) => isActive && 'text-black border-b-2 border-green-400'} to='readBook'>Read Books</NavLink>

                <NavLink className={({ isActive }) => isActive && 'text-black border-b-2 border-green-400'} to='wishlist'>Wishlist Books</NavLink>

            </div>
            <div>
                <Outlet context={{listedReadBooks, setListedReadBooks,listedWishlistBooks, setListedWishlistBooks}}>
                </Outlet>
            </div>





        </>

    );
};

export default ListedBooks ;