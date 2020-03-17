/*
File name : database.js
Description : Communicates with the server to ensure that the data is up to date.
 */

const BASE_URL = "http://localhost/";
let feData = JSON.parse(localStorage.getItem("feData"));

function isOnline() {
    // Check that navigator.connection is not undefined to avoid error
    // Necessary when the app run on the browser
    const networkState = (navigator.connection) ? navigator.connection.type : null;

    if (networkState != null && networkState != "none") {
        return true;
    }
    return false;
}

// Get the data from the server or update the data in the localstorage if needed
function getOrUpdateData() {
    if (feData != null) {
        let body = new FormData();
        body.append('version', feData.version);

        fetch(BASE_URL + "update", {
            method: "POST",
            body: body,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.log(res);
                }
            })
            .then(data => {
                updateData(data);
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        // Import the data if none was found
        fetch(BASE_URL + "all")
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.log(res);
                }
            })
            .then(data => {
                updateData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

// Update the data in the localstorage
function updateData(data) {
    // If the data received from the server are not empty then we can save them in the local storage
    if (data != null && Object.keys(data).length > 0) {
        localStorage.setItem("feData", JSON.stringify(data));
        feData = data;
    }

    // End of the update process, we can now display the data
    displayCharacters();
}

// Doesn't try to get or update the data if the user is not connected to the internet
if (isOnline()) {
    getOrUpdateData();
} else {
    // If the user is not connected to internet but the data are already present in the app, then we display them
    if (feData != null) {
        displayCharacters();
    } else {
        alert("Please connect to the internet to download the data");
    }

    // Create an event to get/update the data when the user goes online
    document.addEventListener("online", getOrUpdateData, false);
}
