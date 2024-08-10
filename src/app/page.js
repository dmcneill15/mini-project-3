import 'bootstrap/dist/css/bootstrap.min.css';
//import styles from "./page.module.css";
import PizzaCard from "@/components/PizzaCard";

export default function Home() {
  return (
    <main>
      <section>
        <div className="title-container">
          <h1 className="slogan">Slices worth melting for...</h1>
          <p className="menuHeading">Order Online</p>
        </div>
      </section>
      <div>
        <PizzaCard />
      </div>
    </main>
  );
}
