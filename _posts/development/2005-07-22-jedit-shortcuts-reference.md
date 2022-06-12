---
id: 1937
title: 'Jedit shortcuts reference'
date: '2005-07-22T20:13:04+02:00'
author: 'Cédric Walter'

guid: 'https://waltercedric.com/new/?p=1937'

---

**Keyboard Shortcuts**

## # id2869496"></a>Files

| **Control**–**N** | New file. |
|---|---|
| **Control**–**O** | Open file. |
| **Control**–**W** | Close buffer. |
| **Control**–**E** **Control**–**W** | Close all buffers. |
| **Control**–**S** | Save buffer. |
| **Control**–**E** **Control**–**S** | Save all buffers. |
| **Control**–**P** | Print buffer. |
| **Control**–**Page Up** | Go to previous buffer. |
| **Control**–**Page Down** | Go to next buffer. |
| **Control**–**`** | Go to recent buffer. |
| **Control**–**Q** | Exit jEdit. |

## # id2870049"></a>Views

| **Control**–**E** **Control**–**T** | Turn gutter (line numbering) on and off. |
|---|---|
| **Control**–**2** | Split view horizontally. |
| **Control**–**3** | Split view vertically. |
| **Control**–**1** | Unsplit. |
| **Alt**–**Page Up** | Send keyboard focus to previous text area. |
| **Alt**–**Page Down** | Send keyboard focus to next text area. |
| **Control**–**E** **Control**–**Up**; **Control**–**Left**; **Control**–**Down**; **Control**–**Right** | Send keyboard focus to top; bottom; left; right docking area. |
| **Control**–**E** **Control**–**`** | Close currently focused docking area. |
| **Control**–**E** **Control**–**E** | Send keyboard focus back to current text area. |

## # id2870479"></a>Repeating

| **Control**–**Enter*<tt>numbercommand</tt>*** | Repeat the command (it can be a keystroke, menu item selection or tool bar click) the specified number of times. |
|---|---|

## # id2870568"></a>Moving the Caret

| ***<tt>Arrow</tt>*** | Move caret one character or line. |
|---|---|
| **Control**–***<tt>Arrow</tt>*** | Move caret one word or paragraph. |
| **Page Up**; **Page Down** | Move caret one screenful. |
| **Home** | First non-whitespace character of line, beginning of line, first visible line (repeated presses). |
| **End** | Last non-whitespace character of line, end of line, last visible line (repeated presses). |
| **Control**–**Home** | Beginning of buffer. |
| **Control**–**End** | End of buffer. |
| **Control**–**\]** | Go to matching bracket. |
| **Control**–**E** **Control**–**\[**; **Control**–**\]** | Go to previous; next bracket. |
| **Control**–**L** | Go to line. |

## # id2870918"></a>Selecting Text

