import config from "@/config";
import useLoading from "@/hooks/useLoading";
import useQuery from "@/hooks/useQuery";
import useUser from "@/hooks/useUser";
import { login } from "@/services/authService";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const query = useQuery();

  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const { setTrigger } = useUser();

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const result = await login(values);

      if (result) {
        setTrigger((prev) => !prev);
        return navigate(query.get("continue") || config.routes.home);
      }

      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    } catch (error) {
      message.error(error || "Có lỗi xảy ra, vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360, margin: "10vh auto" }}
      onFinish={onFinish}
    >
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
    </Form>
  );
};
export default Login;
