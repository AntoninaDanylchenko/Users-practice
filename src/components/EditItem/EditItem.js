import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUser } from 'redux/users/usersOperations';

const EditItem = ({ user, handleForm }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { ...user, name, email };
    dispatch(changeUser(newUser));
    handleForm();
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

      <button type="submit">Update</button>
    </form>
  );
};

export default EditItem;
