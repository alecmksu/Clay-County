<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ccprojectv3";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    $search_name = "%" . $_POST['grantorName'] . "%";  // Add wildcard characters for LIKE query
    $sql = "SELECT * FROM ccdatamastertable WHERE `Last Name Grantor_1` LIKE ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $search_name);
    $stmt->execute();
    $result = $stmt->get_result();

    echo "<p>Search Results For '$search_name':</p>";

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "Grantor Name: " . $row["Last Name Grantor_1"] . "<br>";
        }
    } else {
        echo "No Results found for '$search_name'.";
    }

    $stmt->close();
    $conn->close();
}
?>
