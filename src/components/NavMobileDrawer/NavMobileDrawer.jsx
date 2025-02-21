import { Button, Drawer } from "antd";
import NavMenu from "../NavMenu";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import NavActions from "../NavActions";

const NavMobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="text" onClick={showDrawer} icon={<MenuOutlined style={{fontSize: "22px"}}/>} size="large" />
      <Drawer title="Aplon Solutions" onClose={onClose} open={open} width={"80%"}>
        <NavMenu />
        <NavActions/>
      </Drawer>
    </>
  );
};

export default NavMobileDrawer;
