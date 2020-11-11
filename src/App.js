import Clock from "./components/Clock/Clock";
import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import Top from "./views/Top/Top";
import "./App.scss";

function App() {
  const styles = {
    background: {
      backgroundImage: `url(./background1.jpg)`,
      backgroundPosition: "0 20",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <div className="App" style={styles.background}>
      <div className="Wrapper">
        <Top></Top>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
