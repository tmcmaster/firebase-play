const common = require('./common');

let database;

exports.init = (configuredDatabase) => {
    database = configuredDatabase;
};

exports.publishMessage = (type, payload, successCallback, errorCallback) => {
    common.assertDatabase(database, "publishMessage");

    database.ref('/queues/testing').push({type: type, payload: payload}).then(snapshot => {
        successCallback("done", snapshot);
        return true;
    }).catch(error => {
        console.error('publishMessage: ', error);
        errorCallback(error);
    });
};

exports.publishMessageTestOne = (type, payload, successCallback, errorCallback) => {
    common.assertDatabase(database, "publishMessageTestOne");

    database.ref('/queues/test-one').push({type: type, payload: payload}).then(snapshot => {
        successCallback("done", snapshot);
        return true;
    }).catch(error => {
        console.error('publishMessageTestOne: ', error);
        errorCallback(error);
    });
};

exports.publishMessageTestTwo = (type, payload, successCallback, errorCallback) => {
    common.assertDatabase(database, "publishMessageTestTwo");

    database.ref('/queues/test-two').push({type: type, payload: payload}).then(snapshot => {
        successCallback("done", snapshot);
        return true;
    }).catch(error => {
        console.error('publishMessageTestTwo: ', error);
        errorCallback(error);
    });
};

