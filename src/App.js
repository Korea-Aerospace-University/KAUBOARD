import Clock from "./components/Clock/Clock";
import Footer from "./views/Footer/Footer";
import Main from "./views/Main/Main";
import Top from "./views/Top/Top";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  useEffect(() => {
    setBackgroundIndex(Math.floor((Math.random() * 100) % 16) + 1);
  }, []);
  const styles = {
    background: {
      backgroundImage: `url(./background/background${backgroundIndex}.jpg)`,
      //backgroundPosition: "0 20",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <div className="App" style={styles.background}>
      <div className="Wrapper">
        {/* <Top></Top> */}
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
