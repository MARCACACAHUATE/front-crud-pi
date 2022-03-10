import './App.css';
import { AppUI } from "./AppUI";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <AppUI/>
    </DataProvider>
  );
}

export default App;
