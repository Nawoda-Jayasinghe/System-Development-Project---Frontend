import React from "react";
import { Button, Modal } from "flowbite-react";

const ErrorModal = ({ isErrorModalOpen, onClose, errorText }) => {
  return (
    <Modal show={isErrorModalOpen} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {errorText}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onClose}>
              Okay
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ErrorModal;
