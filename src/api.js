// src/api/api.js

export const getUsers = () => {
    return [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    ];
  };
  
  export const getRoles = () => {
    return [
      { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
      { id: 2, name: 'User', permissions: ['Read'] },
    ];
  };
  
  export const getPermissions = () => {
    return ['Read', 'Write', 'Delete'];
  };
  