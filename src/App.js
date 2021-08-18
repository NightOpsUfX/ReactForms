import logo from './logo.svg';
import './App.css';
import SaveCarForm from "./components/Savecarform";
import Cars from "./components/Cars";

function App() {
  return (
    <div>
      <div>
        {<SaveCarForm/>}
      </div>
        <div>
            {<Cars/>}
        </div>
    </div>
  );
}

export default App;
