exports.assertDatabase = function(database, service) {
    if (database === undefined) {
        console.error(service, ': database has not been initialised.');
        throw new Error('Database has not been initialised.');
    }
};