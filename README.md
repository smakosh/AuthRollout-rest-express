# Roll Your Own Auth

Roll Your Own Auth is a TypeScript project that provides a flexible authentication system for your web applications.

This boilerplate is one of incoming boilerplates, this one leverages Express.js, Prisma, SQLite, and Redis to implement authentication using session-based storage in Redis, the user id is then securely stored in HTTP-only cookies.

This specific project requires the following [Next.js app](https://github.com/smakosh/AuthRollout-rest-next)

## Features

- **Session-Based Authentication**: Easily set up session-based authentication using Redis for storing and accessing user sessions fast.
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
pnpm dev
```

## Todo

- [ ] implement the refresh/access tokens and the verification process for those who prefer jwt strategy in a different branch
- [ ] Hot reload, ts-node-dev or some other way
- [ ] Dockerize this?
