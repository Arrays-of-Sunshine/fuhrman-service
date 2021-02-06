# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> #1: npm install
> #2: initiate database "product_images" by running "mysql -u root < schema.sql" in the terminal.
> #3: seed the database by running "npm run seed" in the terminal.
> #4: "npm run build" to build bundle.js in the public folder
> #5: "npm start" to start the server" (PORT# is 8002)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### For seeding database:

From within root directory:
```
npm run seedDb
```

to drop any currently existing databases/collections and seed your database with a _fresh_ 10 million records!

### Database name is 'productImages' and the collection is 'productimages'.

To delete records from database and to delete database, run this command:
```
npm run preseedDb
```
_You can also use the above command to confirm that your database is empty._

If you would like to regenerate random data for your database, run:
```
npm run seedCSV
```