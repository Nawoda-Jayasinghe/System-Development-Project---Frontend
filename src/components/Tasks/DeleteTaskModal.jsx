import React from "react";
import { Button, Modal } from "flowbite-react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import ErrorModal from "../Modals/ErrorModal";
import axios from "axios";
import { useState } from "react";

const DeleteTaskModal = ({
  isDeleteModalOpen,
  onClose,
  deleteTaskId,
}) => {
  const [errorModalOpen,setErrorModalOpen] = useState(false);
  const [errorModalText,setErrorModalText] = useState(null);

  const deleteTask = () => {
    axios.delete(`http://localhost:3500/notes/${deleteTaskId}`).then((res) => {
      if(res.data.result){
        onClose();
      }else{  
        setErrorModalOpen(true);
        setErrorModalText(res.data.message);
      }
    })
  }

  return (
    <>
    <Modal show={isDeleteModalOpen} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <InformationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this task?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => deleteTask()}>
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={onClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    <ErrorModal
      isErrorModalOpen={errorModalOpen}
      onClose={() => setErrorModalOpen(false)}
      errorText={errorModalText}
    />
    </>
  );
};

export default DeleteTaskModal;
