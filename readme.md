## Blue card Berlin – Termin script automation for Ausländerbehörde

Script for automation of getting a termin / booking on https://otv.verwalt-berlin.de

Script doesn't book anything for you - it just helps to find an open slot by attempting to register every 2 min and
leaves the browser open so you can continue the process in the same window.

You will receive a notification when you have possible a hit so it's probably good idea to allow notification in system
settings. Also telegram notifications are available but you need to setup keys on your own unfortunately.

### Setup

1. Install local packages `npm i`
2. If you have problems with chromedriver, try to install it in the system `brew install --cask chromedriver`

### Config

Create `.env` file from `.env.example` and fill variables you want script to run with. Values there are text
representation of select options on a website.

### Run

To run execute: `npm start`

There are can be a lot of false positives, that's why you need to keep an eye on console to check why execution stopped and restart again if needed.

It should send 2 type of notifications when program terminates:

- the one when unexpected error happens
- the other one is possible success

### Donate 

If you had any luck with finding a slot using this script – feel free to donate me. I appreciate any help!

[![Donate with PayPal](https://user-images.githubusercontent.com/1920678/205337379-d3e158a6-21be-4142-a0fb-832121b828df.png)](https://www.paypal.com/donate/?hosted_button_id=KMZYQ54GRR6WY)

Current stats: 

- found slots for `2` families 
- average time to find a slot: `2` days
- donations: `$0.00`
