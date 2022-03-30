import { Home } from "./components/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyles } from "./config/stylesGlobals";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <GlobalStyles />
        <Home />
      </Layout>
    </AuthProvider>
  );
}

export default App;
