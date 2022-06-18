import { Header, ActionIcon } from "@mantine/core";
import { ImBrightnessContrast } from "react-icons/im";

const HeaderView = () => {
  return (
    <Header height={60} className="p-2 flex justify-between">
      <h1>Site Title</h1>
      <div className="flex items-center">
        <ActionIcon><ImBrightnessContrast size={24} /></ActionIcon>
      </div>
    </Header>
  );
};

export default HeaderView;
