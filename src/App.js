import { useState } from 'react';
import { Layout } from 'antd';
import RegisterForm from './RegisterForm';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? updatedUser : user));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content style={{ padding: '24px' }}>
        <RegisterForm addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
      </Layout.Content>
    </Layout>
  );
};

export default App;
