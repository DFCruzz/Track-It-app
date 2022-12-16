import { BrowserRouter, Route, Routes } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage/HistoryPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RoutinePage from "../pages/RoutinePage/RoutinePage";
import TodayPage from "../pages/TodayPage/TodayPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habitos" element={<RoutinePage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
