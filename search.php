<?php
header('Content-Type: application/json');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ccdatabaseproject";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $search_name = "%" . $_POST['grantorName'] . "%";  
    
    $sql = "SELECT * FROM ccdatamastertable WHERE `Last Name Grantor_1` LIKE ?";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("s", $search_name);
    $stmt->execute();
    $result = $stmt->get_result();

    echo "<p>Search Results For '$search_name':</p>";

    $data = array(); 

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
         
            $data[] = $row;
        }
    } 
    // else {
    //     echo "No Results found for '$search_name'.";
    // }

    echo json_encode($data);
// Add this at the end of the PHP file
if (empty($data)) {
    echo json_encode(["message" => "No results found"]);
} else {
    echo json_encode($data);
}

    $stmt->close();
    $conn->close();
}
?>
