#!/bin/bash
if [[ $# -ne 0 ]]; then
    	for i in "$@"; do
		name="ex$i"
		mkdir "$name"
    	done
	exit
else
    	echo "No arguments supplied"
	exit
fi
