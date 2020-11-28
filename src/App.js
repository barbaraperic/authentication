import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/user'
import ReduxThunk from 'redux-thunk'
import InfoCard from './components/InfoCard'
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(ReduxThunk))

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div style={styles.container}>
          <InfoCard />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '900px',
    //display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
