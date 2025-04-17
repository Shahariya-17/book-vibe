import React, { useEffect, useState } from 'react';

const Books = () => {
        const [allBooks, setAllBooks] = useState([]);

        useEffect(() => {
            fetch("bookData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        },[])
    
    return (
        <div>
            <h1>Hello ami Books</h1>
        </div>
    );
};

export default Books;