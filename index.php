<?php
header('Content-Type: text/html');
if ($_SERVER['REQUEST_URI'] == '/buy')
    readfile('buy.html');
else
    readfile('main.html');
