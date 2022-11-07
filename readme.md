## Blue card Berlin – Termin script automation for Ausländerbehörde

Script for automation of getting a termin / booking on https://otv.verwalt-berlin.de

Script doesn't book anything for you - it just helps to find an open slot by attempting to register every 2 min and leaves the browser open so you can continue the process in the same window. 

You will receive a notification when you have possible a hit so it's probably good to allow notification from system settings. Also telegram notifications are available but you need to setup keys on your own unfortunately. 

### Setup

1. Install chromedriver `brew install --cask chromedriver`
2. Install local packages `npm i`

### Config

Create `.env` file from `.env.example` and fill variables you want script to run with. Values there are text representation of select options on a website.

But of-course since the script is only targeted for 2 people living together, I suppose there is no much you can do there except from nationality changes.

### Run

To run execute: `npm start`

There are can be a lot of false positives, that's why you need to keep an eye on console to check why execution stopped and restart again if
needed.

It should send 2 type of notifications when program terminates:

- the one when unexpected error happens
- the other one is possible success
