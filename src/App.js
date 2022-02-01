import "./App.css";
import AppRouter from "./router/AppRouter";
import StorageContextProvider from "./context/StorageContext";
import "./css/main.css";

function App() {
  return (
    <StorageContextProvider>
      <AppRouter />
    </StorageContextProvider>
  );
}

export default App;
