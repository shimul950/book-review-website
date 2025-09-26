import { useLoaderData, useParams } from "react-router";
import { saveReadBooks, saveWishlistBooks } from "../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

const BookDetails = () => {
    const [countClick, setcountClick] = useState(0);

    const handleReadbtn = (count) => {
        if (countClick > 0) {
            toast('Warning:You have already added the book.');
        }
        else {
            toast('You have successfully added the book');
            setcountClick(countClick + count);
            console.log(countClick)
        }
        saveReadBooks(idInt)
    }

    const handleWishlistBtn = (count) => {
        if (countClick > 0) {
            toast('Warning:You have already added the book.');
        }
        else {
            toast('You have successfully added the book');
            setcountClick(countClick + count);
            console.log(countClick)
        }
        saveWishlistBooks(idInt)
    }

    const books = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    
    const book = books?.find(boo => boo.bookId === idInt);
    console.log(book);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <>
            <div className="flex my-10">
                <div className="basis-1/2">
                    <img className="h-150 rounded-xl" src={image} alt="" />
                </div>
                <div className="basis-1/2 " >
                    <h1 className="text-5xl font-semibold">{bookName}</h1>

                    <p className="py-5 text-gray-500 border-b-1 border-gray-300">By : {author}</p>

                    <p className="py-5 text-gray-500 border-b-1 border-gray-300">{category}</p>

                    <p className="text-lg text-gray-400 my-4"> <span className="font-bold text-black">Review :</span> {review}</p>

                    <h1 className=' text-green-500  flex gap-2 items-center border-b-1 border-gray-300 py-5'><span className="text-lg text-gray-700 font-semibold">Tag :</span>{tags.map(tag => <p className="bg-green-50 rounded-3xl p-2">#{tag}</p>)}</h1>

                    <table className="my-10 text-xl">
                        <tr >
                            <td>Number of pages :</td>
                            <td className=" text-end">{totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher :</td>
                            <td className="text-end">{publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of publishing :</td>
                            <td className="text-end">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating :</td>
                            <td className="text-end">{rating}</td>
                        </tr>
                    </table>
                    <div className="mt-10 flex gap-4">
                        <button onClick={() => handleReadbtn(1)} className="btn w-30  ">Read</button>
                        <button onClick={() =>handleWishlistBtn(1)} className="btn w-30 bg-blue-400 text-white">WishList</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default BookDetails;