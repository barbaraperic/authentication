import './App.css';
// import LoginCard from './Components/LoginCard'
// import RegisterCard from './Components/RegisterCard'
import NavigationBar from './Components/NavigationBar'

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
      {/* <LoginCard /> */}
      <NavigationBar />
    </div>
  );
}

export default App;
