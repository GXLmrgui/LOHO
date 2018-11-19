<?php
	header("Access-Control-Allow-Origin:*");
	include("../connect.php");

    $sql = "select * from main";

	$res = mysql_query($sql);
	$product = array();
	$arr = array();
	while($row = mysql_fetch_assoc($res)){
		    array_push($arr,$row);
		    $product["product"] = $arr;
	}
	
	if($product["product"]){
		$product["code"] = 1;
	}else{
		$product["code"] = 0;
	}

	echo json_encode($product);
    mysql_close();
?>

