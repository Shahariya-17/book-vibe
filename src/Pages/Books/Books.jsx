import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
        const [allBooks, setAllBooks] = useState([]);

        // useEffect(() => {
        //     fetch("bookData.json")
        //     .then(res => res.json())
        //     .then(data => {
        //         setAllBooks(data)
        //     })
        // },[])
    // const bookPromise = fetch('./bookData.json').then(res => res.json())
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading...</span>}>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
               </div>
            </Suspense>

        </div>
    );
};

export default Books;