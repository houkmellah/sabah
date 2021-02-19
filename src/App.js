import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Caroussel from './Components/Views/Caroussel';
import Navbar from './Components/Views/Navbar';
import Card from './Components/Views/Card';
import Pagination from './Components/Views/Pagination';
import poems from './Data/Data';
import { List } from './Components/Views/Card';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <div className="container">
        <div className="row d-flex justify-content-around">
          {/* <i className="fab fa-facebook-square"></i> */}
          <div className=" logo">صباح بوعمر</div>
        </div>
        <Navbar />
        {/* <Caroussel /> */}
        <List datas={poems} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
