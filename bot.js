var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new Twit({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [ "Practice {command}s with the aw motion. (i.e. daw to delete the word under your cursor)",
                    "From Insert mode, we can switch to Normal mode for one operation by pressing < C-o >",
                    "Use 'o' to toggle to other end of highlighted text. Useful to adjust the starting point of your visual selection",
                    "Use < C-r > < C-w > to copy the word under the cursor and insert it at the command-line prompt.",
                    "Press q: to access command-line window. You can edit your command history like any other text!",
                    "Use < C-f > to switch from Command-Line mode to the command-line window.",
                    "Use :write !{ cmd} to use the contents of the buffer as standard input for the specified {cmd}",
                    "Use the :source command to execute the batch.vim script",
                    "Use the argdo: command on a visual selection to perform the same operation across multiple lines",
                    "Use '{range}: normal {stuff}' to edit multiple lines in a selection",
                    "Use :ls command to list buffers in memory",
                    "In directory view (netrw), create a new file with '%'",
                    "In directory view (netrw), create a new directory with 'd'",
                    "Use ':write !{cmd}' to pipe buffer as input into the specified command",
                    "Use 'e' to move to the end of the next word, and 'ge' to the end of the previous word",
                    "use a /search as the motion for some other command, like delete (d/search<C-R>)"];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray);
Bot.post('statuses/update', { status: phrase }, function(err, data, response) {
    console.log(data);
});
