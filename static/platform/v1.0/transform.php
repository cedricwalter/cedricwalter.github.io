<?php

$file = file_get_contents('./wpcompear.json', FILE_USE_INCLUDE_PATH);
$arr = json_decode($file, true);
$ser= serialize($arr);
echo base64_encode($ser);
