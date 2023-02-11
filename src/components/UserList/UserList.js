import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';

const UserList = () => {
  const ourUsers = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <ul>
      {ourUsers.map(({ id, email, name }) => (
        <li key={id}>
          <div>
            <p>
              <b>{name}</b>
            </p>
            <p>{email}</p>
          </div>
          <Button
            text="Delete"
            clickHandler={() => dispatch(deleteUsers(id))}
          />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
