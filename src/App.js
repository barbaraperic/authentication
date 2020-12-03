import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history'
import RegisterCard from './components/RegisterCard'
import LoginCard from './components/LoginCard'
import ProfileTable from './components/ProfileTable'
import NavigationBar from './components/NavigationBar'
import EditTable from './components/EditTable'

function App() {
  return (
    <Router history={history}>
      <div style={styles.container}>
        <Switch>
          <Route exact path="/">
            <RegisterCard />
          </Route>
          <Route path="/login">
            <LoginCard />
          </Route>
{          <Route exact path="/profile">
            <NavigationBar />
            <ProfileTable />
          </Route>}
          <Route path="/profile/edit">
            <NavigationBar />
            <EditTable />
          </Route>
        </Switch>
      </div>
    </Router>
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
