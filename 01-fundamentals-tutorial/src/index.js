import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';
import Title from './Title';

function BookList() {
  return (
    <>
      <Title />
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index}></Book>;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
