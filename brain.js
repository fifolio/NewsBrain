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
        p.play(`Here are the (latest|recent) ${p.source.value}. news`);
    });
});
