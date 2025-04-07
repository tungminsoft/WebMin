import TestComponent from "@/components/TestComponent";
import config from "@/config";
import useUser from "@/hooks/useUser";
import { login } from "@/services/authService";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { Link, useNavigate } from "react-router";
const TestLogin = () => {
  const navigate = useNavigate();

  const { setTrigger } = useUser();

  const onSubmit = async (form) => {
    const data = form.getFieldsValue();
    console.log(data);

    const result = await login(data);

    if (result) {
      setTrigger((prev) => !prev);
      navigate(config.routes.home);
      return true;
    }

    return false;
  };

  return (
    <TestComponent onSubmit={onSubmit}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập Email!",
            type: "email",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Mật khẩu" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Mật khẩu"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>
          <a href="">Quên mật khẩu</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Đăng nhập
        </Button>
        hoặc <Link to={config.routes.register}>Đăng ký!</Link>
      </Form.Item>
    </TestComponent>
  );
};
export default TestLogin;
