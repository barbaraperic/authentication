import './App.css';
import LoginCard from './Components/LoginCard'
// // import RegisterCard from './Components/RegisterCard'

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
      {/* <RegisterCard /> */}
      <LoginCard />
    </div>
  );
}

export default App;
