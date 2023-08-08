#!/bin/bash

export GOPATH=/Users/$USER/go; export GOROOT=/opt/homebrew/opt/go/libexec; export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"; cd ~/Sites/quartz; nodemon -w /Users/brandonkboswell/Library/Mobile Documents/iCloud~md~obsidian/Documents/bkb -w ~/Sites/quartz/assets/js -w ~/Sites/quartz/assets/styles -w ~/Sites/quartz/layouts -w ~/Sites/quartz/config.toml -w ~/Sites/quartz/data/config.yaml -x "~/Sites/quartz/compile.sh" -e md,html,js,scss,xml
