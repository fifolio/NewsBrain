const API_KEY = '9e16f4adeeea43fbb80f8684be2986e6';
let savedArticles = [];

// News by source
intent(`(Give me | tell me | show me) the news (from | by | on | in) $(source* .+)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
        
    api.request(NEWS_API_URL, {headers: {"user-agent": 'user agent' }}, (error, response, body) => {
    const { totalResults, articles } = JSON.parse(body);
    
    if(totalResults == 0) {
        p.play('Sorry, please try searching for news from a different source');
        return;
    }
        
      savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) (from | by | on | in) ${p.source.value}`);
    });
});
