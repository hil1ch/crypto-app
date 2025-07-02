import { useContext } from "react";
import { Layout } from "antd";
import { AppHeader } from "./AppHeader";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { CryptoContext } from "../../context/crypto-context";
import {Spin} from "antd";

export function AppLayout() {
  const {loading} = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
