import './App.css';
import { Product } from './Product';
import { Mailbox } from './Mailbox';
import { BookList } from './Booklist';
import { favouriteBooks } from './Books';

export function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <br />
      <Mailbox
        username="Kitsunka"
        messages={['I love you', 'Hi, kitsyunka!', 'You are my soulmate!']}
      />
      <br />
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </div>
  );
}
