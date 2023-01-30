import { useState } from 'react';
import './App.css';
import UserTable from './table/UserTable';
import AddUserForms from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {
  // fake data
  const userDate = [
    { id: 1, name: 'Tony', username: 'tonyitalia' },
    { id: 2, name: 'Alexe', username: 'arsenalexe' },
    { id: 3, name: 'Mark', username: 'marktostart' },
    { id: 4, name: 'Bob', username: 'thebuilder' }
  ];

  const [users, setUsers] = useState(userDate);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  //since we dont know who will be edited first
  const initialFormState = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (users.id === id ? updatedUser : user)));
  };

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForms addUser={addUser} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          {/* props */}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
