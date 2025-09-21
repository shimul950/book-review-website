import { Link } from "react-router";
import ListedBooks from "../ListedBooks/ListedBooks";


const Banner = () => {
    return (
        <div className="flex justify-between items-center p-20 bg-gray-100 my-15 rounded-lg">
            <div>
                <h1 className="text-6xl font-semibold">Step into a world where every <br /> book opens new adventures</h1>
                <Link to='/listed'><button  className="btn h-15 w-60 bg-green-500 text-white rounded-lg mt-10 text-xl  ">View the list</button></Link>
            </div>
            <div>
                <img className="h-120" src={'https://www.kindpng.com/picc/m/360-3607119_single-book-png-transparent-png.png'} alt="" />
            </div>
        </div>
    );
};

export default Banner;