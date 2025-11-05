#!/usr/bin/env bash

echo "" > "overall.csv"

cat russia.csv >> "overall.csv"
cat singapore.csv >> "overall.csv"
cat slovenia.csv  >> "overall.csv"
cat switzerland.csv >> "overall.csv"
cat UK.csv >> "overall.csv"
cat USA.csv >> "overall.csv"
cat malta.csv  >> "overall.csv"
cat liechtenstein.csv >> "overall.csv"
cat germany.csv >> "overall.csv"
cat france.csv >> "overall.csv"
cat estonia.csv  >> "overall.csv"
cat cyprus.csv  >> "overall.csv"
cat israel.csv  >> "overall.csv"
cat australia.csv  >> "overall.csv"
cat "Cayman%20Islands.csv" >> "overall.csv"

sort -u overall.csv > overall-2.csv
mv overall-2.csv overall.csv

# remove empty lines
sed -i '/^$/d' overall.csv