| **Shift**–***<tt>Arrow</tt>*** | Extend selection by one character or line. |
|---|---|
| **Control**–**Shift**–***<tt>Arrow</tt>*** | Extend selection by one word or paragraph. |
| **Shift**–**Page Up**; **Shift**–**Page Down** | Extend selection by one screenful. |
| **Shift**–**Home** | Extend selection to first non-whitespace character of line, beginning of line, first visible line (repeated presses). |
| **Shift**–**End** | Extend selection to last non-whitespace character of line, end of line, last visible line (repeated presses). |
| **Control**–**Shift**–**Home** | Extend selection to beginning of buffer. |
| **Control**–**Shift**–**End** | Extend selection to end of buffer. |
| **Control**–**\[** | Select code block. |
| **Control**–**E** **W**; **L**; **P** | Select word; line; paragraph. |
| **Control**–**E** **Control**–**L** | Select line range. |
| **Control**–**\\** | Switch between single and multiple selection mode. |

## # id2871376"></a>Scrolling

| **Control**–**E** **Control**–**J** | Center current line on screen. |
|---|---|
| **Control**–**E** **Control**–**I** | Center caret on screen. |
| **Control**–**‘**; **Control**–**/** | Scroll up; down one line. |
| **Alt**–**‘**; **Alt**–**/** | Scroll up; down one page. |

## # id2871602"></a>Text Editing

| **Control**–**Z** | Undo. |
|---|---|
| **Control**–**E** **Control**–**Z** | Redo. |
| **Backspace**; **Delete** | Delete character before; after caret. |
| **Control**–**Backspace**; **Control**–**Delete** | Delete word before; after caret. |
| **Control**–**D**; **Control**–**E** **D** | Delete line; paragraph. |
| **Control**–**Shift**–**Backspace**; **Control**–**Shift**–**Delete** | Delete from caret to beginning; end of line. |
| **Control**–**E** **R** | Remove trailing whitespace from the current line (or all selected lines). |
| **Control**–**J** | Join lines. |
| **Control**–**B** | Complete word. |
| **Control**–**E** **F** | Format paragraph (or selection). |

## # id2872057"></a>Clipboard and Registers

| **Control**–**X** or **Shift**–**Delete** | Cut selected text to clipboard. |
|---|---|
| **Control**–**C** or **Control**–**Insert** | Copy selected text to clipboard. |
| **Control**–**E** **Control**–**U** | Append selected text to clipboard, removing it from the buffer. |
| **Control**–**E** **Control**–**A** | Append selected text to clipboard, leaving it in the buffer. |
| **Control**–**V** or **Shift**–**Insert** | Paste clipboard contents. |
| **Control**–**E** **Control**–**P** | Vertical paste clipboard contents. |
| **Control**–**R** **Control**–**X** ***<tt>key</tt>*** | Cut selected text to register *<tt>key</tt>*. |
| **Control**–**R** **Control**–**C** ***<tt>key</tt>*** | Copy selected text to register *<tt>key</tt>*. |
| **Control**–**R** **Control**–**U** ***<tt>key</tt>*** | Append selected text to register *<tt>key</tt>*, removing it from the buffer. |
| **Control**–**R** **Control**–**A** ***<tt>key</tt>*** | Append selected text to register *<tt>key</tt>*, leaving it in the buffer. |
| **Control**–**R** **Control**–**V** ***<tt>key</tt>*** | Paste contents of register *<tt>key</tt>*. |
| **Control**–**R** **Control**–**P** ***<tt>key</tt>*** | Vertically paste contents of register *<tt>key</tt>*. |
| **Control**–**E** **Control**–**V** | Paste previous. |

## # id2872805"></a>Markers

| **Control**–**E** **Control**–**M** | If current line doesn’t contain a marker, one will be added. Otherwise, the existing marker will be removed. Use the **Markers** menu to return to markers added in this manner. |
|---|---|
| **Control**–**T** ***<tt>key</tt>*** | Add marker with shortcut *<tt>key</tt>*. |
| **Control**–**Y** ***<tt>key</tt>*** | Go to marker with shortcut *<tt>key</tt>*. |
| **Control**–**U** ***<tt>key</tt>*** | Select to marker with shortcut *<tt>key</tt>*. |
| **Control**–**K** ***<tt>key</tt>*** | Go to marker with shortcut *<tt>key</tt>*, and move the marker to the previous caret position. |
| **Control**–**E** **Control**–**,**; **Control**–**.** | Move caret to previous; next marker. |

## # id2873162"></a>Search and Replace

| **Control**–**F** | Open search and replace dialog box. |
|---|---|
| **Control**–**G** | Find next. |
| **Control**–**H** | Find previous. |
| **Control**–**E** **Control**–**B** | Search in open buffers. |
| **Control**–**E** **Control**–**D** | Search in directory. |
| **Control**–**E** **Control**–**R** | Replace in selection. |
| **Control**–**E** **Control**–**G** | Replace in selection and find next. |
| **Control**–**,** | Incremental search. |
| **Control**–**.** | Quick HyperSearch. |
| **Alt**–**,** | Incremental search for word under the caret. |
| **Alt**–**.** | Quick HyperSearch for word under the caret. |

## # id2873585"></a>Source Code Editing

| **Control**–**;** | Expand abbreviation. |
|---|---|
| **Alt**–**Left**; **Alt**–**Right** | Shift current line (or all selected lines) left; right. |
| **Shift**–**Tab**; **Tab** | Shift selected lines left; right. Note that pressing **Tab** with no selection active will insert a tab character at the caret position. |
| **Control**–**I** | Indent current line (or all selected lines). |
| **Control**–**E** **Control**–**C** | Wing comment selection. |
| **Control**–**E** **Control**–**B** | Box comment selection. |

## # id2873878"></a>Folding and Narrowing

| **Alt**–**Backspace** | Collapse fold containing caret. |
|---|---|
| **Alt**–**Enter** | Expand fold containing caret one level only. |
| **Alt**–**Shift**–**Enter** | Expand fold containing caret fully. |
| **Control**–**E** **X** | Expand all folds. |
| **Control**–**E** **A** | Add explicit fold. |
| **Control**–**E** **S** | Select fold. |
| **Control**–**E** **Enter** ***<tt>key</tt>*** | Expand folds with level less than *<tt>key</tt>*, collapse all others. |
| **Control**–**E** **N** **N** | Narrow to fold. |
| **Control**–**E** **N** **S** | Narrow to selection. |
| **Alt**–**Up** **Alt**–**Down** | Moves caret to previous; next fold. |
| **Control**–**E** **U** | Moves caret to the fold containing the one at the caret position. |

## # id2874369"></a>Macros

| **Control**–**M** **Control**–**R** | Record macro. |
|---|---|
| **Control**–**M** **Control**–**M** | Record temporary macro. |
| **Control**–**M** **Control**–**S** | Stop recording. |
| **Control**–**M** **Control**–**P** | Run temporary macro. |
| **Control**–**M** **Control**–**L** | Run most recently played or recorded macro. |

## # id2874659"></a>Alternative Shortcuts

A few frequently-used commands have alternative shortcuts intended to help you keep your hands from moving all over the keyboard.

| **Alt**–**J**; **Alt**–**L** | Move caret to previous, next character. |
|---|---|
| **Alt**–**I**; **Alt**–**K** | Move caret up, down one line. |
| **Alt**–**Q**; **Alt**–**A** | Move caret up, down one screenful. |
| **Alt**–**Z** | First non-whitespace character of line, beginning of line, first visible line (repeated presses). |
| **Alt**–**X** | Last non-whitespace character of line, end of line, last visible line (repeated presses). |

### Glob Patterns

jEdit uses glob patterns similar to those in the various Unix shells to implement file name filters in the file system browser. Glob patterns resemble regular expressions somewhat, but have a much simpler syntax. The following character sequences have special meaning within a glob pattern:

- <tt>?</tt> matches any one character
- <tt>\*</tt> matches any number of characters
- <tt>{!</tt>*<tt>glob</tt>*} Matches anything that <span class="emphasis">*does not* match *<tt>glob</tt>*
- <tt>{</tt>*<tt>a</tt>*,*<tt>b</tt>*,*<tt>c</tt>*} matches any one of *<tt>a</tt>*, *<tt>b</tt>* or *<tt>c</tt>*
- <tt>\[</tt>*<tt>abc</tt>*\] matches any character in the set *<tt>a</tt>*, *<tt>b</tt>* or *<tt>c</tt>*
- <tt>\[^</tt>*<tt>abc</tt>*\] matches any character not in the set *<tt>a</tt>*, *<tt>b</tt>* or *<tt>c</tt>*
- <tt>\[</tt>*<tt>a-z</tt>*\] matches any character in the range *<tt>a</tt>* to *<tt>z</tt>*, inclusive. A leading or trailing dash will be interpreted literally

In addition to the above, a number of "character class expressions" may be used as well:

- <tt>\[\[:alnum:\]\]</tt> matches any alphanumeric character
- <tt>\[\[:alpha:\]\]</tt> matches any alphabetical character
- <tt>\[\[:blank:\]\]</tt> matches a space or horizontal tab
- <tt>\[\[:cntrl:\]\]</tt> matches a control character
- <tt>\[\[:digit:\]\]</tt> matches a decimal digit
- <tt>\[\[:graph:\]\]</tt> matches a non-space, non-control character
- <tt>\[\[:lower:\]\]</tt> matches a lowercase letter
- <tt>\[\[:print:\]\]</tt> same as <tt>\[:graph:\]</tt>, but also space and tab
- <tt>\[\[:punct:\]\]</tt> matches a punctuation character
- <tt>\[\[:space:\]\]</tt> matches any whitespace character, including newlines
- <tt>\[\[:upper:\]\]</tt> matches an uppercase letter
- <tt>\[\[:xdigit:\]\]</tt> matches a valid hexadecimal digit

Here are some examples of glob patterns:

- **<tt>\*</tt>** – all files
- **<tt>\*.java</tt>** – all files whose names end with ".java"
- **<tt>\*.{c,h}</tt>** – all files whose names end with either ".c" or ".h"
- **<tt>\*\[^~\]</tt>** – all files whose names do not end with "~"

 **Regular Expressions**

jEdit uses regular expressions to implement inexact search and replace. A regular expression consists of a string where some characters are given special meaning with regard to pattern matching.

Within a regular expression, the following characters have special meaning:

#### # id2875130"></a>Positional Operators

- <tt>^</tt> matches at the beginning of a line
- <tt>$</tt> matches at the end of a line
- <tt>\\b</tt> matches at a word break
- <tt>\\B</tt> matches at a non-word break
- <tt>\\<</tt> matches at the start of a word
- <tt>\\></tt> matches at the end of a word

#### # id2875549"></a>One-Character Operators

- <tt>.</tt> matches any single character
- <tt>\\d</tt> matches any decimal digit
- <tt>\\D</tt> matches any non-digit
- <tt>\\n</tt> matches the newline character
- <tt>\\s</tt> matches any whitespace character
- <tt>\\S</tt> matches any non-whitespace character
- <tt>\\t</tt> matches a horizontal tab character
- <tt>\\w</tt> matches any word (alphanumeric) character
- <tt>\\W</tt> matches any non-word (alphanumeric) character
- <tt>\\\\</tt> matches the backslash ("\\") character

#### # id2875834"></a>Character Class Operator

- <tt>\[</tt>*<tt>abc</tt>*\] matches any character in the set *<tt>a</tt>*, *<tt>b</tt>* or *<tt>c</tt>*
- <tt>\[^</tt>*<tt>abc</tt>*\] matches any character not in the set *<tt>a</tt>*, *<tt>b</tt>* or *<tt>c</tt>*
- <tt>\[</tt>*<tt>a-z</tt>*\] matches any character in the range *<tt>a</tt>* to *<tt>z</tt>*, inclusive. A leading or trailing dash will be interpreted literally
- <tt>\[\[:alnum:\]\]</tt> matches any alphanumeric character
- <tt>\[\[:alpha:\]\]</tt> matches any alphabetical character
- <tt>\[\[:blank:\]\]</tt> matches a space or horizontal tab
- <tt>\[\[:cntrl:\]\]</tt> matches a control character
- <tt>\[\[:digit:\]\]</tt> matches a decimal digit
- <tt>\[\[:graph:\]\]</tt> matches a non-space, non-control character
- <tt>\[\[:lower:\]\]</tt> matches a lowercase letter
- <tt>\[\[:print:\]\]</tt> same as <tt>\[:graph:\]</tt>, but also space and tab
- <tt>\[\[:punct:\]\]</tt> matches a punctuation character
- <tt>\[\[:space:\]\]</tt> matches any whitespace character, including newlines
- <tt>\[\[:upper:\]\]</tt> matches an uppercase letter
- <tt>\[\[:xdigit:\]\]</tt> matches a valid hexadecimal digit

#### # id2876068"></a>Subexpressions and Backreferences

- <tt>(</tt>*<tt>abc</tt>*) matches whatever the expression *<tt>abc</tt>* would match, and saves it as a subexpression. Also used for grouping
- <tt>(?:</tt>*<tt>...</tt>*) pure grouping operator, does not save contents
- <tt>(?#</tt>*<tt>...</tt>*) embedded comment, ignored by engine
- <tt>(?=</tt>*<tt>...</tt>*) positive lookahead; the regular expression will match if the text in the brackets matches, but that text will not be considered part of the match
- <tt>(?!</tt>*<tt>...</tt>*) negative lookahead; the regular expression will match if the text in the brackets does not match, and that text will not be considered part of the match
- <tt>\\</tt>*<tt>n</tt>* where 0 < *<tt>n</tt>* < 10, matches the same thing the *<tt>n</tt>*th subexpression matched. Can only be used in the search string
- <tt>$</tt>*<tt>n</tt>* where 0 < *<tt>n</tt>* < 10, substituted with the text matched by the *<tt>n</tt>*th subexpression. Can only be used in the replacement string

#### # id2876215"></a>Branching (Alternation) Operator

- *<tt>a</tt>*|*<tt>b</tt>* matches whatever the expression *<tt>a</tt>* would match, or whatever the expression *<tt>b</tt>* would match.

#### # id2876253"></a>Repeating Operators

These symbols operate on the previous atomic expression.

- <tt>?</tt> matches the preceding expression or the null string
- <tt>\*</tt> matches the null string or any number of repetitions of the preceding expression
- <tt>+</tt> matches one or more repetitions of the preceding expression
- <tt>{</tt>*<tt>m</tt>*} matches exactly *<tt>m</tt>* repetitions of the one-character expression
- <tt>{</tt>*<tt>m</tt>*,*<tt>n</tt>*} matches between *<tt>m</tt>* and *<tt>n</tt>* repetitions of the preceding expression, inclusive
- <tt>{</tt>*<tt>m</tt>*,} matches *<tt>m</tt>* or more repetitions of the preceding expression

#### # id2876375"></a>Stingy (Minimal) Matching

If a repeating operator (above) is immediately followed by a <tt>?</tt>, the repeating operator will stop at the smallest number of repetitions that can complete the rest of the match.