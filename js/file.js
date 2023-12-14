var element = document.getElementById('quote');
var btn = document.getElementById('btn');
var current, previous,iterrate = 0;
var random_quotes = {
    1: "“Be the change that you wish to see in the world.” — Mahatma Gandhi",
    2: "“The only way to do great work is to love what you do.” — Steve Jobs",
    3: "“In three words I can sum up everything I've learned about life: it goes on.” — Robert Frost",
    4: "“The purpose of our lives is to be happy.” — Dalai Lama",
    5: "“Life is what happens when you're busy making other plans.” — John Lennon",
    6: "“You have within you right now, everything you need to deal with whatever the world can throw at you.” — Brian Tracy",
    7: "“Success is not final, failure is not fatal: It is the courage to continue that counts.” — Winston Churchill",
    8: "“The only limit to our realization of tomorrow will be our doubts of today.” — Franklin D. Roosevelt",
    9: "“Do not wait to strike till the iron is hot, but make it hot by striking.” — William Butler Yeats",
    10: "“Believe you can and you're halfway there.” — Theodore Roosevelt",
    11: "“The only person you are destined to become is the person you decide to be.” — Ralph Waldo Emerson",
    12: "“You miss 100% of the shots you don't take.” — Wayne Gretzky",
    13: "“The future belongs to those who believe in the beauty of their dreams.” — Eleanor Roosevelt",
    14: "“Don't cry because it's over, smile because it happened.” — Dr. Seuss",
    15: "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.” — Mark Twain",
    16: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” — Ralph Waldo Emerson",
    17: "“Success is stumbling from failure to failure with no loss of enthusiasm.” — Winston S. Churchill",
    18: "“It is never too late to be what you might have been.” — George Eliot",
    19: "“I find that the harder I work, the more luck I seem to have.” — Thomas Jefferson",
    20: "“If you want to lift yourself up, lift up someone else.” — Booker T. Washington",
    21: "“The best way to predict the future is to create it.” — Peter Drucker",
    22: "“Don't watch the clock; do what it does. Keep going.” — Sam Levenson",
    23: "“If you're going through hell, keep going.” — Winston S. Churchill",
    24: "“Don't count the days, make the days count.” — Muhammad Ali",
    25: "“The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.” — Jordan Belfort",
    26: "“Your time is limited, don't waste it living someone else's life.” — Steve Jobs",
    27: "“The best revenge is massive success.” — Frank Sinatra",
    28: "“What lies behind us and what lies before us are tiny matters compared to what lies within us.” — Ralph Waldo Emerson",
    29: "“Success usually comes to those who are too busy to be looking for it.” — Henry David Thoreau",
    30: "“The only way to achieve the impossible is to believe it is possible.” — Charles Kingsleigh"
};


function getRandomArbitrary(min, max)
{
    //check if the previous random number is diffrute from the current number
    current = Math.floor(Math.random() * (max - min + 1)) + min;
    if (current !== previous)
    {
        previous = current;
        return current;
    }
    else
    {
        //call the function again 
        return getRandomArbitrary(min, max);
    }
}
// console.log(current)

function arrayLengh(current) {
        for (var key in random_quotes) {
            if (random_quotes.hasOwnProperty(key)) {
                iterrate+=1;  
            }           
        }
        
}
arrayLengh(current);
function generateQuote() {
    var quote = random_quotes[getRandomArbitrary(1, iterrate)];

    if (quote.includes("—")) {

        var formattedString = quote.replace("—", '<br><br>—');

        element.innerHTML = formattedString;
        return formattedString;
    }
    else {

        element.innerHTML = quote;
        return quote;
    }
}

btn.onclick = function () {
    generateQuote();
    console.log(quote);
}