import { Route, Routes } from "react-router";
import Layout from "./shared/Layout";
import LandingPage from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { CreateTaskPage } from "./pages/CreateTaskPage";
import SummaryPage from "./pages/SummaryPage";
import { MembersPage } from "./pages/MembersPage";
import { TasksPage } from "./pages/TasksPage";
import "./App.css";

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
        <Route
          path='/summary'
          element={<SummaryPage />}
        />
        <Route
          path='/members'
          element={<MembersPage />}
        />
        <Route
          path='/tasks'
          element={<TasksPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
