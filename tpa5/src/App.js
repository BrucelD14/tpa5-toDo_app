import { Toaster } from "react-hot-toast";
import "./App.css";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader></AppHeader>
          <AppContent></AppContent>
        </div>
      </div>
      <Toaster position="bottom-right" toastOptions={{ style: { fontSize: "1.4rem" } }} />
    </>
  );
}

export default App;
