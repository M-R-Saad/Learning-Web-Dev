import './App.css'
import Todo from './Todo';
import Library from './Library';

function App() {

  const books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 10 }, 
    { id: 2, title: "Book 2", author: "Author 2", price: 25 }, 
    { id: 3, title: "Book 3", author: "Author 3", price: 20 }
  ];

  return (
    <>
      <Student name="John Doe" age={20} />
      <Student name="Jane Smith" age={22} />

      <ul>
        <Todo key={1} task="Learn React" status="In Progress" time={60} />
        <Todo key={2} task="Build a React App" status="Not Started" time={30} />
        <Todo key={3} task="Deploy the App" status="Not Started" time={90} />
      </ul>

      <h1 style={{ 
        color: 'red',
        textAlign: 'center',
       }}>
        Library Books
      </h1>

      <Library books={books} />

    </>
  )
}

function Student(props) {

  return (
    <div className='student'>
      <p>
        My Name is: {props.name}
      </p>
      <p>
        I am {props.age} years old.
      </p>
    </div>
  )
}

export default App
