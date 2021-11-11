# Queue of the inbound customer phone calls

This queue of the inbound customer phone calls application were implemented with ExpressJS.

## Contents

- [What is ExpressJS?](#what-is-express)
- [Why use ExpressJS?](#why-use-express)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the app](#run)

## <a name="what-is-express"></a>What is ExpressJS?

Express is a compromise web framework, written in JavaScript and hosted within the NodeJS runtime.

## <a name="why-use-express"></a>Why use ExpressJS?

It allows you to easily create APIs and web applications, it provides a set of characteristics such as route management (addressing), static files, use of the template engine, integration with databases, error handling, middleware among others.

## <a name="installation"></a> Installation

`npm install`

If you don't have npm in your computer you need install it: https://nodejs.org/es/download/

## <a name="configuration"></a> Configuration

Applications often run in different environments. Depending on your environment, different configuration settings should be used.  Running an app in different environments is then just a matter of swapping in the .env file.

`cp .env.example .env`

You can change the port, hostname, webSocker url and webSocker port to your convenience in the .env file.
The default values are:

`PORT=3000 `
`HOSTNAME=localhost`
`WEB_SOCKET_URL='ws://localhost'`
`WEB_SOCKET_PORT=7777`

## <a name="run"></a> Running the app

Run the project
`npm start`

Run the project in development mode:
`npm run dev:start`