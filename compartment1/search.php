<!DOCTYPE html>
<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ccdatabaseproject";

    if (isset($_POST['grantorName'])) {
        $grantorName = $_POST['grantorName'];

        // Establish database connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        


        // Prepared statement to prevent SQL injection
        $sql = "SELECT * FROM ccdatamastertable WHERE `Last Name Grantor_1` LIKE ?";
        $stmt = mysqli_prepare($conn, $sql);
        $searchTerm = "%" . $grantorName . "%";  // Add wildcards for LIKE query
        mysqli_stmt_bind_param($stmt, "s", $searchTerm);  // "s" denotes a string parameter

        // Execute query
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        $data = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                // Output each row in a readable format
                $data[]=$row;
            }
        } else {
            echo "0 Results.<br>";
        }
        echo json_encode($data);
        // Close connection
        mysqli_stmt_close($stmt);
        mysqli_close($conn);
    } else {
        echo "Please provide a grantor name.<br>";
    }
?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Clay County Map</title>
</head>

<body>

    <!--Jacob added-->
    <div class="header">
        <img src="LogoPNG.png" alt="Logo" class="header-logo">
        <h1>Clay County Historical Society Deed Map</h1>
        <div class="topnav">
            <a href="#">Home</a>
            <a href="#">Events</a>
            <a href="#">County History</a>
            <a href="#">What Do We Offer</a>
            <a href="#">Penny Press</a>
            <a href="#">About Us</a>
            <a href="#">Support</a>
            <a href="#">Shop</a>
        </div>
        <a href="#" class="login-link">
            <ion-icon name="person-circle-outline"></ion-icon> Log In
        </a>
    </div>
    <!-- Map Grid -->
    <div class="outsideGrid"></div>
    <!-- Form Section: Alec Portion -->
    <div class="container">
        <!-- Input Form -->
        <form class="section" method = "POST" action="search.php">
            <!-- Grantor Name -->
            <label for="grantorName">Grantor Name:</label>
            <input for="grantorName" name ="grantorName" type="text" id="grantorName" placeholder="Enter Grantor name">
            <!-- Grantee Name -->
            <label for="granteeName">Grantee Name:</label>
            <input type="text" id="granteeName" name ="granteeName" placeholder="Enter Grantee name">
            <!-- Filters with dropdown-->
            <div class="filter-container">
                <label for="filtersDrop" id="filter" class="dropdown">Deed Filters</label>
                <div id="filtersDrop" class="dropdown-content filter-hide">
                    <p class="dropdown-option" data-value="all">All</p>
                    <p class="dropdown-option" data-value="category1">Category 1</p>
                    <p class="dropdown-option" data-value="category2">Category 2</p>
                    <p class="dropdown-option" data-value="category3">Category 3</p>
                </div>
            </div>
            <!-- Submit -->
            <!-- I moved this because the button doesnt work when its inside the form -->
            <!-- <button type="submit" class="submit-btn" id="searchButton">Submit</button> -->
        </form>
        <!-- Submit -->
        <button type="submit" class="submit-btn" id="searchButton">Submit</button>
        <!-- Alec: Data Form - Table -->



        <table border=".5" id="tableGrab" class="table">
            <!-- tr - Columns -->
            <thead>
                <tr>
                    <!-- td - Rows -->
                    <th id="grantorGrab">
                        Grantor:
                    </th>
                    <th id="granteeGrab">
                        Grantee:
                    </th>
                    <th id="dateValue">
                        Date:
                    </th>
                    <th id="deedType">
                        Deed:
                    </th>
                    <th id="sectionArea">
                        Section:
                    </th>
                    <th id="rangeArea">
                        Range:
                    </th>
                    <th id="townMap">
                        Township:
                    </th>
                </tr>
            </thead>
            <!-- table body info if needed -->
            <tbody id="tableBody">

            </tbody>
        </table>
    </div>
    <!-- End of Alec Portion -->

    <script src="script.js"></script>

    <!-- Jacob added-->
    <div class="footer">
        <h5>518 Lincoln Ave, Clay Center, KS 67432 · (785) 632-3786 · Hours: Tues-Sun 1-5PM · ccmuseum@twinvalley.net
        </h5>

        <h5>The Clay County Historical Society is a 501(c)(3) nonprofit - EIN# 23-7377697</h5>
        <a class="facebook-icon" href="https://www.facebook.com/ccksmuseum" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a class = "instagram-icon" href="https://www.instagram.com/clay_county_historical_society/" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
        </a>

    </div>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
