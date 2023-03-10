import React, { useState } from 'react';

const AddUserForms = (props) => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    //key and value
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!(user.name || user.username)) {
          return alert('User cant be empty');
        }
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        //
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type='text'
        name='username'
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForms;
