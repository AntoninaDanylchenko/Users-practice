import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/usersOperations';

const AddPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = e => {
    const newUser = { name, email };
    e.preventDefault();
    dispatch(addUser(newUser));
    navigate('/users', { replace: true });
    reset();
  };
  const reset = () => {
    setEmail('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddPage;
