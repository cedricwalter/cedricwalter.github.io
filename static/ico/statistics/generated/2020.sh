#!/usr/bin/env bash

echo "" > "2020.csv"
echo "" > "2020-01.csv"
echo "" > "2020-02.csv"
echo "" > "2020-03.csv"
echo "" > "2020-04.csv"
echo "" > "2020-05.csv"
echo "" > "2020-06.csv"
echo "" > "2020-07.csv"
echo "" > "2020-08.csv"
echo "" > "2020-09.csv"
echo "" > "2020-10.csv"
echo "" > "2020-11.csv"
echo "" > "2020-12.csv"

declare -a countries=("russia" "singapore" "slovenia" "switzerland" "UK" "USA" "malta" "liechtenstein" "germany" "france" "estonia" "cyprus" "israel" "australia" "Cayman%20Islands" )

for country in "${countries[@]}"
do
 cat "$country.csv" | grep "Jan 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-01.csv"
 cat "$country.csv" | grep "Feb 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-02.csv"
 cat "$country.csv" | grep "Mar 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-03.csv"
 cat "$country.csv" | grep "Apr 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-04.csv"
 cat "$country.csv" | grep "May 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-05.csv"
 cat "$country.csv" | grep "Jun 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-06.csv"
 cat "$country.csv" | grep "Jul 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-07.csv"
 cat "$country.csv" | grep "Aug 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-08.csv"
 cat "$country.csv" | grep "Sep 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-09.csv"
 cat "$country.csv" | grep "Oct 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-10.csv"
 cat "$country.csv" | grep "Nov 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-11.csv"
 cat "$country.csv" | grep "Dec 2020,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2020-12.csv"
done

cat "2020-01.csv" > 2020.csv
cat "2020-02.csv" >> 2020.csv
cat "2020-03.csv" >> 2020.csv
cat "2020-04.csv" >> 2020.csv
cat "2020-05.csv" >> 2020.csv
cat "2020-06.csv" >> 2020.csv
cat "2020-07.csv" >> 2020.csv
cat "2020-08.csv" >> 2020.csv
cat "2020-09.csv" >> 2020.csv
cat "2020-10.csv" >> 2020.csv
cat "2020-11.csv" >> 2020.csv
cat "2020-12.csv" >> 2020.csv

function removeDuplicatesAndAddHeader() {
 sort -u $1.csv > $1-2.csv
 # remove empty lines
 sed -i '/^$/d' $1-2.csv

 mv $1-2.csv $1.csv

 echo -e "cat1,cat2,name,raised,desc,ticker,start,end,www\n$(cat $1.csv)" > "$1.csv"

}

removeDuplicatesAndAddHeader "2020-01"
removeDuplicatesAndAddHeader "2020-02"
removeDuplicatesAndAddHeader "2020-03"
removeDuplicatesAndAddHeader "2020-04"
removeDuplicatesAndAddHeader "2020-05"
removeDuplicatesAndAddHeader "2020-06"
removeDuplicatesAndAddHeader "2020-07"
removeDuplicatesAndAddHeader "2020-08"
removeDuplicatesAndAddHeader "2020-09"
removeDuplicatesAndAddHeader "2020-10"
removeDuplicatesAndAddHeader "2020-11"
removeDuplicatesAndAddHeader "2020-12"
removeDuplicatesAndAddHeader "2020"