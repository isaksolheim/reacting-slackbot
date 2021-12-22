# Reacting Slackbot

Slackbot that automatically reacts with `heavy_plus_sign` on messages sent by a specific user.

<img width="391" alt="useful" src="https://user-images.githubusercontent.com/42111513/147094523-f16fec77-1a7a-45f1-a160-a938fdfd84b2.png">

## Project Status

Live @ Heroku 🚀

## Development

### Built with

- [Javascript](https://javascript.com/)
- [bolt-js](https://github.com/slackapi/bolt-js)
- [Heroku](https://heroku.com/)

### Installation

```bash
npm i
```

### Environment variables

The following environment variables need to be set:

```text
SIGNING_SECRET
TOKEN
APP_TOKEN
USER_ID
```

If you are running locally, they can be set by putting them in a `.env` file at the root of the project.

### Running locally

```bash
npm start
```

### Hosting

This project is hosted on Heroku. Heroku automatically builds and deploys whenever any changes are pushed to the `main` branch on Github.
