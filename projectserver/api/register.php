<?php

	//header("Access-Control-Allow-Origin:http://localhost:2333");
	header("Access-Control-Allow-Origin:*");
	include("../connect.php");
	$username = $_POST["username"];
	$sql="select * from user where name='{$username}'";
	
	$res = mysql_query($sql);
	$rows=mysql_num_rows($res);
	
	if($rows>0){
		echo '{"code":0}';
	}else{
		echo '{"code":1}';
	}
    mysql_close();
	

	
	

?>