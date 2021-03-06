const functions = require('firebase-functions');
const admin = require('firebase-admin');
const messagePublisher = require('./libs/message-publisher');

admin.initializeApp(functions.config().firebase);

const database = admin.database();
messagePublisher.init(database);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

exports.getSomeValue = functions.https.onRequest((request, response) => {
    const somevalue = myfunctions.getSomeValue();
    response.send(somevalue);
});


exports.summitMessage = functions.https.onRequest((req, res) => {
    const type = req.query.type;
    const payload = req.query.payload;
    messagePublisher.publishMessage(type, payload, (success) => {
        res.send("success: + " + success.toString());
    }, (error) => {
        res.send("error: " + error.toString());
    });
});

exports.submitMessageTestOne = functions.https.onRequest((req, res) => {
    const type = req.query.type;
    const payload = req.query.payload;
    messagePublisher.publishMessageTestOne(type, payload, (success) => {
        res.send("success: + " + success.toString());
    }, (error) => {
        res.send("error: " + error.toString());
    });
});

exports.submitMessageTestTwo = functions.https.onRequest((req, res) => {
    const type = req.query.type;
    const payload = req.query.payload;
    messagePublisher.publishMessageTestTwo(type, payload, (success) => {
        res.send("success: + " + success.toString());
    }, (error) => {
        res.send("error: " + error.toString());
    });
});

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.addMessage = functions.https.onRequest((req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into the Realtime Database using the Firebase Admin SDK.
//     return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
//         // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//         return res.redirect(303, snapshot.ref.toString());
//     });
// });