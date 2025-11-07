#!/usr/bin/env bash

now=$(date +"%m_%d_%Y")
mv "overall.csv" "overall$now.csv"

# empty overall.csv
echo "" > "overall.csv"

function removeDuplicates() {
 sort -u $1.csv > $1-2.csv
 # remove empty lines
 sed -i '/^$/d' $1-2.csv

 mv $1-2.csv $1.csv
}

declare -a countries=("russia" "singapore" "slovenia" "switzerland" "UK" "USA" "malta" "liechtenstein" "germany" "france" "estonia" "cyprus" "israel" "australia" "Cayman%20Islands" )

for country in "${countries[@]}"
do
  removeDuplicates "$country"
  cat "$country.csv" >> "overall.csv"
done

removeDuplicates "overall"

echo -e "cat1,cat2,name,raised,desc,ticker,start,end,www\n$(cat overall.csv)" > "overall.csv"