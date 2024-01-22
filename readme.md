## Blue card Berlin – Termin script automation for Ausländerbehörde

> [!IMPORTANT]  
Update: Following recent changes by the Ausländerbehörde, applications for Blue Cards must now be submitted exclusively through thier new application form, [more details here](https://service.berlin.de/dienstleistung/324659/en/). However, services for extending, applying for, or transferring a Blue Card, as well as other residence permits and ID cards, remain available through this service.

Script for automation of getting a termin / booking on https://otv.verwalt-berlin.de

Script doesn't book anything for you - it just helps to find an open slot by attempting to register every 1 min and
leaves the browser open so you can continue the process in the same window.

You will receive a notification when you have a possible hit so it's probably good idea to allow notification in system
settings. Also telegram notifications are available but you need to setup keys [on your own unfortunately](./telegram.md).

### Setup

1. Install local packages `npm i`
2. If you have problems with chromedriver, try to install it in the system `brew install --cask chromedriver`

### Config

Create `.env` file from `.env.example` and fill variables you want script to run with. Values there are text
representation of select options on a website.

Full list of `PURPOSE` codes can be found [here](https://raw.githubusercontent.com/dmitry-kostin/termin-buchen/main/src/config/apply-purpose.ts)

If you can not find your **specific use-case** and want to add support for it: 
just [let me know in issues section](https://github.com/dmitry-kostin/termin-buchen/issues) and I'll try to help. 

### Run

To run execute: `npm start`

There are can be a lot of false positives, that's why you need to keep an eye on console to check why execution stopped and restart again if needed.

It should send 2 type of notifications when program terminates:

- the one when unexpected error happens
- the other one is possible success

### Setup for dummies

1. Pre-requirements:

You will need to install [nodejs](https://nodejs.org/en); google for something like `how to install nodejs for macos` and you should be fine;
Current node version: `18.16.0`
Open terminal and confirm that you have node installed: 
```
node -v
npm -v
```

2. Execute following commands in terminal to install script:

```bash
git clone https://github.com/dmitry-kostin/termin-buchen
cd termin-buchen
npm i
```

3. make a copy of `.env.example` file, rename this copy to `.env` and fill with your variables. You should be able to see two files laying nearby: `.env.example` and your new `.env`

`.env` file example for applying for residence permit for qualified skilled workers with an academic education:
```
MAIN_CITIZENSHIP=Russian Federation
NUMBER_OF_PEOPLE=one person
LIVE_WITH=yes
PARTNER_CITIZENSHIP=Germany
CATEGORY=apply
REASON=economic
PURPOSE=18b
```

`.env` file example for transfer passport to new blue card:
```
MAIN_CITIZENSHIP=Russian Federation
NUMBER_OF_PEOPLE=one person
LIVE_WITH=no
CATEGORY=transfer
PURPOSE=transfer_blue_card_eu
```

Full list of `PURPOSE` codes can be found [here](https://raw.githubusercontent.com/dmitry-kostin/termin-buchen/main/src/config/apply-purpose.ts)

4. execute following to run automation: `npm run start`. Browser window opens - don't touch it, just leave it in the background. In terminal you should be able to see basic logging records. Allow notifications in notification center and keep an eye on notifications.

Termin not found, another attempt in 60 seconds:
```
[runner]: iteration 1 result: false`
```

Termin found – take the window from background and continue booking your termin.
```
[runner]: iteration 1 result: true`
```

Important notes:
- have first/last name, email, birth date and your visa number ready
- if you won't be able to fill all of this info fast enough - slot would be invalidated and you'll get an error at the end
- new slots are usually getting opened around the same time every day


### Donate 

If you had any luck with finding a slot using this script – feel free to donate me. I appreciate any help!

[![Donate with PayPal](https://user-images.githubusercontent.com/1920678/205337379-d3e158a6-21be-4142-a0fb-832121b828df.png)](https://www.paypal.com/donate/?hosted_button_id=KMZYQ54GRR6WY)

Current stats: 

- found slots for `11` families 
- average time to find a slot: `2` days
