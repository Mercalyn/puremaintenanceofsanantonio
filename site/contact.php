<?php

$json = file_get_contents("php://input");
#$json = '{"name":"a","email":"b","phone":"c","msg":"d"}';
$data = json_decode($json);

$name = $data->{name};
$phone = $data->{phone};
$email = $data->{email};
$message = $data->{msg};

$from = "From: joe@puremoldsolution.com";
$to = 'mercalus@gmail.com'; 
$subject = "Customer Contact From $name!";
$body = " From: $name\n Email: $email\n Phone: $phone\n Message:\n $message\n DO NOT REPLY TO THIS EMAIL -- IT WON'T BE READ BY THE CUSTOMER";

#echo $body;

if (mail ($to, $subject, $body, $from)) { 
    echo '<p>Your message has been sent!</p>';
} else { 
    echo '<p>Something went wrong, please contact administrator</p>'; 
}


?>