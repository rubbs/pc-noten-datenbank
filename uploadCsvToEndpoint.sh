#!/bin/bash



COMPFILE="komponisten.csv"


awk -F ";" '{curl -i -H \"Content-Type: application/json\" -X POST -d {\"name\":\"$1\"}}' $COMPFILE
