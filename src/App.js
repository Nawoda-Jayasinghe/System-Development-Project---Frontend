import DonationForm from "./components/Donation/Form";
import JoinUsForm from "./components/JoinUs/Form";
import Login from "./components/Login/Login";
import HomePage from "./components/Homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Homepage/SharedLayout";
import SharedLayoutForDashBoard from "./components/Dashboard/SharedLayout";
import Projects from "./components/Projects/Projects";
import Dashboard from "./components/Dashboard/Dashboard";
import Tasks from "./components/Tasks/Tasks";
import Members from "./components/Members/Members";
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./components/Profile/Profile";
import MemberRequests from "./components/MemberRequests/MemberRequests";
import { useSelector } from "react-redux";
import Analytics from "./components/Analytics/Analytics";
import NotFound from "./components/NotFound/NotFound";
import Donations from "./components/Donation/Donations";
import Chat from "./components/Chat/Chat";
import Insights from "./components/Insights/Insights";

function App() {
  const user = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="donationForm" element={<DonationForm />} />
          <Route path="membershiForm" element={<JoinUsForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <SharedLayoutForDashBoard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="members" element={<Members />} />
          <Route path="profile" element={<Profile />} />
          <Route path="requests" element={<MemberRequests />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="donations" element={<Donations />} />
          <Route path="predictions" element={<Insights />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
