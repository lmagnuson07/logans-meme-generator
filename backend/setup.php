<?php
//phpinfo();
require __DIR__ . '/../vendor/autoload.php';

// Loads environment variables from .env to the $_ENV superglobal
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

// Database connection
$conn = null;
try {
    $conn = new PDO($_ENV['DB_DRIVER'] . ':dbname=' . $_ENV['DB_NAME'] . ';host='. $_ENV['DB_SERVER'] . ';port:' .  $_ENV['DB_PORT'], $_ENV['DB_USER'], $_ENV['DB_PASS'], [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch(Exception) {
    echo "Something went wrong with the database";
}
echo "<p>The server is running</p>";