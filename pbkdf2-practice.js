var bkfd2pw = require("pbkdf2-password");
var hasher = bkfd2pw({digest: "sha512"});
var opts = {
    password: "Mhncity@364",
    salt: "KPZlvWn1ETu+UEniZynhV7uKI8EH3yXar3gJMPRUjATp4KwGfKN+veBI0aBu8/5MDurmZy6K0nM9O8scE80ptw=="
};
hasher(opts, function(err, pass, salt, hash){
    console.log(hash)
})
