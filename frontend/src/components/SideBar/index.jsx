import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

const SideBar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={[UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
          const key = String(index + 1);
          return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: Array.from({ length: 4 }).map((_, j) => {
              const subKey = index * 4 + j + 1;
              return {
                key: subKey,
                label: `option${subKey}`,
              };
            }),
          };
        }
      )}
    />
  );
};

export default SideBar;
