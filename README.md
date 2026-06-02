This is a base node js template, which anyone can use and has been prepared by keeping some of the most important code principles and project management recommendations. Feel free to change anything

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests, you might feel the need to create separate tests folder

Lets take a look inside `src` folder ->

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module would be done. For example: setting up `dotenv` so that we can use environment variables anywhere in a cleaner fashion, this is done in `server-config.js` file. One more example can be to setup your logging library that can help you prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators,  etc.

- `controllers` -> they are kind of last middlewares as post them you call business layer to execute the business logic. In controllers we just receive the incoming requests and data and then and pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here

- `services` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, error classes etc

### Setup the project
- Download this template from github and open it in your fav text editor.

- Go inside the folder path and execute the following command:
```
npm install
```
- In the root directory create a .env file and add the following env variables 
```
PORT=<port number of your choice>
```

ex:
```
PORT=3000
```

- Inside the `src` run the following command
```
npx sequelize init
```
- By running the above command you will get migrations and seeders along with a config.json inside the config folder.


- If you are setting your development environment then write the username, password of your db and in dialect mention whatever db you are using eg: mysql, maria
if you are using production or testing environment, make sure you replace the host with your db url

- To run the server, execute the command -
```
npm run dev
```