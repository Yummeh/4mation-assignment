import styles from "./UserCard.module.css";

export default function UserCard({ user, onPressDelete, onPressEdit }) {
  return (
    <div className={styles.UserCardContainer}>
      <div className={styles.UserCardTop}>
        {/* Circle round initial */}
        <div className={styles.InitialContainer}>
          <h2 className={styles.InitialText}>{user.firstName[0].toUpperCase()}.</h2>
        </div>

        <div className={styles.BasicInfoContainer}>
          <h3 className={styles.BasicInfoText}>{user.firstName} {user.lastName}</h3>
          <p className={styles.BasicInfoText}>{user.phoneNumber}</p>
        </div>

        <div className={styles.ButtonsContainer}>
          <button className={styles.EditButton} onClick={() => {
            if (onPressEdit) onPressEdit(user);
          }}>
            <p className={styles.ButtonText}>Edit</p>
          </button>

          <button className={styles.DeleteButton} onClick={() => {
            if (onPressDelete) onPressDelete(user);
          }}>
            <p className={styles.ButtonText}>Delete</p>
          </button>
        </div>
      </div>

      <div className={styles.Divider}></div>

      <div className={styles.UserCardBottom}>
        <p className={styles.BasicInfoText}>Email address: {user.emailAddress}</p>
        <p className={styles.BasicInfoText}>Employee number: {user.employeeNumber}</p>
      </div>
    </div>
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