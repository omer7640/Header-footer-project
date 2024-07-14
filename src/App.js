import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="App dark:bg-gray-800">
      <Header />
      <SideBar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
