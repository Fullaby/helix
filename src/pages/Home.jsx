import Header from "../components/Header"
import Marketingbar from "../components/Marketingbar"
import Masthead from "../components/Masthead"
import Globaldata from "../components/Globaldata"

function Home() {
    return (
      <div className={`homepage title`}>
        <Marketingbar/>
        <Header/>
        <Masthead/>
        <Globaldata/>
      </div>
    );
  }

  export default Home;