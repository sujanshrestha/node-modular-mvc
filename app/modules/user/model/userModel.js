
var collection = 'users'

module.exports = {
    getAll : (db, callback ) => {
        let users = db.collection(collection);
        users.find( {} , {}, (err, docs) => {
            if(err) throw(err);
            else 
                callback(docs);
        });
    },
    getByEmail : (db, data, callback ) => {
        let users = db.collection(collection);
        users.findOne( {email: data.email} , {}, (err, docs) => {
            if(err) throw(err);
            else 
                callback(docs);
        });
    },
    add : (db) => {
        let users = db.collection(collection);

        users.insert({ firstname: 'test2', lastname: 'example', email: 'test2@example.com', password: 'password'}, (err, doc) => {
            if(err) throw(err);            
        })
    }
};