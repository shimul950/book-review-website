
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getStoredReadBooks } from "../utility/localStorage";


const data = [
    { book: "Book A", pages: 200 },
    { book: "Book B", pages: 150 },
    { book: "Book C", pages: 499 },
    { book: "Book D", pages: 250 },
    { book: "Book E", pages: 100 },
];
const PagesToRead = () => {
    const readedBooks = useLoaderData()
    const [data,setData] =useState([])

    useEffect(() => {
        const storedReadBooksId = getStoredReadBooks();
        if (readedBooks.length > 0) {
            const readbooklisted = readedBooks?.filter(book => storedReadBooksId.includes(book.bookId));
            setData(readbooklisted);

        }
    }, [readedBooks])


    return (
        <ResponsiveContainer width="100%" className='my-10' height={500}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="book" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pages" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default PagesToRead;