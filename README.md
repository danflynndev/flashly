# Welcome to Flashly, the flash card study app!

## Table of Contents

remember how to do this

## My goals for this project

- Practice React fundamental concepts
  - Creating and rendering component modules
  - Passing and using props & state
  - Work with Function components and hooks
- Brush up on JS methods by building the study materials
- Provide an interactive resource for other learners

## Thought Processes / Methodologies used

- React Concepts 
  - Separation of logic & presentation components
  - Patterns
    - Child updates parent to change sibling state (arrow button -> flashcard)

## What I learned

- cannot make updates to state during render method
- dynamically generate variables using eval()
- how to use logpoints in debugging
- formatting multiline commit messages for GitHub
- Fisher-Yates shuffle algo from this SO thread: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
- React Hooks 
  - updating state based on change in props is accomplished through the useEffect hook
    - doing so requires a dependency array supplied as the second argument (if calling setState), otherwise an infinite loop is created
- More React
  - components inside a map() call (or other lists of components) require unique keys to rule out potential issues when updating the DOM; the keys must be unique among siblings but do not need to be globally unique; index makes a poor replacement for an id field (can be used if order will never change)
  - importing CSS to component files is enabled by and specific to Webpack. Doing so reduces flexibility to migrate to other build tools.
  - cannot access props.key. must pass value as a different prop to use
- CSS odds and ends
  - Event has property currentTarget: always refers to element that registers the event listener, not child nodes. Useful for lists.

## Areas of improvement

## Features to add

- Generate arbitrary Categories and Answer fields from JSON for customizable study decks
- Alternate color themes & theme picker
  - User can assign different themes to different decks
- User tracking to save decks and customizations
- custom deck builder with form inputs, rather than a .json file
  - usable by anyone, not just techies