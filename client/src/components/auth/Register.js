import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: "", password: "", passwordConfirmation: ""})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history)
    } else {
      alert('Password does not match!')
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}

          placeholder="Email"
          required
        />
        <input
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="Password"
          required
        />
        <input
          name="passwordConfirmation"
          value={user.passwordConfirmation}
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          type="password"
          placeholder="Password Confirmation"
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedRegister;