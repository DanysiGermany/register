import React from 'react';
import { Table, Button, Space } from 'antd';

const UserList = ({ users, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => onEdit(record.key)}>Edit</Button>
          <Button onClick={() => onDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} />;
};

export default UserList;
