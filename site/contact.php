<?php

$json = file_get_contents("php://input");
#$json = '{"name":"a","email":"b","phone":"c","msg":"d"}';
$data = json_decode($json);

$name = $data->{name};
$phone = $data->{phone};
$email = $data->{email};
$message = $data->{msg};

$from = "From: joe@puremoldsolution.com";
$to = 'joerockstheworld@yahoo.com'; 
$subject = "Customer Contact From $name!";
$body = " From: $name\n Email: $email\n Phone: $phone\n\n Message:\n $message\n\n DO NOT REPLY TO THIS EMAIL -- MAIL IS DELIVERED TO THE WEBSITE, NOT THE CUSTOMER";

#echo $body;

if (mail ($to, $subject, $body, $from)) { 
    echo '<p>Your message has been sent!</p>';
} else { 
    echo '<p>Something went wrong, please contact administrator</p>'; 
}


?>