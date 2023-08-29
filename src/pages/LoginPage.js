import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/auth-operetons';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
       dispatch(
        loginUserThunk({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      alert('Welcome!');
    } catch (error) {
      alert('Incorrect login or password!');
    }
    form.reset();
  };
  return (
    <div>
      <title>Login</title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" 
          autoComplete="username"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter your email" />
        </label>
        <label>
          Password
          <input type="password" name="password"
          autoComplete="current-password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter your password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
