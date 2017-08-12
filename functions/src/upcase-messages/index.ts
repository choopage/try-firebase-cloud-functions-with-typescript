// src/upcase-messages/index.ts
import * as functions from 'firebase-functions'

export const listener = functions.https.onRequest(async (req, res) => {
    res.send('Hello from Firebase! UPCASE MESSAGES v5');
});
