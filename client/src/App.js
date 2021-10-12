import { Route, Switch } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Lists from './components/lists/Lists';
import ShowList from './components/lists/ShowList';
const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/lists" component={Lists} />
        <ProtectedRoute exact path="/lists/:id" component={ShowList} />
        <Route component={Nomatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;