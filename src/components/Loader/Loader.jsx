import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p className={styles.loaderText}>Загружаем данные о погоде...</p>
        </div>
    )
}

export default Loader;