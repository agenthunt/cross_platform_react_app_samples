#!/bin/bash
echo `pwd`
export PATH=$PATH:/usr/local/bin
cd $PROJECT_DIR/../../src/server/
jx package ./server.js main

