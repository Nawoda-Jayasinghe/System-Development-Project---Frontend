import React, { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ApproveModal from "./ApproveModal";
import axios from "axios";
import RejectModal from "./RejectModal";

const MemberRequestItem = ({ member, requestApproved}) => {
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const handleSubmit = () => {
    axios.patch(`http://localhost:3500/users/updateMember/${member._id}`).then((res) => {
      if(res.data.result){
        setIsApproveModalOpen(false);
        requestApproved(1);
      }

    })
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 w-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-3"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-3" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {member.firstName} {member.lastName}
      </th>
      <td class="py-4 px-6">{member.roles === "Employee" ? "Member" : member.roles}</td>
      <td class="py-4 px-6">{member.email}</td>
      <td class="py-4 px-6">{member.phone}</td>
      <td class="py-4 px-6">
        <div className="flex space-x-3">
          <button
            onClick={() => setIsApproveModalOpen(true)}
            class="font-medium bg-login-color text-white px-4 py-1 rounded-lg"
          >
            <CheckIcon className="h-5 w-5" />
          </button>
        </div>
      </td>
      <ApproveModal
        isApproveModalOpen={isApproveModalOpen}
        onClick={handleSubmit}
        onClose={() => setIsApproveModalOpen(false)}
      />
    </tr>
  );
};

export default MemberRequestItem;
