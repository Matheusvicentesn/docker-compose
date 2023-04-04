#!/bin/bash

npm install
npm run migration:run
npm run seed
npm run start:dev
