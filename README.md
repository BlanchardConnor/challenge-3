# Challenge-3 | Random Password Generator
 - - - -

 ## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
- - - -

### Description
This is a randomized password generator coded using JavaScript.

### Tasks Completed
* Checked to make sure the eventListener was working properly.
* Created a prompt for when the eventListener was called.
* Asked questions through several other prompts in order to gain information regarding the password criteria.
* Created pseudocode in the JS file that made fulfilling my goals and criteria more organized and simpler to acheive.

### Usage
Once the link is deployed, the user will be brought to the site. When the user clicks the "Generate Password" button, they will be prompted to create a randomized password. The user will click, "OK". After this, there will be several other confirmation prompts going through each general criteria for a password. When prompted to enter the number of characters, the user is required to enter a NUMBER between 8-128. If this requirement is not met, the user will have to start over. When the user is finished going through each prompt, the generated password will appear in the container below.

- - - - 
<p align = "center">
<img src = "../challenge-3/assets/Screenshot 2023-04-10 001004.png">
</p>

- - - -

### Provided Links
* [Deployed Site]
* [Repository Link]

[Deployed Site]:
[Repository Link]: https://github.com/BlanchardConnor/challenge-3-Randomized-Password-Generator

### Credits
Human collaborators throughout this challenge included the instructional personel and TA's within the Spring/Summer 2023 KU Coding Bootcamp, as well as students in study groups outside of class.

### Other Guides/Sources
* https://www.youtube.com/watch?v=m5XF1OQ6rSg
* https://www.youtube.com/watch?v=x4HUaiazDes
* https://www.w3schools.com/jsref/jsref_parseint.asp
* https://www.w3schools.com/js/js_functions.asp
* https://www.w3schools.com/js/js_if_else.asp
* https://www.w3schools.com/js/js_loop_for.asp
* https://www.w3schools.com/js/js_random.asp
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function