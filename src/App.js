import Clock from "./components/Clock/Clock";
import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import Top from "./views/Top/Top";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Top></Top>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
