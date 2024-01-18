import './App.css';
import { Footer } from './Component/Footer';
import { Header } from './Component/Header';
import BankPagination from './Component/utilities/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Header toolname='Manage Instructions' advisorId='A12387'/>
      <Footer/>
    </div>
  );
}

export default App;
