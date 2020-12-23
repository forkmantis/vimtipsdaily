var env = require('dotenv').config();
var Twit = require('twit');
var Bot = new Twit({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [
                    /* Tips from Practical VIm Part I. Modes */
                    "Practice {command}s with the aw motion. (i.e. daw to delete the word under your cursor)",
                    "From Insert mode, we can switch to Normal mode for one operation by pressing < C-o >",
                    //"Use <c-a> to increment the next number.  {number}<c-a> adds {number} to the next number.",
                    //"Use <c-x> to decrement the next number.  {number}<c-x> subtracts {number} from the next number.",
                    //"Use 'o' to toggle to other end of highlighted text. Useful to adjust the starting point of your visual selection",
                    "When in command line mode, copy the word under the cursor and insert into the command line using <C-r> <C-w>.",
                    "Press q: to access command-line window. You can edit your command history like any other text!",
                    "Use < C-f > to switch from Command-Line mode to the command-line window.",
                    "Use :write !{ cmd} to use the contents of the buffer as standard input for the specified {cmd}",
                    //"Use the :source command to execute the batch.vim script",
                    "Use the argdo to execute an ex command across all files in the :args list.  i.e., a substitution command",
                    "Use '{range}: normal {stuff}' to edit multiple lines in a selection",
                    //"Use :ls command to list buffers in memory",
                    /* Tips from Practical VIm Part II. Files */
                    //"In directory view (netrw), create a new file with '%'",
                    //"In directory view (netrw), create a new directory with 'd'",
                    //"Use ':write !{cmd}' to pipe buffer as input into the specified command",
                    "Use %:h to get the path part of the current file.  i.e., cd %:h to set the working directory to the directory of the current file.",
                    /* Tips from Practical VIm Part III. Getting Around Faster */
                    "Use 'e' to move to the end of the next word, and 'ge' to the end of the previous word",
                    //"Use a /search as the motion for some other command, like delete (d/search<C-R>)",
                    "Use `` to jump to snap back to where you were before your last jump (or '' to jump to the last line)",
                    "Use ( and ) to jump to the beginning and end of sentences.",
                    "Use gf to jump to the file name under the cursor. https://vimhelp.appspot.com/editing.txt.html#gf",
                    "Use :changes to see the change list.  Use g; and g, to jump to the locations of the changes.",
                    "Use m{capital letter} to make a global mark. Close and reopen VIm, and press '{capital letter} to open the file w/ the global mark.",
                    "The 0 register will contain your most recent yank, even if you have deleted after yanking. Yank a word, delete a different word, then type \"0p to put the yanked word.",
                    /* Tips from Practical VIm Part IV. Registers */
                    "Delete using the \"_d{motion} command to delete without overwriting your default register.",
                    //"Use the \"+ register to interact with the system clipboard. I.e., \"+p to put system clipboard into your current buffer.",
                    "Put from the \"% register to put the name of the current file.",
                    "Put from the \"# register to put the name of the alternate file (the most recent other file edited in the current buffer).",
                    "Put from the \": register to put the most recently executed EX command.",
                    //"Put from the \"/ register to put the last search pattern used.",
                    "In insert mode, put the contents of the default register with <c-r>\".",
                    "Use gP and gp to put before or after the current line, and place cursor below the pasted line.",
                    "Use :reg to view the contents of all registers, or :reg{register} to view the contents of one.",
                    "Use 10@a to play the macro saved in register a 10 times.",
                    "Use :normal @a to play the macro saved in register a on every line in the selection.",
                    "Use qA to append keystrokes to the macro in register a.",
                    "Use :edit! to revert all changes to the current buffer",
                    //"Use :wall to save changes to all files in the buffer list.",
                    "Use 'var += 1' in a macro to make a numbered list.  let i = 1<CR> qa I<C-r>=i<CR>) <Esc>:let i += 1<CR> j q", // Tip 71
                    "Edit a macro by putting it's register into your buffer, editing, then yanking it back to its regsiter. \"ap, [edit], \"add.",
                    /* Tips from Practical VIm Part V. Patterns */
                    "Use \"\\_s\" to search for whitespace or a linebreak. Compare to searching for \\s to see the difference.",
                    "Use \\zs and \\ze to delimit the visible or selected part of a match.",
                    /*TODO: "Use the escape({string}, {chars}) function to escape characters - tip 79",*/
                    "In character-wise visual selection mode, use gn to extend your selection to the next occurrance of the most recent search pattern.",
                    "Use ea to append to the end of the current word.",
                    "Append '/e' to the end of a search to place the cursor at the end of the next match.  I.e. /search phrase/e",
                    /*TODO: "use gUgn to capitalize the next search match.",*/
                    "To wrap text in, say, parens, use c{motion}(<C-r>\"). Change copies to default buffer, and in Insert mode, <C-r>\" pastes from the default buffer.",
                    "Use :%s///gn to count the matches of your most recent search.",
                    "Use :vimgrep /{search phrase}/g % to populate the quickfix list with each match in the current buffer, which can be navigated with :cnext or :cprev.",
                    /* My own tips */
                    "Use :marks to list marks.",
                    "In insert mode, type the first few characters of a word, then press <C-n> or <C-p> to autocomplete with the next or previous matching word",
                    /* Random stuff I ran across and added */
                    "In insert mode, use <C-w> to delete from the begining of the word at the cursor to the front of the cursor position",
                    "Use yHP to yank from the current line to the top of the screen and PUT above the top of the screen.",
                    "Use :2,3co. to copy lines 2 and 3 and PUT it below the current line. Use :help :co for more info",
                    "Use '&' to repeat your last substitution on the current line.  Use 'g&' to repeat the last substitution on all lines.",
                    "Open VIm directly to the first occurrence of a search term with `vim +/searchterm filename`",
                    "Repeat your most recent search/replace on the current line by pressing &",
                    "Use a relative range to perform a substitution.  i.e. -3,-1s#a#X#g to replace all instances of 'a' w/ 'X' from from 3 lines to 1 line above the cursor.",
                    "Execute a command on a series of lines matching a pattern, i.e. ':g/aaa/y A' to yank all lines matching 'aaa' into the register. https://vim.fandom.com/wiki/Power_of_g",
                    "Execute a command on a series of lines not matching a pattern, i.e. ':v/aaa/d' to delete all lines not containing 'aaa'. https://vim.fandom.com/wiki/Power_of_g",
                    "Select a column of numbers, and use g<C-a> to increment them as a set",
                    "Delete without overwriting your last yank using the black hole register (_). i.e., Delete a word w/ \"_daw, then put the last value in your default register",
                    "Delete a sentence using 'das' with the cursor anywhere in the sentence.  Change a sentence using 'cas'",
                    "Use z+, zz or z- to redraw the screen with the cursor at the top, middle, or bottom of the screen respectively",
                    "use :help help to learn how to use VIm's robust help system",
                    "During the '/' portion of a search, type <C-f> to open a search history window",
                    "Use :bd to close a buffer without closing VIm.  Use :bd! to close without saving changes.",
                    "Use gU{motion} to make everything in the {motion} uppercase.  I.e. gUaw to make the word under the cursor uppercase.",
                    "Navigate to the beginning or end of your most recently yanked or changed text using `[ or `] respectively",
                    "Navigate to the beginning or end of your most recent visual selection text using `< or `> respectively",
                    "Put from the \"+ register to put from the system clipboard.",
                    "Use your most recent yank/delete in insert mode.  For example, press / to search, then <C-r>\" as your search pattern",
                    "Open the last edited file on the machine with cursor on the latest location by pressing <C-o><C-o>",
                    "Limit a search and replace operation between lines matching 2 regex patterns using /pattern1/,/pattern2/s/search/replace/",
                    "Select a visual block using <C-v>{motion}, and insert some text at the beginning of the each line of the block using I{text}<Esc>",
                    "Use the ex command 'j' to join some lines on a range, i.e. :1,5j",
                    "Visually select some lines, and save them to a new file with the command :w path/to/new/file",
                ];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray);
Bot.post('statuses/update', { status: phrase }, function(err, data, response) {
    console.log(data);
});
