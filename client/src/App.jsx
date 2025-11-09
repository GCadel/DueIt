import { Route, Routes } from "react-router";
import Layout from "./shared/Layout";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { CreateTaskPage } from "./pages/CreateTaskPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          index
          element={<LandingPage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/signup'
          element={<SignupPage />}
        />
        <Route
          path='/create-task'
          element={<CreateTaskPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
