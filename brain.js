const API_KEY = 'ADD_YOU_API_KEY_HERE';
let savedArticles = [];

intent('What is your name', (p) => {
p.play("As an AI language model, I don't have a name, but you can call me Brain!")
})

intent('(Where are you from | Where are you from Brain)', (p) => {
p.play("I was created by fifolio 'who developed me', so you could say I'm from the digital world!")
})

intent('(What do you do for work or study | What do you do)', (p) => {
p.play(" my 'work' is to assist and communicate with humans. I was trained on a diverse range to improve my Brain skills.")
})

intent('What are your (hobbies | interests)', (p) => {
p.play("I don't have any hobbies or interests like humans do, but I enjoy learning new things and helping people with their questions and tasks.")
})

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
        p.play(`Hold on for a moment and I will provide you with the $(source) articles you asked for..`)
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
        p.play('Please give me a moment and I will provide you with the articles you asking for..')
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
         p.play('Sure, please give me a sec. and I will provide you with the articles you asking for..')
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
intent(`(Give me | tell me | show me) the (latest|recent) news`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=us`;
           
    api.axios.get(NEWS_API_URL).then((response)=>{
        let {articles} = response.data;
        if(!articles.length){
            p.play(`Sorry, I couldm't catch that, please try again.`);
            return;
        }
        
      savedArticles = articles;
     
         p.play('Please give me a moment so I provide you with the articles you asking for..')
        p.play({ command: 'newHeadlines', articles });
        if(articles) {
         p.play(`Here are the (latest|recent) news`);
          }
        
        p.play(`Would you like me to read the headlines?`);
        p.then(confirmation);
    })
})

const confirmation = context(() => {
    intent(`(Yes|Sure|Yes Please|Please|Go Ahead|Do it|Why not)`, async (p) => {
        p.play(`Alright!`)
        for(let i = 0; i < savedArticles.length; i++){
            p.play({command: 'highlight', article: savedArticles[i]});
            p.play(`${savedArticles[i].title}`)
        }
    })
    
    intent(`(No|Nope|Don't|No Please)`, (p) => {
        p.play(`Sure! sounds good to me.`)
    })
})

intent(`open (the|) (article|) (number|) $(number* (.*))`, (p) => {
    
    if(p.number.value) {
    p.play(`Okay! here's article ${p.number.value}`) 
    p.play({ command:'open', number: p.number.value, articles: savedArticles})
}
})


intent(`go back`, (p) => {
    p.play('Sure, going back');
    p.play({command: 'newHeadlines', articles: []})
})

