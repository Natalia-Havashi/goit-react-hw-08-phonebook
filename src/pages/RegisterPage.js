import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUserThunk } from 'redux/auth/auth-operetons';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      await dispatch(
        registerUserThunk({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      alert('Welcome!');
      navigate('/login');
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Create account</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z\d\s'-]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter your name "
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="username"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter your email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          pattern="^[a-zA-Z0-9!@#\$%^&*()-_=+`~\[\]{}|:<>/?]+$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter your password"
        />
      </label>
      <button type="submit">Sign Up</button>
      <NavLink to="/login">Log In</NavLink>
    </form>
  );
};
