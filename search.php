<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ccdatabaseproject";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
        exit;
    }

    if (!isset($_POST['grantorName'])) {
        echo json_encode(["error" => "No grantorName provided"]);
        exit;
    }

    $search_name = "%" . $conn->real_escape_string($_POST['grantorName']) . "%";

    $sql = "SELECT * FROM ccdatamastertable WHERE `Last Name Grantor_1` LIKE ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $search_name);
        $stmt->execute();
        $result = $stmt->get_result();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode(["received_name" => $search_name, "result_count" => $result->num_rows, "data" => $data]);

        $stmt->close();
    } else {
        echo json_encode(["error" => "Failed to prepare query: " . $conn->error]);
    }

    $conn->close();
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>
