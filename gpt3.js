const OpenAI = require('openai-api');
const OPEN_AI_API_KEY = process.env.API_KEY
const openai = new OpenAI(OPEN_AI_API_KEY);
require('dotenv').config()
const inp = 
`Q: What is the shortest Wikipedia path from Apple Inc. to Charlie Brown?
A: Apple Inc -> Peanuts -> Charlie Brown
###
Q: What is the shortest Wikipedia path from Lobster to Carbon Nanotube?
A: Lobster -> Hare -> Moon -> Carbon Nanotube
###
Q: What is the shortest Wikipedia path from Black Hole to Ice Cream?
A:`
;


(async () => {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        maxTokens: 400,
        prompt: inp,
        temperature: 0,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ["###"]
    });
    console.log(inp)
    console.log(gptResponse.data.choices[0].text);
})();
        