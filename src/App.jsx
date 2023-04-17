import { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
const alanKey = 'c5a66bb5abc2aa65c4db81d3452c51ab2e956eca572e1d8b807a3e2338fdd0dc/stage';

import Navbar from './components/Navbar/Navbar'
import NewsCards from './components/NewsCards/NewsCards';
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection';

export default function App() {


  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    console.clear();
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        } else {
          console.log('command NOT correct');
        }
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <br className="scrollTarget" />
      <NewsCards theArticles={newsArticles} />
      <Footer />
    </div>
  )
}