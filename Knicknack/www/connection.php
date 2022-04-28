<?php

$dbhost = "localhost";
$dbuser = "jerome";
$dbpass = "";
$dbname = "knickknack_db";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}
