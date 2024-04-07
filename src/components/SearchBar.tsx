import { ChangeColumns } from "./ChangeColumns"
import { SearchInput } from "./SearchInput"
import styles from "../styles/SearchBar.module.css"

export const SearchBar = () => {
    return (
        <>
            <div className={styles.searchBarContainer}>
                <SearchInput />
                <ChangeColumns />
            </div>
            <hr className={styles.hr} />
        </>
    )
}
