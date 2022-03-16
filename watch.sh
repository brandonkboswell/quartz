#!/bin/bash

export GOPATH=/Users/$USER/go; export GOROOT="$(/usr/local/bin/brew --prefix golang)/libexec"; export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"; cd ~/Sites/quartz; nodemon -w ~/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/bkb -w ~/Sites/quartz/layouts -w ~/Sites/quartz/config.toml -w ~/Sites/quartz/data/config.yaml -x "~/Sites/quartz/compile.sh" -e md,html