import useUser from "@/hooks/useUser";
import { Button } from "antd";

const Home = () => {
  const { setTrigger } = useUser();

  return (
    <div>
      <Button onClick={() => setTrigger((prev) => !prev)}>Click me</Button>
    </div>
  );
};

export default Home;
