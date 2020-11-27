import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/user'
import ReduxThunk from 'redux-thunk'
import InfoCard from './components/InfoCard'

const store = createStore(reducer, applyMiddleware(ReduxThunk))

function App() {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <InfoCard />
      </div>
    </Provider>
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
