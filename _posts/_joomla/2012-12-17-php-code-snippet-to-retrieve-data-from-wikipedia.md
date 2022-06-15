---
id: 7931
title: 'PHP Code Snippet to retrieve Data from WikiPedia'
date: '2012-12-17T15:35:50+01:00'
author: 'Cédric Walter'
header:
    teaser: /assets/images/2012/12/PHP-logo.png


---


This interesting code snippet is from [cedTag](http://www.waltercedric.com/tag/cedtag "cedTag joomla tagging extension") and let you retrieve [WikiPedia](http://www.wikipedia.org/ "wikipedia") description using [OpenSearch API](http://www.mediawiki.org/wiki/API:Opensearch). It use the [Client Url Library cURL](http://php.net/manual/en/book.curl.php). Released under GPL v3

```php
/**  * @param $searchTerm  * @param string $wikipediaServer  * @return array|string  [text, description, url]  */ public function getDefinitionFrom

      ($searchTerm, $wikipediaServer = 'http://en.wikipedia.org') {     $url = $wikipediaServer. 

              '/w/api.php?action=opensearch&search=' .

                urlencode($searchTerm) . '&format=xml&limit=1';     $ch = curl_init($url);     curl_setopt($ch, CURLOPT_HTTPGET, true);     curl_setopt($ch, CURLOPT_POST, false);     curl_setopt($ch, CURLOPT_HEADER, false);     curl_setopt($ch, CURLOPT_NOBODY, false);     curl_setopt($ch, CURLOPT_VERBOSE, false);     curl_setopt($ch, CURLOPT_REFERER, "");     curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);     curl_setopt($ch, CURLOPT_MAXREDIRS, 4);     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);     curl_setopt($ch, CURLOPT_USERAGENT, 

                         "Mozilla/5.0");     $page = curl_exec($ch);     $xml = simplexml_load_string($page);     if ((string)$xml->Section->Item->Description) {         return array((string)$xml->Section->Item->Text,                      (string)$xml->Section->Item->Description,                      (string)$xml->Section->Item->Url);          }     return ""; }
```

 