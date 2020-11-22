import './App.css';
import Card from './Components/Card'
//import Input from './Components/Input'

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
}

function App() {
  return (
    <div style={styles.container}>
      <Card />
    </div>
  );
}

export default App;
