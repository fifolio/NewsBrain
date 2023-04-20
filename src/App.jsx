import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
const alanKey = 'c5a66bb5abc2aa65c4db81d3452c51ab2e956eca572e1d8b807a3e2338fdd0dc/stage';
import Navbar from './components/Navbar/Navbar'
import NewsCards from './components/NewsCards/NewsCards';
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection';
import ScrollUp from './components/Btns/ScrollUp';
import wordsToNumbers from './components/wordToNumber/wordToNumber'

export default function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1)

  useEffect(() => {
    console.clear();
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {

        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
          const target = document.querySelector('.scrollToArticles')
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }

        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)

        } else if (command === 'open') {
     
          const parsedNumber = number.length > 2 ? wordsToNumbers(number) : number;
          const article = articles[parsedNumber - 1];

          if (article) {
            window.open(article.url, '_blank');
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ScrollUp />
      <NewsCards theArticles={newsArticles} activeArticle={activeArticle} />
      <Footer />
    </div>
  )
}