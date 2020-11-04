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


# Unit Test
- Run
```yarn test```

- All the test file located in 
```rent-spree/tests```
