const fillIns = require('./fill_in_words.js');
//Possible beggining of quote
let starters = [
    '',
    'Those that verb in time must verb. But those who verb are forever adj. ',
    'It is the fool that finds himself adj. ',
    'Fret not the adj. ',
    'Only the blind cannot see the folly in those who verb. ',
    'The adj can verb, but the adj can verb. '
];

//Possible end of quote
let enders = [
    '',
    'Be among the adj.',
    'Know that only those who verb are truely adj.',
    'Seek the adj.',
    'The adj can never overcome the adj.',
    'To verb is to be among the adj.'
];

//creates template which contains the quote outline
//and info about vacancies
const templateFactory = (str) => {
    str = str.split(' ');
    blankSpots = [];
    let subStr = '';
    let regV = /verb/;
    let regA = /adj/;
    for(let i = 0; i < str.length; i++){
        //console.log(str[i]);
        let endPunct = '';
        if(str[i].match(regV)){
            if(str[i] != 'verb'){
                let len = str[i].length;
                endPunct = str[i].substring(len-1,len);
                /*
                console.log('--------------------');
                console.log(`len-1 = ${len-1}`);
                console.log(`len = ${len}`);
                console.log('--------------------');
                */
            }
            blankSpots.push(blankSpotFactory(i,'verb', endPunct));
        }
        if(str[i].match(regA)){
            if(str[i] != 'adj'){
                let len = str[i].length;
                endPunct = str[i].substring(len-1,len);
                /*
                console.log('--------------------');
                console.log(`len-1 = ${len-1}`);
                console.log(`len = ${len}`);
                console.log('--------------------');
                */
            }
            blankSpots.push(blankSpotFactory(i,'adj', endPunct));
        }
    }
    return {
        wordArray:  str,
        blankSpots: blankSpots,
    };
}





//creates blank spot detailing its location  
//the type of word that must fill the vacancy
const blankSpotFactory = (num, str1, str2) => {
    console.log(str2);

    if(str1 === 'adj' ||  str1 === 'verb'){
        return {
            index: num,
            typeOfWord: str1,
            endPunct: str2,
        }
    }
    else{
        console.log('Error: invalid word type entered')
    }
}



//Randomly creates a string with either only a starter, 
//only an ender, or a starter and an ender
let joinStartAndEnd = () => {
    let start = starters[Math.floor(Math.random() * 6)];
    let end = enders[Math.floor(Math.random() * 6)];
    if(!start && !end){
        return 'You are beyond help.';
    }
    return start.concat(end);
}

const getFullQuote = () => { 
    let template = templateFactory(joinStartAndEnd());
    for(let i = 0; i < template.blankSpots.length; i++){
        let type = template.blankSpots[i].typeOfWord;
        let index = template.blankSpots[i].index;
        if(type === 'adj'){
            let randomAdj = fillIns.adj[Math.floor(Math.random() * fillIns.adj.length)].toLowerCase();
            randomAdj += template.blankSpots[i].endPunct;
            //console.log(template.blankSpots[i].endPunct);
            template.wordArray[index] = randomAdj;
        }
        if(type === 'verb'){
            let randomVerb = fillIns.allVerbs[Math.floor(Math.random() * fillIns.allVerbs.length)].toLowerCase();
            randomVerb += template.blankSpots[i].endPunct;
            //console.log(template.blankSpots[i].endPunct);
            template.wordArray[index] = randomVerb;
        }
    }

    let result = '';
    for(let i = 0; i < template.wordArray.length; i++){
        result = result +  template.wordArray[i] + " " ;
    }    
    return result;
}

exports.templateFactory = templateFactory;
exports.blankSpotFactory = blankSpotFactory;
exports.joinStartAndEnd = joinStartAndEnd;
exports.getFullQuote = getFullQuote;
exports.starters = starters;
exports.enders = enders;
