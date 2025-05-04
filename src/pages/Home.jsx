import Header from "../components/Header"
import Marketingbar from "../components/Marketingbar"
import Masthead from "../components/Masthead"

function Home() {
    return (
      <div className="title testing">
        <Marketingbar/>
        <Header/>
        <Masthead/>
      </div>
    );
  }

  export default Home;