#!/usr/bin/env bash

echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "russia.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "singapore.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "slovenia.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "switzerland.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "UK.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "USA.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "malta.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "liechtenstein.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "germany.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "france.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "estonia.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "cyprus.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "israel.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "australia.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "austria.csv"

echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "vietnam.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "india.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "taiwan.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "bulgaria.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "ukraine.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "mauritius.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "indonesia.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "tanzania.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "nigeria.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "seychelles.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "netherlands.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "panama.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "ireland.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "japan.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "latvia.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "hong%20kong.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "south%20korea.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "cayman%20islands.csv"
echo "cat1,cat2,name,raised,desc,ticker,start,end,www" > "british%20virgin%20islands.csv"

function removeDuplicates() {
 sort -u $1.csv > $1-2.csv
 mv $1-2.csv $1.csv
}

removeDuplicates "overall"

cat overall.csv | grep "Russia" >> russia.csv
cat overall.csv | grep "Singapore" >>  singapore.csv
cat overall.csv | grep "slovenia" >>  slovenia.csv
cat overall.csv | grep "Switzerland" >>  switzerland.csv
cat overall.csv | grep "UK" >>  UK.csv
cat overall.csv | grep "USA" >>  USA.csv
cat overall.csv | grep "Malta" >>  malta.csv
cat overall.csv | grep "Liechtenstein" >>  liechtenstein.csv
cat overall.csv | grep "Germany" >>  germany.csv
cat overall.csv | grep "France" >>  france.csv
cat overall.csv | grep "Estonia" >>  estonia.csv
cat overall.csv | grep "Cyprus" >>  cyprus.csv
cat overall.csv | grep "Israel" >>  israel.csv
cat overall.csv | grep "Australia" >>  australia.csv

cat overall.csv | grep "Latvia" >>  latvia.csv
cat overall.csv | grep "Vietnam" >>  vietnam.csv
cat overall.csv | grep "India" >>  india.csv
cat overall.csv | grep "Taiwan" >>  taiwan.csv
cat overall.csv | grep "Bulgaria" >>  bulgaria.csv
cat overall.csv | grep "Ukraine" >>  ukraine.csv
cat overall.csv | grep "Mauritius" >>  mauritius.csv
cat overall.csv | grep "Indonesia" >>  indonesia.csv
cat overall.csv | grep "Austria" >>  austria.csv
cat overall.csv | grep "Tanzania" >>  tanzania.csv
cat overall.csv | grep "Nigeria" >>  nigeria.csv
cat overall.csv | grep "Seychelles" >>  seychelles.csv
cat overall.csv | grep "Netherlands" >>  netherlands.csv
cat overall.csv | grep "Panama" >>  panama.csv
cat overall.csv | grep "Ireland" >>  ireland.csv
cat overall.csv | grep "Japan" >>  japan.csv
cat overall.csv | grep "Hong Kong" >>  "hong%20kong.csv"
cat overall.csv | grep "South Korea" >>  "south%20korea.csv"
cat overall.csv | grep "Cayman Islands" >>  "cayman%20islands.csv"
cat overall.csv | grep "British Virgin Islands" >>  "british%20virgin%20islands.csv"
