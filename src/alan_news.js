// Use this sample to create your own voice commands
intent('what do you do?', (p) => {
    p.play('(Iam a fucking AI)');
});

intent('Start command',(p)=>{
    p.play({command : 'test-command'});
})

let ARTICLES = [];

const NEWS_API_KEY = 'ada1db8769474b488b49087e4d517e0d';

//News by sources
intent('(Give|Get|Bring|Fetch|) (me|) (the|) (latest|) (news|) (from|on|) $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;
    if(p.source.value){
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(' ').join('-')}`;
    }
    else{
        p.play("Sorry, I cannot understand.");
        return;
    }
    p.play({command:'newHeadlines',url: NEWS_API_URL,source:p.source.value});
    
    projectAPI.read = function(p,param,callback){
        if(param.data){
            ARTICLES = param.data;
            p.play('Would you like me to read the headlines?');
            p.then(confirmation);
        }
        callback();
    }
    
})

//Any news by terms
intent('(What|Whats|Give) (are|up|me) (the|with) (news|) (on|of) $(term* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`;
    if(p.term.value){
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value.toLowerCase().split(' ').join()}`;
    }
    else{
        p.play("Sorry, I cannot understand.");
        return;
    }
    p.play({command:'newHeadlines',url: NEWS_API_URL,term:p.term.value});
    
    projectAPI.read = function(p,param,callback){
        if(param.data){
            ARTICLES = param.data;
            p.play('Would you like me to read the headlines?');
            p.then(confirmation);
        }
        callback();
    }

})

//Search by Categories

const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}|`;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
    
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&country=us`;
    
    if(p.C.value){
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`;
    }
    else{
        p.play("Sorry, I cannot understand.");
        return;
    }
    p.play({command:'newHeadlines',url: NEWS_API_URL,category:p.C.value});
    
    projectAPI.read = function(p,param,callback){
        if(param.data){
            ARTICLES = param.data;
            p.play('Would you like me to read the headlines?');
            p.then(confirmation);
        }
        callback();
    }
    
})

intent('open (the|) (article|) (number|) $(number* (.*))', (p) => {
    if(p.number.value) {
        p.play({ command:'open', number: p.number.value, articles: ARTICLES})
    }
})

const confirmation = context(() => {
    intent('yes',async  (p) => {
        for(let i = 0; i < ARTICLES.length; i++){
            if(i === 5){
                p.play("If you want to stop me, please press the Alan button.")
            }
            p.play({ command: 'read-headline', activeId:i});
            p.play(`${ARTICLES[i].title}`);
        }
    })
    
    intent('no', (p) => {
        p.play('Sure.');
 
    })
})

