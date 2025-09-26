import { useOutletContext } from "react-router";
import WishlistBookDetails from "../WishlistBookDetails/WishlistBookDetails";


const WishlistBook = () => {
    const {listedWishlistBooks}=useOutletContext();
    
    return (
        listedWishlistBooks.map(book =><WishlistBookDetails key={book.bookId} book={book}></WishlistBookDetails>)
    );
};

export default WishlistBook;