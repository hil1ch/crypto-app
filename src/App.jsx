import { CryptoContextProvider } from "./context/crypto-context";
import { AppLayout } from "./components/layout/AppLayout";

export const App = () => (
  <CryptoContextProvider>
    <AppLayout />
  </CryptoContextProvider>
);
