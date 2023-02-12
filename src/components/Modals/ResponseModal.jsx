import { Button, Modal } from "flowbite-react";
import React from "react";

const ResponseModal = ({
  onClose,
  onClick,
  isModalOpen,
  title,
  description,
}) => {
  return (
    <Modal show={isModalOpen} onClose={onClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-end">
        <Button onClick={onClick}>Okay</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResponseModal;
