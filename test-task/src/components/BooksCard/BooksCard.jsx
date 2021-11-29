import styles from './BooksCard.module.css'

const BooksCard = () => {
    return (
        <div className={styles.booksCard}>
            <img src="https://files.books.ru/pic/1814001-1815000/1814274/1600196014c.jpg" alt="js" />
            categories <br />
            Name <br />
            author
        </div>
    )
}

export default BooksCard