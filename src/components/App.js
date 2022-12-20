import { BrowserRouter, Route, Routes } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RoutinePage from "../pages/RoutinePage/RoutinePage";
import TodayPage from "../pages/TodayPage/TodayPage";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<RoutinePage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
