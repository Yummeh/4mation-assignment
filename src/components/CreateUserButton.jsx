import styles from "./CreateUserButton.module.css";

export default function CreateUserButton({ onClick }) {
    return (
        <button
            className={styles.ButtonContainer}
            onClick={onClick}>
            <p>Add user</p>
        </button>
    );
}