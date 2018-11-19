<?php

	//header("Access-Control-Allow-Origin:http://localhost:2333");
	header("Access-Control-Allow-Origin:*");
	include("../connect.php");
	$username = $_POST["name"];
	$password = $_POST["pass"];
	
	$sql="insert into user (name,password) values ('$username','$password')";
    $res=mysql_query($sql);
    
    if($sql){
    	echo '{"code":1}';
    }else{
    	echo '{"code":0}';
    }
	
	mysql_close();

	

	
	

?>