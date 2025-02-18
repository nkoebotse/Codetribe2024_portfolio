
import NavBar from './sections/NavBar/NavBar';
import CoverPage from './sections/CoverPage/CoverPage';
import TableOfContents from './sections/TableOfContents/TableOfContents';
import Hero from './sections/Hero/Hero';

import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

import FeedbackAndReflections from './sections/FeedbackAndReflections/FeedbackAndReflections';
import PostProgramGoals from './sections/FeedbackAndReflections/FeedbackAndReflections';

function App() {
  return (
    <>
      <NavBar />
      <CoverPage />
      <TableOfContents />
      <Hero />
      
     
      <Skills />
      <Projects />
      <FeedbackAndReflections />
      <PostProgramGoals />
      <Contact />
      <Footer />
    </>
  );
}

export default App;