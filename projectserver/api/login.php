<?php

	//header("Access-Control-Allow-Origin:http://localhost:2333");
	header("Access-Control-Allow-Origin:*");
	include("../connect.php");
	$username = $_POST["username"];
	$password = $_POST["password"];
    $sql="select * from user where name='{$username}' AND password='{$password}'";
    $res = mysql_query($sql);
	$rows=mysql_num_rows($res);
	    
	    
	//到数据库里查询数据
    if($rows>0){
    	echo '{"code": 1}';
    }else{
    	echo '{"code": 0}';
    }
	
	

?>