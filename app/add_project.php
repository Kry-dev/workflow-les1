<?php

$name = $_POST['projectName'];
$data = array();

if($name === ''){
		$data['status'] = 'error';
		$data['text'] = "Заполните имя!";
}else{
		$data['status'] = 'OK';
		$data['text'] = "OK! Умница! Проект добавлен!";
}

header("Content-type: application/json");
echo json_encode($data);
exit;

