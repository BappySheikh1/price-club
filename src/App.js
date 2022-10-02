import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Navbar/Pricing';
import Assignment from './components/assignmentMarks/Assignment';
import PhoneBar from './components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold text-blue-600 underline'>Tailwind css </h1>
      <p>This is a paragraph</p>
      <Pricing></Pricing>
      <Assignment></Assignment>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
