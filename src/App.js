import './App.css';
// import LoginCard from './Components/LoginCard'
// import RegisterCard from './Components/RegisterCard'
// import NavigationBar from './Components/NavigationBar'
// import ProfileTable from './Components/ProfileTable'
// import EditTable from './Components/EditTable'
// import InputNew from './Components/Input_New'
import InfoCard from './Components/InfoCard'

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
