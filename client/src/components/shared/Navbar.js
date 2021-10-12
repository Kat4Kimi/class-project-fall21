import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Navbar = ({ user, handleLogout, history }) => {

  const rightNavItems = () => {
    if (user) {
      // links for when the user is login in
      return (
        <>
          <Link to="/lists">
            <li>
              Lists
            </li>
          </Link>
          <li onClick={() => handleLogout(history)}>
            Logout
          </li>
        </>
      )
    } else {
      // links for when there is no user login 
      return(
        <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      )
    }
  }
  return(
    <>
      <nav>
        <ul>
          {/* where you see links regardless of if you are login or not */}
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...value}  {...props}/>}
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)