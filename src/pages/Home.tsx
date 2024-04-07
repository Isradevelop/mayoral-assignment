import { CardList } from "../components/CardList";
import { SearchBar } from "../components/SearchBar";
import styles from '../styles/index.module.css';
import { OrderSelectComponent } from "../components/OrderSelectComponent";

export const Home = () => {
    return (
        <div className={styles.principalContainer}>
            <OrderSelectComponent />
            <SearchBar />
            <CardList />
        </div>
    )
}
