
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router";

const ReadbookDetails = ({ readbook }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = readbook
    console.log(readbook);
    return (
        <div className="flex my-10 border-1 border-gray-300 rounded-xl p-3 shadow-xl">
            <div className="basis-1/4">
                <img className="h-70 rounded-xl" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-4 basis-3/4">
                <h1 className="text-4xl font-semibold">{bookName}</h1>

                <p className="text-gray-500 text-lg ">By :{author}</p>

                <div className='flex gap-2 items-center border-b-1 border-gray-300 pb-3'>
                    <h1 className="text-green-500 flex gap-2 items-center"><span className="text-lg text-gray-700 font-semibold">Tag :</span>{tags.map(tag => <p className="bg-green-50 rounded-3xl p-2">#{tag}</p>)}
                    </h1>
                    <p className="text-gray-500 flex items-center gap-2"><IoLocationOutline /> Year of Publishing : {yearOfPublishing}</p>
                </div>
                <div className="text-gray-500 flex gap-15 " >
                    <p className="flex items-center gap-2"><BsPeople /> Publisher : {publisher}</p>
                    <p className="flex items-center gap-2"><MdOutlineContactPage /> Page : {totalPages}</p>
                </div>
                <div className="flex  gap-5">
                    <button className="btn rounded-3xl text-blue-300 bg-blue-100">Category: {category}</button>
                    <button className="btn w-40 rounded-3xl text-orange-300 bg-orange-100">Rating: {rating}</button>
                    <Link to={`/book/${bookId}`}>
                        <button className="btn w-40 rounded-3xl text-white bg-green-500">View Details</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ReadbookDetails;