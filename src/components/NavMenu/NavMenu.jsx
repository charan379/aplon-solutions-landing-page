/* eslint-disable react/prop-types */
import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import useResponsive from "../../hooks/useResponsive";

const Label = (props) => {
    const { name } = props;
    const { isMobile } = useResponsive();

    if(isMobile){
        return name;
    } else {
        return <>{name} <DownOutlined style={{fontSize: 10}}/></>
    }
};

const NavMenu = () => {
    const {isMobile} = useResponsive();
  return (
        <Menu mode={isMobile ? "inline": 'horizontal'} theme='light' defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1', title: 'Home', label: <Label name={"Home"} />,
                    children: [
                        {
                            key: '1.1', title: 'Home 1', label: 'Home 1'
                        },
                        {
                            key: '1.2', title: 'Home 2', label: 'Home 2'
                        }]
                },
                { key: '2', title: 'About us', label: 'About us' },
                { key: '3', title: 'Pages', label: <Label name={"Pages"}/>,
                    children: [
                        {
                            key: '3.1', title: 'Page 1', label: 'Page 1'
                        },
                        {
                            key: '3.2', title: 'Page 2', label: 'Page 2'
                        }
                    ]
                },
                { key: '4', title: 'Blog', label: <Label name={"Blog"}/>,
                    children: [
                        {
                            key: '4.1', title: 'Blog 1', label: 'Blog 1'
                        },
                        {
                            key: '4.2', title: 'Blog 2', label: 'Blog 2'
                        }
                    ]
                },
                { key: '5', title: 'Contact', label: 'Contact' },
            ]}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
    />
  );
};

export default NavMenu;
