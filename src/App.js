import './App.css';
// import LoginCard from './components/LoginCard'
// import RegisterCard from './components/RegisterCard'
// import NavigationBar from './components/NavigationBar'
// import ProfileTable from './components/ProfileTable'
// import EditTable from './components/EditTable'
// import InputNew from './components/Input_New'
import InfoCard from './components/InfoCard'

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

function App() {
  return (
    <div style={styles.container}>
      {/* <RegisterCard /> */}
      {/* <LoginCard /> */}
      {/* <NavigationBar /> */}
      {/* <NavigationBar /> */}
      {/* <ProfileTable /> */}
      <InfoCard />
    </div>
  );
}

export default App;
