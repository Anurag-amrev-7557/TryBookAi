import "./App.css";
import Header from "./Header";
import Section from "./Section";
import AiDemo from "./AiDemo";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import BookSamples from "./BookSamples";
import Roadmap from "./Roadmap";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";


function App() {
  return (
    <div className="container">
      <Header />
      <Section />
      <AiDemo />
      <Features />
      <HowItWorks />
      <BookSamples />
      <Roadmap />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
