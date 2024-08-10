import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import PizzaCard from "@/components/PizzaCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <PizzaCard />
        </div>
      </div>

      <div className={styles.center}>
      </div>

      <div className={styles.grid}>
            </div>
    </main>
  );
}
