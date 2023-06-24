THIS IS A BASIC NODE JS PROJECT TEMPLATE , WHICH IS PREPARED BY SOME COMMON FOLLOWED PRINCIPLE ON DEVELOPING A PROJECT.

-**src** -> iNSIDE THIS ALL THE ACTUAL SOURCE CODE OF PROJECT IS KEPT

  -**config** -> IN THIS FOLDER ANYTHING AND EVERYTHING REGARDING ANY CONFIGRATION OR SETUP OF A LIBRARY OR MODULEE WILL BE DONE. FOR eg: SETTING UP THE DOTENV FILEE IS DONE IN SERVER-CONFIG.JS;

  -**routes**-> In the routes folder we register a routes and corresponding middleware and controllers;

  -**middleware** -> we write about validators authenticators etc;
  
  -**controllers** ->kind of a last middleware where business logic is written

  -**repositories** -> this folder contains all the logic using which we interact with DB by writing queires, all the raw queries or by ORM

  -**services**  -> contains the buisness logic and interact with repositories for data from database
  -**utilis** -> contains helper methods, error classes etc;

go inside the src folder :  npx sequelize init -> you will get migration and seeder folders and also a config folder
