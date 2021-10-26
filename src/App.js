import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import CountryList from './components/CountryList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store} from './store'

function App() {
 
  return (
    <div className="App">
      <Provider store ={ store}>
        <Header />
        <CountryList />
        <Contents />
      </Provider>
    </div>
  );
}

export default App;
