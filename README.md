# Tic-Tac-Toe

## 1. Project Overview

**Tic Tac Toe** is a simple two-player browser-based game developed using **HTML, CSS, and JavaScript**.

The game provides a 3×3 grid where two players take turns placing **X** and **O**. The first player to complete a row, column, or diagonal with the same symbol wins the game.

The project is designed as a beginner-friendly web development project to demonstrate HTML structure, CSS styling, JavaScript DOM manipulation, event handling, game logic, and score management.


## 2. Objective

The main objectives of this project are:

* Create a functional Tic Tac Toe game for two players.
* Implement game logic using JavaScript.
* Provide a simple and easy-to-use interface.
* Detect winning combinations automatically.
* Detect draw conditions.
* Maintain the score of both players.
* Allow players to restart the current game.
* Provide a New Game option to start again.



## 3. Target Users

The application is designed for:

* Students learning HTML, CSS, and JavaScript.
* Beginners learning JavaScript game logic.
* Users who want to play a simple two-player game in a browser.



## 4. Technology Stack

| Technology  | Purpose                              |
| ----------- | ------------------------------------ |
| HTML        | Structure of the game interface      |
| CSS         | Styling and layout                   |
| JavaScript  | Game logic and user interaction      |
| Browser DOM | Accessing and updating game elements |



## 5. Core Features

### 5.1 3×3 Game Board

The game contains a 3×3 grid consisting of nine playable boxes.

Players can click on an empty box to place their symbol.

### 5.2 Two-Player Mode

The game supports two players:

* Player X
* Player O

Players take turns automatically after every valid move.

The current JavaScript implementation starts with **O's turn**.

### 5.3 Turn Management

The game automatically switches the turn between X and O after a valid move.

A box that has already been selected cannot be selected again.

### 5.4 Winner Detection

The game checks all possible winning combinations.

The winning combinations include:

* Three horizontal rows
* Three vertical columns
* Two diagonal combinations

There are **8 possible winning patterns** in total.

### 5.5 Winner Message

When a player wins, the game displays:

```text
X Wins!
```

or

```text
O Wins!
```

The game then stops accepting further moves.

### 5.6 Draw Detection

If all nine boxes are filled and nobody has won, the game displays:

```text
Match Draw
```

The game then ends the current round.

### 5.7 Score Tracking

The application maintains separate scores for:

* Player X
* Player O

When a player wins, their score is increased by one.

### 5.8 Restart Game

The **Restart** button clears the current board and starts another round.

The scores are maintained while the current game board is reset.

### 5.9 New Game

The **New Game** button resets the current board and allows the players to start a fresh round.



## 6. Functional Requirements

### FR-01: Board Interaction

The system shall allow a player to select an empty cell.

### FR-02: Prevent Duplicate Moves

The system shall prevent a player from changing a cell that has already been selected.

### FR-03: Turn Switching

The system shall automatically switch between X and O after every valid move.

### FR-04: Winner Validation

The system shall check the board after every move to determine whether a player has won.

### FR-05: Draw Validation

The system shall identify a draw when all cells are filled without a winner.

### FR-06: Score Update

The system shall increase the winning player's score after a successful win.

### FR-07: Game Completion

After a win or draw, the system shall prevent additional moves until the game is restarted.

### FR-08: Game Reset

The system shall clear the board and reset the game state when Restart or New Game is selected.



## 7. Game Logic

The game follows this basic flow:

```text
Start Game
     ↓
Player O's Turn
     ↓
Player Selects Empty Cell
     ↓
Place O / X
     ↓
Check Winner
     ↓
Winner?
 ┌───┴────┐
Yes       No
 ↓         ↓
Update    Check
Score     Board
 ↓         ↓
Game      Board Full?
Over    ┌───┴────┐
        Yes      No
         ↓        ↓
       Draw    Switch Turn
                  ↓
             Continue Game




## 8. Winning Logic

The application checks the following combinations:

```text
[0, 1, 2]
[3, 4, 5]
[6, 7, 8]

[0, 3, 6]
[1, 4, 7]
[2, 5, 8]

[0, 4, 8]
[2, 4, 6]
```

These represent the three rows, three columns, and two diagonals of the 3×3 board.

---

## 9. User Interface Requirements

The interface should provide:

* Game title
* 3×3 game board
* Player score section
* Restart button
* New Game button
* Winner/Draw message

## The current CSS uses a centered 3×3 layout with styled game boxes, score section, buttons, and winner message.

## 10. Game States

The game can exist in the following states:

### Initial State

* Board is empty.
* O starts the game.
* Scores are initialized.

### Playing State

* Players take turns.
* Empty cells can be selected.
* Winner is checked after every move.

### Win State

* Winner is displayed.
* Winning player's score is increased.
* Further moves are disabled.

### Draw State

* "Match Draw" is displayed.
* Further moves are disabled.

### Reset State

* Board is cleared.
* Turn is reset.
* Game can start again.



## 11. Project Structure

Recommended project structure:

```text
tic-tac-toe/
│
├── index.html
├── style.css
├── code.js
│
├── assets/
│   └── images/
│
├── screenshots/
│   └── game.png
│
└── README.md
```


## 12. Future Enhancements

The current version is a basic two-player game. Future versions may include:

* Single-player mode
* AI opponent
* Difficulty levels
* Responsive mobile design
* Player name input
* Sound effects
* Winning animation
* Highlighting the winning combination
* Game history
* Persistent score using Local Storage
* Dark/Light mode
* Online multiplayer



## 13. Non-Functional Requirements

### Usability

The game should be simple enough for a user to understand without instructions.

### Performance

Game interactions should respond immediately to user clicks.

### Compatibility

The application should work in modern web browsers.

### Maintainability

HTML, CSS, and JavaScript should remain separated into their respective files for easier development and maintenance.



## 14. Success Criteria

The project will be considered successful when:

* A user can start a game.
* Players can place X and O correctly.
* Turns switch correctly.
* Winning combinations are detected.
* Draws are detected.
* Scores are updated correctly.
* Restart and New Game work correctly.
* The game prevents moves after the round is finished.



## 15. Project Scope

### Included

* Two-player Tic Tac Toe
* 3×3 board
* X/O turn management
* Winner detection
* Draw detection
* Score tracking
* Restart functionality
* New Game functionality
* Browser-based interface

### Not Included in Current Version

* AI opponent
* Online multiplayer
* Backend
* Database
* User authentication
* Online leaderboard
* Real-time multiplayer



## 16. Conclusion

Tic Tac Toe is a beginner-friendly web application that demonstrates the practical use of **HTML, CSS, and JavaScript**.

The project focuses on DOM manipulation, event handling, conditional logic, arrays, functions, game-state management, and interactive UI development.

The application provides a foundation that can later be extended with AI, multiplayer functionality, animations, persistent data, and other advanced features.
