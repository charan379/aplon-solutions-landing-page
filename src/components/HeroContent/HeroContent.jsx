import { Button, Col, Layout, Row, Typography } from "antd";

const { Content } = Layout;
const HeroContent = () => {
  return (
    <Content
      style={{
        background: "linear-gradient(135deg, #4a90e2 30%, #000000 70%)",
        color: "#fff",
        overflow: "hidden",
        maxWidth: "100vw",
        width: "100%",
      }}
    >
      <Row
        justify="start"
        align="middle"
        style={{ minHeight: "80vh", textAlign: "left", padding: "0 50px" }}
      >
        <Col sm={24} lg={12}>
          <Typography.Text style={{ color: "#fff", letterSpacing: 1 }}>
            TECHNOLOGY RELATED CONSULTANCY
          </Typography.Text>
          <Typography.Title style={{ color: "#fff", margin: "20px 0" }}>
            We transform ideas into technology
          </Typography.Title>
          <Typography.Paragraph style={{ fontSize: "16px", color: "#e0e6ed" }}>
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </Typography.Paragraph>
          <Button
            type="primary"
            size="large"
            style={{
              background:
                "linear-gradient(297deg, rgba(2,0,36,1) 0%, rgba(9,123,241,1) 0%)",
              padding: "0 30px",
              borderColor: "#2196F3",
            }}
          >
            Read More
          </Button>
        </Col>
      </Row>
    </Content>
  );
};

export default HeroContent;
