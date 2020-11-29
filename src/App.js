import './App.css';
import InfoCard from './components/InfoCard'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div style={styles.container}>
          <InfoCard />
        </div>
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
