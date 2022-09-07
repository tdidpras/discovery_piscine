#!/bin/bash

if [[ $# -ne 0 ]]; then
    for i in "$@"; do
        touch "ex$i"
    done
else
    echo "No arguments supplied"
fi
exit

