import { Label } from "./components/Label/Label";
import { Layout } from "./components/Layout/Layout";
import { QuestionInput } from "./components/QuestionInput/QuestionInput";
import { GlobalStyles } from "./config/stylesGlobals";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <GlobalStyles />
        <Label>hola mundo</Label>
        <QuestionInput />
      </Layout>
    </AuthProvider>
  );
}

export default App;
