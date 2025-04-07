import config from "@/config";
import useLoading from "@/hooks/useLoading";
import useUser from "@/hooks/useUser";
import { logout } from "@/services/authService";
import { Button, message } from "antd";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const result = await logout();

      if (result) {
        setUser(null);
        return navigate(config.routes.login);
      }

      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    } catch (error) {
      message.error(error || "Có lỗi xảy ra, vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button danger onClick={handleLogout}>
        Đăng xuất
      </Button>
    </div>
  );
};

export default Header;
