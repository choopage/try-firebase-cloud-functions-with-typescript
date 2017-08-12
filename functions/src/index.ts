// src/index.ts
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as AddMessage from './add-message'
import * as UpCaseMessages from './upcase-messages'

admin.initializeApp(functions.config().firebase);

export const addMessage = AddMessage.listener;
export const makeUpperCase = UpCaseMessages.listener;
