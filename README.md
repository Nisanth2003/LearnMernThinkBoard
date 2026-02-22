MERN - M(MONGO DB),E(EXPRESS JS),R(REACT),N(NODE JS).

M
-database where we store our data.

E
-a web framework is a ready-to-use toolbox for building web apps faster and more easily.

why use a web framework?
saves time 
make code clean and organized.
handle common task(like routing,error handling,etc).

N(also known as javascript runtime)
-allow you to run js on server.
-normally we can run js on the client such as browser but node js wiil help run js on the server.


R
-our front end lib.

Setup for backend.
commands to run.

1)npm init -y.
-to intialize a node js application.
-which will generate a package.json file

2)npm install express@4.18.2
-this command install the express.
-@98.383 define the version without this it will install latest version.

after this command you should see node_modules which contains the library and package-lock.json

later create a file with one of these(app,server,index).js

and write the default code.you can run it either by the command or changing the default in the package.json in scripts like{dev : node index.js}.

command :- node server.js

for module specification warning.
in package.json add this line below scripts.
line :-"type":"module"

