const db;

const init = function(Database) {
    db = Database;
}

const recordValue = function(lat, long) {
    db.insert({ latitude: lat, longitude: long });
}

module.exports.init = init;
module.exports.recordValue = recordValue;