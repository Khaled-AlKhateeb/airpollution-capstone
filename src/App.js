import './App.css';
import { Provider } from 'react-redux';
import Home from './components/home';
import store from './redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
