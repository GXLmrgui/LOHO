<?php
	include("config.php");



	mysql_connect($config["hostname"], $config["username"], $config["password"]);

	mysql_select_db($config["dbname"]);

	mysql_query("set charset 'utf8'");
	mysql_query("set character set 'utf8'");

?>