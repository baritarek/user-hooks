import React, { useEffect, useState } from 'react';

const EditUserForm = (props) => {
  const [user, setUsers] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...user, [name]: value });
  };

  useEffect(() => {
    setUsers(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
