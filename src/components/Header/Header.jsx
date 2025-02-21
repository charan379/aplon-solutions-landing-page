import { Col, Layout, Row, Typography } from 'antd'
import NavMenu from '../NavMenu'
import NavActions from '../NavActions'
import useResponsive from '../../hooks/useResponsive'
import NavMobileDrawer from '../NavMobileDrawer'

const Header = () => {
    const {isMobile} = useResponsive()
    return (
        <Layout.Header style={{ display: 'flex', justifyContent: 'space', padding: '0 10px 0 0' }}>
            <Row style={{ width: '100%' }} justify={"center"} align={"middle"}>
                <Col xs={20} lg={4} style={{textAlign: isMobile ? 'left' : 'center', padding: '0 10px'}}>
                    <Typography.Link style={{ lineHeight: "unset", }}>Aplon Solutions</Typography.Link>
                </Col>
                <Col xs={0} lg={14}>
                    <NavMenu />
                </Col>
                <Col xs={0} lg={6}>
                    <NavActions />
                </Col>
                <Col xs={4} lg={0}>
                    <NavMobileDrawer />
                </Col>
            </Row>

        </Layout.Header>
    )
}

export default Header