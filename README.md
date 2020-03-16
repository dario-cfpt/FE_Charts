# FE_Charts
Fire Emblem Charts is a mobile application that allows you to view the statistics of the characters in the game Fire Emblem Three Houses in the form of graphics.

## Setup the app

- Change the variables in the `database.php` file to match the server.
- Change the `BASE_URL` constant in the `database.js` file with the host corresponding to the server.

## Updating the catalogue

After updating the catalogue, you must add a new row in the `Tbl_Catalogue` table with the new version of the catalogue and the date of the update.