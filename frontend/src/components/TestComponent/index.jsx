import useLoading from "@/hooks/useLoading";
import { Form, message } from "antd";

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

const TestComponent = ({ onSubmit, children }) => {
  const { setLoading } = useLoading();

  const [form] = Form.useForm();
  const onFinish = async () => {
    try {
      setLoading(true);

      if (await onSubmit(form)) return;
      
      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    } catch (error) {
      message.error(error || "Có lỗi xảy ra, vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "10vh auto" }}
      scrollToFirstError
    >
      {children}
    </Form>
  );
};
export default TestComponent;
