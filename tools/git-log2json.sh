#!/usr/bin/env bash

# https://gist.github.com/textarcana/1306223/395b98ea4c9b1d063449e12a66ca3d125c23e45c
# Use this one-liner to produce a JSON literal from the Git log:

git log \
    --pretty=format:'{%n  "commit": "%H",%n  "author": "%aN <%aE>",%n  "date": "%ad",%n  "message": "%f"%n},' \
    $@ | \
    perl -pe 'BEGIN{print "["}; END{print "]\n"}' | \
    perl -pe 's/},]/}]/'