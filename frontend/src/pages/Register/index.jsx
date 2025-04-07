import config from "@/config";
import useDebounce from "@/hooks/useDebounce";
import useLoading from "@/hooks/useLoading";
import isEmail from "@/utils/string";
import { Button, Form, Input, message, Select } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { checkEmail, register } from "@/services/authService";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const email = useDebounce(emailInput, 500);
  useEffect(() => {
    if (!isEmail(email)) return;

    //check exist email
    (async () => {
      try {
        setLoading(true);

        const isExists = await checkEmail(email);
        if (isExists) message.warning("Email đã tồn tại!");
      } catch (error) {
        message.error(error || "Có lỗi xảy ra, vui lòng thử lại sau!");
      } finally {
        setLoading(false);
      }
    })();
  }, [email]);

  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      setLoading(true);

      var { fullname } = values;
      const arrName = fullname.split(" ").filter((item) => item);
      const firstName = arrName.shift();
      const lastName = arrName.join(" ");

      const result = await register({
        ...values,
        firstName,
        lastName,
      });

      if (result) return navigate(config.routes.home);

      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    } catch (error) {
      message.error(
        Object.values(error)[0] || "Có lỗi xảy ra, vui lòng thử lại sau!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "10vh auto" }}
      scrollToFirstError
    >
      <Form.Item
        name="fullname"
        label="Họ tên"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập họ tên!",
            whitespace: true,
          },
          () => ({
            validator(_, value) {
              if (
                !value ||
                value.split(" ").filter((item) => item).length >= 2
              ) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("Vui lòng nhập đầy đủ họ và tên")
              );
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "Định dạng email không đúng!",
          },
          {
            required: true,
            message: "Vui lòng nhập email!",
          },
        ]}
      >
        <Input onChange={(e) => setEmailInput(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password_confirmation"
        label="Nhập lại mật khẩu"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Vui lòng nhập lại mật khẩu!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không trùng khớp!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button block type="primary" htmlType="submit">
          Đăng ký
        </Button>
        hoặc <Link to={config.routes.login}>Đăng nhập!</Link>
      </Form.Item>
    </Form>
  );
};
export default Register;
