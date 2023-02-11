import Button from 'components/Button/Button';
import UserList from 'components/UserList/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';

const UsersPage = () => {
  const dispatch = useDispatch();
  const showUsers = e => {
    e.preventDefault();
    dispatch(fetchUsers());
  };
  const ourUsers = useSelector(selectUsers);
  return (
    <>
      {ourUsers.length === 0 ? (
        <Button text="Show users list" clickHandler={showUsers} />
      ) : (
        <>
          <UserList />
          <Link to="/add"> Add Users</Link>
        </>
      )}
    </>
  );
};

export default UsersPage;
