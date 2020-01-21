db.createUser(
    {
        user : "u",
        pwd  : "p",
        roles : [
            {
            role : "readWrite",
            db: "mydb"
            }
        ]
    }
    
)
