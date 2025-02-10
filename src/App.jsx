
import Navigation from "./components/routes/Navigation";

// Thene
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navigation />
      </ThemeProvider>
    </div>
  );
}
export default App;
