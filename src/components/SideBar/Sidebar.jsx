import React, { useState } from "react";
import {
  BeakerIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterIcon,
  UserIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ChartPieIcon,
  BellAlertIcon,
  BanknotesIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../app/authSlice";
import { useSelector } from "react-redux";
import LogOutModal from "./LogOutModal";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const role = useSelector((state) => state.auth.role);

  const handleSignOut = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
  return (
    <aside class="w-full" aria-label="Sidebar">
      <div class="py-4 px-3 bg-login-color dark:bg-gray-800 h-screen">
        <Link to="/dashboard" class="flex items-center pl-2.5 mb-5">
          <span class="self-center text-xl font-bold whitespace-nowrap text-white">
            Siyapatha
          </span>
        </Link>
        <ul class="space-y-2">
          <li>
            <Link
              to="/dashboard"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <ChartBarIcon className="h-6 w-6" />
              <span class="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/projects"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard/projects"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <BeakerIcon className="h-6 w-6" />
              <span class="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/tasks"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard/tasks"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <DocumentCheckIcon className="h-6 w-6" />
              <span class="flex-1 ml-3 whitespace-nowrap">Tasks</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/members"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard/members"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <UserGroupIcon className="h-6 w-6" />
              <span class="flex-1 ml-3 whitespace-nowrap">Members</span>
            </Link>
          </li>
          {role !== "Employee" && (
            <li>
              <Link
                to="/dashboard/requests"
                class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                  location.pathname === "/dashboard/requests"
                    ? "text-login-color bg-gray-100"
                    : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
                }`}
              >
                <BellAlertIcon className="h-6 w-6" />
                <span class="flex-1 ml-3 whitespace-nowrap">Requests</span>
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/dashboard/donations"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard/donations"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <BanknotesIcon className="h-6 w-6" />
              <span class="flex-1 ml-3 whitespace-nowrap">Donations</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/chat"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard/chat"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <ChatBubbleBottomCenterIcon className="h-6 w-6" />
              <span class="flex-1 ml-3 whitespace-nowrap">Chats</span>
            </Link>
          </li>
          {role === "Manager" && (
            <li>
              <Link
                to="/dashboard/analytics"
                class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                  location.pathname === "/dashboard/analytics"
                    ? "text-login-color bg-gray-100"
                    : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
                }`}
              >
                <ChartPieIcon className="h-6 w-6" />
                <span class="flex-1 ml-3 whitespace-nowrap">Analytics</span>
              </Link>
            </li>
          )}
          {role === "Manager" && (
            <li>
              <Link
                to="/dashboard/predictions"
                class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                  location.pathname === "/dashboard/predictions"
                    ? "text-login-color bg-gray-100"
                    : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
                }`}
              >
                <LightBulbIcon className="h-6 w-6" />
                <span class="flex-1 ml-3 whitespace-nowrap">Predictions</span>
              </Link>
            </li>
          )}
          
          
          <li>
            <Link
              to="/dashboard/profile"
              class={`transition ease-in-out flex items-center p-2 text-base font-normal  rounded-lg ${
                location.pathname === "/dashboard/profile"
                  ? "text-login-color bg-gray-100"
                  : "text-icon-color-one hover:text-login-color hover:bg-gray-100"
              }`}
            >
              <UserIcon className="h-6 w-6" />
              <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
         
          <li>
            <a
              onClick={() => setIsLogoutModalOpen(true)}
              class="transition ease-in-out cursor-pointer flex items-center p-2 text-base font-normal text-icon-color-one hover:text-login-color rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
      <LogOutModal
        isLogOutModalOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        handleSignOut={handleSignOut}
      />
    </aside>
  );
};

export default Sidebar;
