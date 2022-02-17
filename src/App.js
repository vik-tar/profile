import './App.scss';
import WelcomeSection from "./components/welcome-section/WelcomeSection";
import AboutSection from "./components/about-section/AboutSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000)
  }, []);

  if (loading) {
    return null
  } else {
    return <div>
      <WelcomeSection/>
      <AboutSection/>
      <Contact/>
      <Footer/>
    </div>
  }
}


export default App;
