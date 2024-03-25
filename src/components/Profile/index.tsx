import styles from './styles.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/luisricarte.png" alt="Profile Photo" />
            <div>
                <strong>Luis Eduardo Ricarte</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}