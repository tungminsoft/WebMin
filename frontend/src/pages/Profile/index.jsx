import useLoading from "@/hooks/useLoading";
import useUser from "@/hooks/useUser";
import { editProfile, getProfile } from "@/services/userService";
import {
  Button,
  Descriptions,
  Form,
  Image,
  Input,
  message,
  Modal,
  Upload,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const dataStruct = [
  { name: "username", label: "Tài khoản" },
  { name: "fullName", label: "Họ tên" },
  { name: "age", label: "Tuổi" },
  { name: "gender", label: "Giới tính" },
  { name: "birthDate", label: "Ngày sinh" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Số điện thoại" },
  { name: "image", label: "Avatar" },
  { name: "createdAt", label: "Thời gian tạo tài khoản", allowEdit: false },
  { name: "emailVerifiedAt", label: "Xác minh tài khoản", allowEdit: false },
];

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

const Profile = () => {
  const param = useParams();
  const username = param.username;

  const { setLoading } = useLoading();
  const { user } = useUser();

  const [currentProfile, setCurrentProfile] = useState({});

  const [items, setItems] = useState([]);

  const [edit, setEdit] = useState(false);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const result = await getProfile(username);

        if (!result) return;

        setCurrentProfile(result);

        setItems(
          dataStruct.map((field, index) => {
            const item = { key: index, label: field.label };
            if (field.name === "fullName")
              item.children = `${result.firstName} ${result.lastName}`;
            else if (field.name === "emailVerifiedAt")
              item.children = result[field.name]
                ? "Đã xác minh"
                : "Chưa xác minh";
            else if (field.name === "image") {
              item.children = (
                <Image
                  width={200}
                  height={200}
                  src={result[field.name]}
                  fallback="data:image/png;base64,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"
                />
              );
            } else item.children = result[field.name];

            return item;
          })
        );
      } catch (error) {
        message.error(error || "Có lỗi xảy ra, vui lòng thử lại sau!");
      } finally {
        setLoading(false);
      }
    })();
  }, [trigger]);

  const [form] = useForm();
  const handleEdit = () => {
    var { firstName, lastName } = currentProfile;

    const fullName = `${firstName} ${lastName}`;

    form.setFieldsValue({ ...currentProfile, fullName });
    setEdit(true);
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const values = form.getFieldsValue();
      console.log(values);
      setLoading(false);
      return;

      var { fullName } = values;
      const arrName = fullName.split(" ").filter((item) => item);
      const firstName = arrName.shift();
      const lastName = arrName.join(" ");

      const result = await editProfile(username, {
        ...values,
        firstName,
        lastName,
      });

      if (result.id) {
        message.success("Cập nhật profile thành công!");
        setTrigger((prev) => !prev);
        setEdit(false);
        return;
      }

      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    } catch (error) {
      message.error(
        Object.values(error)[0][0] || "Có lỗi xảy ra, vui lòng thử lại sau!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Descriptions title="Thông tin profile" column={1} items={items} />
      {user.username === currentProfile.username && (
        <Button type="primary" style={{ marginTop: 20 }} onClick={handleEdit}>
          Chỉnh sửa
        </Button>
      )}

      <Modal
        title="Chỉnh sửa profile"
        open={edit}
        onOk={handleSave}
        onCancel={() => setEdit(false)}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form
          {...formItemLayout}
          form={form}
          onFinish={handleSave}
          style={{ margin: "auto" }}
          scrollToFirstError
        >
          {dataStruct
            .filter((field) => field.allowEdit === undefined)
            .map((field) => {
              if (field.name === "image") {
                return (
                  <Form.Item
                    key={field.name}
                    name={field.name}
                    label={field.label}
                  >
                    <Upload
                      listType="picture-card"
                      maxCount={1}
                      onPreview={(a) => {
                        console.log(a);
                      }}
                    >
                      <UploadOutlined />
                    </Upload>
                  </Form.Item>
                );
              }

              return (
                <Form.Item
                  key={field.name}
                  name={field.name}
                  label={field.label}
                >
                  <Input />
                </Form.Item>
              );
            })}
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
