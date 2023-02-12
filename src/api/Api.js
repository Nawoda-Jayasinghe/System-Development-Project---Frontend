import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3500";


//all the GET methods
//retrieve all the projects
export async function GetProjects() {
  const [responseArray, setresponseArray] = useState([]);

  await axios.get(API_URL+"/projects").then((res) => {
    if (res.status === 200) {
      setresponseArray(res.data);
    } else {
      console.log("Error: ", res);
    }
  });

  return responseArray;
};

//retrieve all the tasks
export async function GetTasks() {
  const [responseArray, setresponseArray] = useState([]);

  await axios.get(API_URL+"/notes").then((res) => {
    if (res.status === 200) {
      setresponseArray(res.data);
    } else {
      console.log("Error: ", res);
    }
  });

  return responseArray;
};

//get all the members
export async function GetMembers() {
  const [responseArray, setresponseArray] = useState([]);

  await axios.get(API_URL+"/users").then((res) => {
    if (res.status === 200) {
      setresponseArray(res.data);
    } else {
      console.log("Error: ", res);
    }
  });

  return responseArray;
};

//all the POST methods
//donation inserting 
export async function InsertDonation(donation) {
  let response = null;

  await axios.post(API_URL+"/donors/createDonation", donation).then((res) => {
    if (res.status === 201) {
      response = res.data;
    } else {
      console.log("Error: ", res);
    }
  });

  return response;
};

export async function loginAuthentication(user){
  let response = null;

  return response;
}