<?php
require_once('config/db.php');

// Base query to fetch all entries from the 'college' table
$query = "SELECT * FROM college";
$result = mysqli_query($con, $query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <meta charset="UTF-8">
    <title>College Decider</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <center><h2 class="displaysix">KEA College Decider</h2></center>
                    </div>
                    <div class="card-body">
                        <center>
                        <div class="box-container">
                            <div class="flex-container">
                                <div class="box box1">
                                    <div class="tag-container">
                                        
                                    </div>
                                    <div id="tags-box"></div>
                                </div>
                                <div class="box box2">Box 2</div>
                                <div class="box box3">Box 3</div>
                            </div>
                            <div>
                                <a href="#" class="apply-button">
                                    <span>Apply</span>
                                </a>
                            </div>
                        </div>
                        <table class="table">
                            <tr id="tablerow1">
                                <td>College Code</td>
                                <td>College Name</td>
                                <td>Stream</td>
                                <td>Mock Rank</td>
                                <td>Round-1 Rank</td>
                                <td>Round-2 Rank</td>
                            </tr>
                            <?php
                                // Fetch and display each row from the result
                                while(){
                            ?>
                            <tr>
                                <td><?php echo $row['clgCode']?></td>
                                <td><?php echo $row['clgName']?></td>
                                <td><?php echo $row['stream']?></td>
                                <td><?php echo $row['rankMock']?></td>
                                <td><?php echo $row['rankRound1']?></td>
                                <td><?php echo $row['rankRound2']?></td>
                            </tr>          
                            <?php
                                }
                            ?>
                        </table>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
