#!/bin/bash
# Link pm2 to keymetrics API and name instance resin DEVICE ID
pm2 link i7bgcosdw1d7a37 uogvestv2zbr7vp
# Start pm2 process to run server.js forever
pm2 start start.js
# Spit out some logs
pm2 logs
