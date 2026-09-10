# Training Tool

A small static web app for practicing question/answer material.

## Running it in Visual Studio

The easiest local test is to open `index.html` directly in a browser.

To edit the training material, open `questions.js`.

Each item looks like: 

{
    group: "Group 1",
    question: "What color is an apple?",
    answer: "An apple is red, yellow, or green.",
    obscured: "An apple is [red], [yellow], or [green]."
}

Square brackets in `obscured` mark the words that should be hidden.

## Publishing for free

This is a static site, so it can be hosted by GitHub Pages without a server or database.

Important: GitHub Pages sites are publicly accessible. Do not put children's names, personal information, passwords, or other sensitive information in this project.
