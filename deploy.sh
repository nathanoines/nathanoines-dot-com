#!/bin/bash
export PATH=/home/nathanoines/.nvm/versions/node/v24.12.0/bin:$PATH
export NODE_OPTIONS="--max-old-space-size=512"
cd /home/nathanoines/public_html
npm install
npm run build
