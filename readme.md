# Google Meet bot swarm

> ## What you need to have installed
- NodeJS
- Nightmare

> ## How to install nightmare
- Go into command promt
- Type `cd (path to the folder)`
- After that, type `npm install nightmare --save`

---
> ## How does it work
The program uses an NPM called [nightmare](https://www.npmjs.com/package/nightmare, 'Link to the nightmare library'). Nightmare is a headless browser library which help the app by automating the entery in the meet.

Why do you need to put an email and a password in the `details.json` file? Because you need to be logged into your account in order to enter a meeting. If you have two factor authentification, it will not work.

### The steps in the code of entering the meeting:
- Go to https://meet.google.com/
- Press login
- Enter email
- Press the next button
- Enter password
- Press the authentificate button
- Go to the meeting link
- Join the meeting


> ## Warning! The bot does not automatically mute or close your camera! (We had issues in the development stage). 
Google Meet will automatically mute you due to not being able to acces your microphone but the camera needs to be used by another app in order to be automatically closed.

---
> ## How to use
- Go to details.json and enter all the details in there.
- Run `start.cmd`