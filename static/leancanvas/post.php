<?php  
$json = json_encode($_POST);

$decodedJson = json_decode($json);

$share = $decodedJson->share;
echo "share1 is ".$share;
$share = isset($share) ? true : false;
echo "share2 is ".$share;
if ($share)
{
	$id = $decodedJson->projectId;
	$id = isset($id) ? $id : "default";
	if ($id != "") {
		$file = dirname(__FILE__). "/data/" . $id  . '.json';

		// create file if not exist
		$current = fopen($file, 'w');

		// overwrite always
		file_put_contents($file, $json);
	}
}

?>