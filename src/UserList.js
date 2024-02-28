import { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';

const EditForm = ({ visible, onCreate, onCancel, user }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
      }}
      onCancel={onCancel}
    >
      <Form
        form={form}
        initialValues={user}
      >
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const UserList = ({ users, deleteUser, updateUser }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const showModal = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleEdit = (values) => {
    updateUser(currentUser.id, { ...values, id: currentUser.id });
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button onClick={() => showModal(record)}>Edit</Button>
          <Button onClick={() => deleteUser(record.id)} style={{ marginLeft: 16 }}>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={users} columns={columns} rowKey="id" />
      <EditForm
        user={currentUser}
        visible={isModalVisible}
        onCreate={handleEdit}
        onCancel={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default UserList;
