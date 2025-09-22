
import { VscStarHalf } from 'react-icons/vsc';
import { Link } from 'react-router';
const Book = ({ book }) => {
    const { bookId, image, bookName,tags, author, category, rating } = book
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card border-1 border-gray-200 p-10  bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className="h-70 mb-4"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div >
                    <div className="mb-4">
                        <h1 className=' text-green-500 rounded-3xl flex gap-1 '>{tags.map(tag => <p>#{tag}</p>)}</h1>
                    </div>
                    <h1 className="text-xl font-medium mb-3">{bookName}</h1>
                    <p className="text-gray-500 pb-3 border-b-2 border-gray-300 border-dashed mb-4">By : {author}</p>
                    <div className="flex justify-between">
                        <p className=" text-lg mt-3 text-gray-500 font-semibold">{category}</p>
                        <p className=" text-lg mt-3 text-gray-500 font-semibold flex items-center gap-2">{rating} <VscStarHalf></VscStarHalf></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;