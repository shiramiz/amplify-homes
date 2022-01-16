// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Test, Home } = initSchema(schema);

export {
  Test,
  Home
};