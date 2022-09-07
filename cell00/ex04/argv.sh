#!/bin/bash

if [[ $# -ne 0 ]]; then
    for i in $1 $2 $3; do
        echo "$i"
    done
else
    echo "No arguments supplied"
fi
exit
