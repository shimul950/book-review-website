// set stored read books

const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books')
    if(storedReadBooks){
        return JSON.parse(storedReadBooks)
    }
    return [];
}


const saveReadBooks =id =>{
    const storedReadbooks = getStoredReadBooks();
    const exists = storedReadbooks.find(bookId => bookId === id)
    if(!exists){
        storedReadbooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadbooks))
    }
}

// set stored wishlist books

const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishlist-books')
    if(storedWishlistBooks){
        return JSON.parse(storedWishlistBooks)
    }
    return [];
}


const saveWishlistBooks =id =>{
    const storedWishlistBooks = getStoredWishlistBooks();
    const exists = storedWishlistBooks.find(bookId => bookId === id)
    if(!exists){
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks))
    }
}

export{getStoredWishlistBooks ,saveWishlistBooks ,getStoredReadBooks,saveReadBooks}