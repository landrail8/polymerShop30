<?php



if((isset($_POST['accountEmail'])&&$_POST['accountEmail']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'dukon.hygge@yandex.ru, '.$_POST['accountEmail']; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Подтверждение заказа от магазина hygge-dukon.ru'; //Заголовок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <h2>Благодарим за заказ!</h2>
                    
                    <p>Ваш e-mail: '.$_POST['accountEmail'].'</p>
                    <p>Телефон: '.$_POST['accountPhone'].'</p>
                    
                    <h3>Вы заказали: </h3>
                    <p>'.$_POST['cartItems'].'</p>
                       
                </body>
            </html>'; //Текст нашего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <mail@hygge-dukon.ru>\r\n"; //Наименование и почта отправителя
    $headers .= "Bcc: dukon.hygge@yandex.ru\r\n"; // скрытая копия 
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}




header('Content-Type: application/json');
// Actual Code goes here
// Then make sure to wrap your final output in JSON
echo '{
    "success": 1,
    "successMessage": "Your order has been received."
  }';


?>