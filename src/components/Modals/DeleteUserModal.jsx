import { useState } from "react";
import styles from "./DeleteUserModal.module.css";

export default function DeleteUserModal({ user, onClose, onDeleteUser }) {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [emailAddress, setEmailaddress] = useState(user.emailAddress || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [employeeNumber, setEmployeeNumber] = useState(user.employeeNumber || "");

  return (
    <div className={styles.DeleteUserModalBackground}
      onClick={() => {
        // if (onClose) onClose();
      }}
    >
      <div className={styles.ModalContainer}>
        <h2 className={styles.DeleteTitle}>Do you want to delete this user?</h2>

        <p>User: {firstName} {lastName} </p>
        <p>Number: {employeeNumber}</p>


        {/* Add user and close modal buttons */}
        <div className={styles.ButtonsContainer}>
          <button
            className={styles.DeleteButton}
            onClick={() => {
              if (onDeleteUser) onDeleteUser();
            }}>Delete</button>
          <button
            className={styles.CloseButton}
            onClick={() => {
              if (onClose) onClose();
            }}>Cancel</button>
        </div>
      </div>
    </div >
  );
};

/*
User
•	An employee number
•	A first name
•	A last name
•	An email address
•	A phone number
*/