#!/usr/bin/env bash

echo "" > "2019.csv"
echo "" > "2019-01.csv"
echo "" > "2019-02.csv"
echo "" > "2019-03.csv"
echo "" > "2019-04.csv"
echo "" > "2019-05.csv"
echo "" > "2019-06.csv"
echo "" > "2019-07.csv"
echo "" > "2019-08.csv"
echo "" > "2019-09.csv"
echo "" > "2019-10.csv"
echo "" > "2019-11.csv"
echo "" > "2019-12.csv"

declare -a countries=("russia" "singapore" "slovenia" "switzerland" "UK" "USA" "malta" "liechtenstein" "germany" "france" "estonia" "cyprus" "israel" "australia" "Cayman%20Islands" )

for country in "${countries[@]}"
do
 cat "$country.csv" | grep "Jan 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-01.csv"
 cat "$country.csv" | grep "Feb 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-02.csv"
 cat "$country.csv" | grep "Mar 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-03.csv"
 cat "$country.csv" | grep "Apr 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-04.csv"
 cat "$country.csv" | grep "May 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-05.csv"
 cat "$country.csv" | grep "Jun 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-06.csv"
 cat "$country.csv" | grep "Jul 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-07.csv"
 cat "$country.csv" | grep "Aug 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-08.csv"
 cat "$country.csv" | grep "Sep 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-09.csv"
 cat "$country.csv" | grep "Oct 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-10.csv"
 cat "$country.csv" | grep "Nov 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-11.csv"
 cat "$country.csv" | grep "Dec 2019,http" | awk -v country="$country" -F, -v OFS=, '{$1=country; print }' >> "2019-12.csv"
done

cat "2019-01.csv" > 2019.csv
cat "2019-02.csv" >> 2019.csv
cat "2019-03.csv" >> 2019.csv
cat "2019-04.csv" >> 2019.csv
cat "2019-05.csv" >> 2019.csv
cat "2019-06.csv" >> 2019.csv
cat "2019-07.csv" >> 2019.csv
cat "2019-08.csv" >> 2019.csv
cat "2019-09.csv" >> 2019.csv
cat "2019-10.csv" >> 2019.csv
cat "2019-11.csv" >> 2019.csv
cat "2019-12.csv" >> 2019.csv

function removeDuplicatesAndAddHeader() {
 sort -u $1.csv > $1-2.csv
 # remove empty lines
 sed -i '/^$/d' $1-2.csv

 mv $1-2.csv $1.csv

 echo -e "cat1,cat2,name,raised,desc,ticker,start,end,www\n$(cat $1.csv)" > "$1.csv"

}

removeDuplicatesAndAddHeader "2019-01"
removeDuplicatesAndAddHeader "2019-02"
removeDuplicatesAndAddHeader "2019-03"
removeDuplicatesAndAddHeader "2019-04"
removeDuplicatesAndAddHeader "2019-05"
removeDuplicatesAndAddHeader "2019-06"
removeDuplicatesAndAddHeader "2019-07"
removeDuplicatesAndAddHeader "2019-08"
removeDuplicatesAndAddHeader "2019-09"
removeDuplicatesAndAddHeader "2019-10"
removeDuplicatesAndAddHeader "2019-11"
removeDuplicatesAndAddHeader "2019-12"
removeDuplicatesAndAddHeader "2019"