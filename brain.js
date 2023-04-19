const API_KEY = '9e16f4adeeea43fbb80f8684be2986e6';
let savedArticles = [];

// News by source
intent(`(Give me | tell me | show me) the news (from | by | on | in) $(source* .+)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
        
    api.axios.get(NEWS_API_URL).then((response)=>{
        let {articles} = response.data;
        if(!articles.length){
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        
      savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) (from | by | on | in) ${p.source.value}`);
        
        p.play(`Would you like me to read the headlines?`);
        p.then(confirmation);
    });
});

// News by Term
intent(`What's up with $(term* .+)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;
    
    if(p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`
    }
        
    api.axios.get(NEWS_API_URL).then((response)=>{
        let {articles} = response.data;
        if(!articles.length){
            p.play('Sorry, please try searching for something else.');
            return;
        }
        
      savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) articles (from | by | on | in) ${p.term.value}`);
        
        p.play(`Would you like me to read the headlines?`);
        p.then(confirmation);
    });
});

// News by Category
const categories = ['business','entertainment','general','health','science','sports','technology'];
const categories_intent = `${categories.map((category) => `${category}~${category}`).join('|')}|`;

intent(`show me $(categories~ ${categories_intent}) (news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.categories.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.categories.value}`
    }
        
    api.axios.get(NEWS_API_URL).then((response)=>{
        let {articles} = response.data;
        if(!articles.length){
            p.play('Sorry, please try searching for a different category.');
            return;
        }
        
      savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        if(p.categories.value) {
         p.play(`Here are the (latest|recent) posts (from | by | on | in) ${p.categories.value}`);
          } else {
         p.play(`Here are the (latest|recent) news`);
          }
        
        p.play(`Would you like me to read the headlines?`);
        p.then(confirmation);
    });
});

// Latest|recent news
intent(`Give me the (latest|recent) news`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;
           
    api.axios.get(NEWS_API_URL).then((response)=>{
        let {articles} = response.data;
        if(!articles.length){
            p.play(`Sorry, I couldm't catch that, please try again.`);
            return;
        }
        
      savedArticles = articles;
     
        p.play({ command: 'newHeadlines', articles });
        if(articles) {
         p.play(`Here are the (latest|recent) news`);
          }
        
        p.play(`Would you like me to read the headlines?`);
        p.then(confirmation);
    });
});

const confirmation = context(() => {
    intent(`(Yes|Sure|Yes Please|Please|Go Ahead|Do it|Why not)`, async (p) => {
        for(let i = 0; i < savedArticles.length; i++){
            p.play({command: 'highlight', article: savedArticles[i]});
            p.play(`${savedArticles[i].title}`)
        }
    })
    
    intent(`(No|Nope|Don't|No Please)`, (p) => {
        p.play(`Sure! sounds good to me.`)
    })
})