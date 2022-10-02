import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold text-blue-600 underline'>Tailwind css </h1>
      <p>This is a paragraph</p>
    </div>
  );
}

export default App;
