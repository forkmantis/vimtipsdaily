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
                    "Use a /search as the motion for some other command, like delete (d/search<C-R>)",
                    "Use `` to jump to snap back to where you were before your last jump (or '' to jump to the last line)",
                    "Use ( and ) to jump to the beginning and end of sentences.",
                    "Use gf to jump to the file name under the cursor. https://vimhelp.appspot.com/editing.txt.html#gf",
                    "Use :changes to see the change list.  Use g; and g, to jump to the locations of the changes.",
                    "Use m{capital letter} to make a global mark. Close and reopen VIm, and press '{capital letter} to open the file w/ the global mark."
                    ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray);
Bot.post('statuses/update', { status: phrase }, function(err, data, response) {
    console.log(data);
});
