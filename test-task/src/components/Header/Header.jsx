import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.searchHeader}>
            <h1>Search for books</h1>
            <form className={styles.search}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
                <button className={styles.searchButton}>search</button>
            </form>
            <div className={styles.searchSelect}>
                categories
                <select>
                    <option>all</option>
                    <option>art</option>
                    <option>biography</option>
                    <option>computers</option>
                    <option>history</option>
                    <option>medical</option>
                    <option>poetry</option>
                </select>
                Sorting by
                <select>
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </div>
    )
}

export default Header