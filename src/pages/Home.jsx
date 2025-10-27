import styles from "./Home.module.css";
import Hero from "../components/Hero";
import App from "../App";

export default function Home() {
  return (
    <App>
      <section>
        <h1>Home Page</h1>
        < Hero />
        <p>Application's homepage</p>
      </section>
    </App>
  );
}