# Password Generator


## Description

This simple password generator webpage was created for an assignment in my coursework for the Coding Bootcamp at UNC Chapel Hill.

This project challenged me greatly to use and expand my proficiencies with JavaScript functions, loops, methods, and valid syntax in general.

I decided to take some liberties with the exact functionality, as the Acceptance Criteria for the assignment would have had me build this to prompt the user in separate pop=up windows for each Password formatting option, and I thought it would be much nicer and more user-friendly to put all that functionality and collect all user input right from the same page, as well as to write the resulting password back to the same page upon clicking the "Generate Password" button. 

I mentioned this in Office Hours before class last week to both my instructor (David Berzack) and TA (Moses Nester); they both agreed this would be a nicer way to build this page, and said if I wanted to go above and beyond to format it this way, it should be fine with graders.

With this tool in this format, I feel I myself will find it useful for generating passwords in the future.


## Installation

To load and use this Password Generator, simply visit the following URL from any contemporary web browser connected to the internet:




## Usage

I decided to include checkboxes and a number input field right on the page for users to select which character types to incude in the password, and a character length constrained to between 8 and 128 characters, per the Acceptance Criteria. 

To use this tool, the user checks all boxes next to their desired password character types, and enters a Password Length number between 8 and 128. Then, upon clicking the "Generate Password" button, the randomized password is generated according to the desired format and written back to the page in the text area within the dotted border.

If the user fails to select any Character Type, or if they fail to specify a valid Password Length (number of characters), an "Invalid Entry" alert message is written to the page in bold red text, prompting them to validate their selections before clicking the "Generate Password" button.


## Credits

To learn and implement the javascript functionality in this webpage, I referenced the following websites and tutorials extensively:

MDN JavaScript Reference page:

https://developer.mozilla.org/en-US/docs/Web/JavaScript

Programming with Mosh - "Learn JavaScript in 1 Hour":

https://youtu.be/W6NZfCO5SIk

Florin Pop - "concat Array Method" & "join Array Method":

https://youtu.be/PHgeshcXtDc

https://youtu.be/1a2OCwBD-yI

Code Explained - "fromCharCode and fromCodePoint methods":

https://youtu.be/dW3KTXfuSFw

W3 Schools ASCII Character Code Reference:

https://www.w3schools.com/charsets/ref_html_ascii.asp


## License

MIT License

Copyright (c) 2023 Peej D

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.