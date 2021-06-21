import logo from './logo.svg';
import './App.css';
import Info from './Pages/Info/Info';
import { Provider } from 'react-redux';
import Store from './Store';

function App() {
  return (
    <div className="App">
    <Provider store={Store}>
   
     <Info/>
  
    </Provider>
    </div>
  );
}

export default App;
