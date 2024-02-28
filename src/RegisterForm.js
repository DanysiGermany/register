import { Form, Input, Button } from 'antd';

const RegisterForm = ({ addUser }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addUser(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="inline">
      <Form.Item name="username" rules={[{ required: true, message: '用户名不能为空' }]}>
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '密码不能为空' }]}>
        <Input placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">注册</Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
