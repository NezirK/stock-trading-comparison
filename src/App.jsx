import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComparisonTable from "./components/ComparisonTable";
import HowWeCompare from "./HowWeCompare";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ComparisonTable/>
      <HowWeCompare/>
      <About/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;