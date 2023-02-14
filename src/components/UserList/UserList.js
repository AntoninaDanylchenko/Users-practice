import Button from 'components/Button/Button';
import EditItem from 'components/EditItem/EditItem';
import { useState } from 'react';
// import EditItem from 'components/EditItem/EditItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';

const UserList = () => {
  const [updateUser, setUpdateUser] = useState(null);
  const ourUsers = useSelector(selectUsers);
  const dispatch = useDispatch();

  // const handleEdit = id => {
  //   const index = ourUsers.filter(user => user.id === id);
  //   setApdateUser(ourUsers[index]);
  // };
  const onHandleForm = () => {
    setUpdateUser(null);
  };
  const boolUpdateUser = id => updateUser && updateUser.id === id;
  return (
    <ul>
      {ourUsers.map(user => (
        <li key={user.id}>
          {boolUpdateUser(user.id) ? (
            <EditItem user={user} handleForm={onHandleForm} />
          ) : (
            <div>
              <p>
                <b>{user.name}</b>
              </p>
              <p>{user.email}</p>
            </div>
          )}
          <Button
            text="Edit"
            clickHandler={() => {
              setUpdateUser(user);
            }}
          />
          <Button
            text="Delete"
            clickHandler={() => dispatch(deleteUsers(user.id))}
          />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
