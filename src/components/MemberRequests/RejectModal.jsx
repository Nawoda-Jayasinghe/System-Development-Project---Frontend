import React from "react";
import { Button, Modal } from "flowbite-react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const RejectModal = ({ isRejectModalOpen, onClose, onClick }) => {
  return (
    <Modal show={isRejectModalOpen} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <XMarkIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to reject this member?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => onClick()}>
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

export default RejectModal;
