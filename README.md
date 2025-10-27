# DueIt

CodePath WEB103 Final Project

Designed and developed by:

- Justin Dingeman
- Subhan Tariq
- George Munoz

🔗 Link to deployed app:

## About

### Description and Purpose

An online task management board where users can create and organize team tasks.

### Inspiration

Trello, Asana

## Tech Stack

Frontend:

- React

Backend:

- PostgreSQL

## Features
- Color Coded - Users can quickly see a task's priority by its color
- Secure Board Assignment - Admins can provide codes to users to ensure they access only the board(s)
  to which they've been assigned
- Task Metrics - Users can see statistics on on-time task completion, and Admins can see statistics on entire teams
- HELP WANTED Flag - Users can flag their tasks when they need some extra help to complete it
- Task History - Users can see the history of who's been assigned and unassigned from a task
- Quick Tasks - Users can add a quick task on the board if don't have time to write down the full details yet

### User Accounts

A user is able to sign into **DueIt** using a sign up code that allows the user
to enroll into their team's task management board. Only users who have signed up
with the code can access the associated code's board (e.g. signing up with the
board code for the HR department will allow the user to access the HR department
board).

<!-- [gif goes here] -->

### Task Creation and Organization

A user is able to create a task that anyone in their board team can view. Any of
the members can assign themselves to the task, as well as move the task into
different lifetime stages (e.g. New, In Progress, Complete)

<!-- [gif goes here] -->

### Quick Action Menu

A user is able to perform tasks via a quick action menu that is always present
on screen. This includes the ability to create quick task, navigate to their
assigned tasks, and view the task board summary.

<!-- [gif goes here] -->

<!-- ### [ADDITIONAL FEATURES GO HERE - ADD ALL FEATURES HERE IN THE FORMAT ABOVE; you will check these off and add gifs as you complete them] -->

## Installation Instructions

<!-- [instructions go here] -->

1. Clone the project

```
git clone https://github.com/GCadel/web103_finalproject.git
```

2. In one terminal, navigate to the project root > `client'. Run the following

```
$ npm i

$ npm run dev
```

3. In another terminal, navigate to the project root > `server'. Run the
   following

```
$ npm i

$ npm run start
```

4. Open a browser to `http://localhost:5173`
