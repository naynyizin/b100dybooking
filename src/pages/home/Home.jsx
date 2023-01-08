import Featured from "../../components/featured/Featured";
import Featureprop from "../../components/featureprop/Featureprop";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Properties from "../../components/properties/Properties";
import Maillist from "../../components/maillist/Maillist";
import Footer from "../../components/footer/Footer";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <Properties />
        <Featureprop />
        <Maillist />
        <Footer />
      </div>
    </div>
  );
}
