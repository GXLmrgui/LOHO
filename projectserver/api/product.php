<?php
	header("Access-Control-Allow-Origin:*");
	include("../connect.php");
    $id = $_POST["listid"];
    
    
    $sql = "select * from glass where id='$id'";

	$res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
	$product = array();
	$product["product"] = $row;
   
    if($product["product"]){
		$product["code"] = 1;
	}else{
		$product["code"] = 0;
	}
	
	echo json_encode($product);
	mysql_close();
?>
