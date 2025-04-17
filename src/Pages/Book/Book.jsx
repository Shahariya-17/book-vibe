import React, { use } from "react";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";


const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);
  const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher, bookId} = singleBook;

  return (
   <Link to={`/bookDetails/${bookId}`}>
     <div className="card bg-base-100 w-96 shadow border p-6">
      <figure className="p-4 bg-gray-100 w-4/5 mx-auto">
        <img className="h-[166px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-10">
            {
                tags.map(tag => <button>{tag}</button>)
            }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>
         Published by: {publisher}
        </p>
        <div className="border-t-1 border-dashed"></div>
        <div className="card-actions justify-between mt-3">
          <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating} <IoIosStarHalf />            </div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;
