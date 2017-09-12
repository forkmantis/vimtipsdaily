var Twit = require(‘twit’);
var TwitterBot = require(‘node-twitterbot’).TwitterBot;
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ "Practicw {command}s with the aw motion.",
                    "From Insert mode, we can switch to Insert Normal mode by pressing < C-o >",
                    "Use 'o' to go to other end of highlighted text",
                    "At Vim’s command line, the < C-r > < C-w > mapping copies the word under the cursor and inserts it at the command-line prompt.",
                    "Press q: and meet the command-line window",
                    "In Command-Line mode, we can use the < C-f > mapping to switch to the command-line window.",
                    "Use :write !{ cmd} to use the contents of the buffer as standard input for the specified {cmd}",
                    "Use the argdo: command",
                    "Use the :source command to execute the batch.vim script" ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
Bot.tweet(phrase);
