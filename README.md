# Roll Your Own Auth

Roll Your Own Auth is a TypeScript project that provides a flexible authentication system for your web applications.

This boilerplate is one of incoming boilerplates, this one leverages Express.js, Prisma, SQLite, and Redis to implement authentication using both session-based storage in Redis and JWT tokens, both of which are securely stored in HTTP-only cookies.

You can choose your preferred authentication strategy, whether it's session-based or JWT-based. Just keep in mind that adjustments has to be made.

## Features

- **Session-Based Authentication**: Easily set up session-based authentication using Redis for storing user sessions securely.
- **JWT-Based Authentication**: To be implemented

## Getting Started

To get started with Roll Your Own Auth, follow these steps:

1. Clone this repository:

```bash
git clone git@github.com:smakosh/AuthRollout-rest-express.git
```

2. Setup environment variables
3. Install dependencies

```bash
pnpm i
```

4. Start your server

```bash
pnpm start
```

## Todo

- [ ] implement the refresh/access tokens and the verification process for those who prefer jwt strategy
- [ ] Hot reload, ts-node-dev or some other way
- [ ] Document how Postgres can be used to replace SQlite
- [ ] Dockerize this
