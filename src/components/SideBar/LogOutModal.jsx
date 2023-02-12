import React from "react";
import { Button, Modal } from "flowbite-react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const LogOutModal = ({ isLogOutModalOpen, onClose, handleSignOut }) => {
  /* const deleteMember = () => {
    // console.log(deleteMemberId);

    const user = {
      id: deleteMemberId,
    };

    console.log(user);

    axios
      .delete(`http://localhost:3500/users/${deleteMemberId}`)
      .then((res) => {
        if (res.data.success) {
          onClose();
        }
        // members.pop({_id:id});
      });
  }; */

  return (
    <Modal show={isLogOutModalOpen} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <InformationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to logout?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => handleSignOut()}>
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={onClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LogOutModal;
