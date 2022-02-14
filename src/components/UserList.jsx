import styles from "./UserList.module.css";
import useStateWithLocalStorage from "../lib/localStorage";
import UserCard from "./UserCard";
import React, { useState } from "react";
import CreateUserModal from "./Modals/CreateUserModal";
import EditUserModal from "./Modals/EditUserModal";
import DeleteUserModal from './Modals/DeleteUserModal'
import generateID from "../lib/generateID";
import CreateUserButton from "./CreateUserButton";

/*
User
•	An employee number
•	A first name
•	A last name
•	An email address
•	A phone number
*/

const USER_PATH = "user_list/data"

const tempData = [
  {
    employeeNumber: "0",
    firstName: "Ralph",
    lastName: "de Horde",
    emailAddress: "ralphdehorde@gmail.com",
    phoneNumber: "123456789",
  },
  {
    employeeNumber: "1",
    firstName: "Gert",
    lastName: "van Assen",
    emailAddress: "gertvanassen@testemail.com",
    phoneNumber: "123456788",
  },
  {
    employeeNumber: "2",
    firstName: "Hans",
    lastName: "Dijk",
    emailAddress: "hansdijk@testemail.com",
    phoneNumber: "123456787",
  },
];

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [createUsermodalOpen, setCreateUserModalOpen] = useState(false)
  const [editUserModalOpen, setEditUserModalOpen] = useState(false)
  const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState({});

  // const onChange = event => setValue(event.target.value);
  function createUser(user) {
    let id = generateID();

    while (users.indexOf(id) != -1) {
      id = generateID();
    }

    let newUser = {
      employeeNumber: id,
      ...user,
    }

    let newUsers = [...users];
    newUsers.push(newUser);

    setUsers(newUsers);
    setCreateUserModalOpen(false);
  }

  function editUser(user, newUserData) {
    let newUser = {
      employeeNumber: user.employeeNumber,
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
      emailAddress: newUserData.emailAddress,
      phoneNumber: newUserData.phoneNumber,
    }

    let newUsers = [...users];
    let index = newUsers.indexOf(user);
    newUsers[index] = newUser;
    setUsers(newUsers);
    setEditUserModalOpen(false);
  }

  function deleteUser() {
    let userIndex = users.indexOf(selectedUser);
    if (userIndex == -1) {
      console.log("No user found");
      return;
    }

    let newUsers = [...users];
    newUsers.splice(userIndex, 1);
    setUsers(newUsers);
    setDeleteUserModalOpen(false);
  }


  function onPressEditUser(user) {
    setSelectedUser(user);
    setEditUserModalOpen(true);
  }

  function onPressDeleteUser(user) {
    setSelectedUser(user);
    setDeleteUserModalOpen(true);
  }

  function openCreateUserModal() {
    setCreateUserModalOpen(true)
  }


  return (
    <div className={styles.UserList}>
      {createUsermodalOpen && (
        <CreateUserModal
          onClose={() => { setCreateUserModalOpen(false) }}
          onCreateUser={createUser}
        />
      )}

      {editUserModalOpen && (
        <EditUserModal
          onClose={() => { setEditUserModalOpen(false) }}
          onEditUser={editUser}
          user={selectedUser}
        />
      )}

      {deleteUserModalOpen && (
        <DeleteUserModal
          onClose={() => { setDeleteUserModalOpen(false) }}
          onDeleteUser={deleteUser}
          user={selectedUser}
        />
      )}



      {/* Display users */}
      {
        users.map((item, index) => {
          return <div key={index} className={styles.UsersContainer}>
            <UserCard
              user={item}
              onPressDelete={onPressDeleteUser}
              onPressEdit={onPressEditUser}
            />
          </div>
        })
      }

      {/* <button onClick={openCreateUserModal}>
        <p>Add user</p>
      </button> */}

      <CreateUserButton onClick={openCreateUserModal} />

    </div>
  );
}

// How to store users
// Store user as one object, update entire user when changing some data, does not really matter.
// Store users with a randomly generated ID