#!/bin/bash

export GOPATH=/Users/$USER/go; export GOROOT="$(/usr/local/bin/brew --prefix golang)/libexec"; export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"; cd ~/Sites/quartz; nodemon -w /Users/brandonkboswell/My\ Drive/Obsidian/bkb -w ~/Sites/quartz/assets/js -w ~/Sites/quartz/assets/styles -w ~/Sites/quartz/layouts -w ~/Sites/quartz/config.toml -w ~/Sites/quartz/data/config.yaml -x "~/Sites/quartz/compile.sh" -e md,html,js,scss,xml
