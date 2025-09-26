import { useOutletContext } from "react-router";
import ReadbookDetails from "../ReadbookDetails/ReadBookDetails";



const ReadBooks = () => {
    const {listedReadBooks}=useOutletContext()
    return (
        <>
            {
                listedReadBooks.map(readbook => <ReadbookDetails key={readbook.bookId} readbook={readbook}></ReadbookDetails>)
            }
        </>
    );
};

export default ReadBooks;