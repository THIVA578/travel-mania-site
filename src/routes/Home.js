import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Navbar } from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="Your Journey Your Story"
        text="choose Your Favourite Destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
