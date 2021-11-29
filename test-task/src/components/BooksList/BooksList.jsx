import styles from './BooksList.module.css'
import BooksCard from '../BooksCard/BooksCard'

const BooksList = () => {
    return (
        <div className={styles.booksList}>
            <h2>found ??? result</h2>
            <BooksCard />
        </div>
    )
}

export default BooksList