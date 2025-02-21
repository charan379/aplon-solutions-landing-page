import "./App.css";
import { ConfigProvider, Layout } from "antd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";

function App() {
  return (
    <ConfigProvider
    theme={{
    components: {
      Layout: {
        headerBg: "#ffffff",
      }
    }
    }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Header />
        <HeroContent />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
