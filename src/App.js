import './App.css';
import Form from './Components/Card'
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
      <Form />
    </div>
  );
}

export default App;
