# Steps to run

- Run ```cd rent-spree```

- Run
```yarn install```

- Restore sample data in 
```rent-spree/db/rent-spree```

- with command 
```mongorestore -d <database_name> <directory_backup>```

- Modify database.json in according to your mongodb credential
```rent-spree/config/database.js```

- Run
```yarn develop```
- Access ```http://localhost:1337/admin``` and login with ```natdanai.mungkung@gmail.com:Pax12345678``` to play with back office


# Unit Test
# IMPORTANT if you run on windows please modify `rent-spree\config\env\test\database.json` first
- only if you run on windows, Change line 9 from `"filename": ".tmp/test.db",` -> `"filename": "/.tmp/data.db",`
if you are on mac/linux can skip to next step


- Run
```yarn test```

- All the test file located in 
```rent-spree/tests```
