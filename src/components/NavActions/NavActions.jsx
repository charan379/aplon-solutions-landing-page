import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Flex } from "antd";
import useResponsive from "../../hooks/useResponsive";

const NavActions = () => {
  const { isMobile } = useResponsive();
  return (
    <Flex
      style={{
        gap: "10px",
        justifyContent: "end",
        alignItems: "start",
        flexDirection: isMobile ? "column" : "row",
        padding: "0 10px",
      }}
    >
      {!isMobile ? (
        <Badge count={5}>
          <Button
            type="text"
            shape="circle"
            icon={<ShoppingCartOutlined style={{ fontSize: "22px" }} />}
            size={"large"}
            ghost
          />
        </Badge>
      ) : (
        <Button
          type="text"
          shape="default"
          icon={<ShoppingCartOutlined style={{ fontSize: "22px" }} />}
          size={"large"}
          ghost
        >
          Shopping Cart
        </Button>
      )}
      {!isMobile ? (
        <Button
          type="text"
          shape="circle"
          icon={<SearchOutlined style={{ fontSize: "22px" }} />}
          size={"large"}
          ghost
        />
      ) : (
        <Button
          type="text"
          shape="default"
          icon={<SearchOutlined style={{ fontSize: "22px" }} />}
          size={"large"}
          ghost
        >
          Search
        </Button>
      )}
      <Button
        type="primary"
        size={"large"}
        style={{
          background:
            "linear-gradient(297deg, rgba(2,0,36,1) 0%, rgba(9,123,241,1) 0%)",
          padding: "0 30px",
          width: isMobile ? "100%" : "auto",
        }}
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default NavActions;
