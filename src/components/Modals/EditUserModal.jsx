import { useState } from "react";
import styles from "./CreateUserModal.module.css";

export default function EditUserModal({ user, onClose, onEditUser }) {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [emailAddress, setEmailaddress] = useState(user.emailAddress || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");

  const [checked, setChecked] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailAddressValid, setEmailAddressValid] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);

  function checkInputs() {
    // Check if all inputs have been filled in
    let fnValid = firstName.trim().length > 0;
    let lnValid = lastName.trim().length > 0;
    let eaValid = emailAddress.trim().length > 0;
    let pnValid = phoneNumber.trim().length > 0;

    setFirstNameValid(fnValid);
    setLastNameValid(lnValid);
    setEmailAddressValid(eaValid);
    setPhoneNumberValid(pnValid);
    setChecked(true);

    return fnValid && lnValid && eaValid && pnValid;
  }

  return (
    <div className={styles.CreateUserModalBackground}
      onClick={() => {
        // if (onClose) onClose();
      }}
    >
      <div className={styles.ModalContainer}>
        <h2>Edit user</h2>

        {/* First name input */}
        <div className={styles.InputContainer}>
          <p className={styles.InputDescription}>First name: </p>
          <input className={checked && !firstNameValid ? styles.InputInvalid : styles.ModalInput} value={firstName} placeholder={"First name"} type="text" onChange={(event) => { setFirstName(event.target.value) }} />
        </div>

        {/* Last name input */}
        <div className={styles.InputContainer}>
          <p className={styles.InputDescription}>Last name: </p>
          <input className={checked && !lastNameValid ? styles.InputInvalid : styles.ModalInput} value={lastName} placeholder={"Last name"} type="text" onChange={(event) => { setLastName(event.target.value) }} />
        </div>

        {/* Email address input */}
        <div className={styles.InputContainer}>
          <p className={styles.InputDescription}>Email address: </p>
          <input className={checked && !emailAddressValid ? styles.InputInvalid : styles.ModalInput} value={emailAddress} placeholder={"Email address"} type="text" onChange={(event) => { setEmailaddress(event.target.value) }} />
        </div>

        {/* Phone number input */}
        <div className={styles.InputContainer}>
          <p className={styles.InputDescription}>Phone number: </p>
          <input className={checked && !phoneNumberValid ? styles.InputInvalid : styles.ModalInput} value={phoneNumber} placeholder={"Phone number"} type="text" onChange={(event) => { setPhoneNumber(event.target.value) }} />
        </div>

        {/* Add user and close modal buttons */}
        <div className={styles.ButtonsContainer}>
          <button
            className={styles.DoneButton}
            onClick={() => {
              if (checkInputs()) {
                if (onEditUser) onEditUser(user, { firstName, lastName, emailAddress, phoneNumber })
              }

            }}>Save user</button>
          <button
            className={styles.CloseButton}
            onClick={() => {
              if (onClose) onClose()
            }}>Close modal</button>
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