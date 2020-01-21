/*
File name : database.js
Description : Communicates with the server to ensure that the data is up to date.
 */

const BASE_URL = "http://localhost:3000/";
let feData = JSON.parse(localStorage.getItem("feData"));

if (feData != null) {
    fetch(BASE_URL + "update", {
        method: "POST",
        body: JSON.stringify({version: feData.version}),
        headers: {
            'Content-Type': 'application/json'
        },
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

function updateData(data) {
    // If the data received from the server are not empty then we can save them in the local storage
    if (Object.keys(data).length > 0) {
        localStorage.setItem("feData", JSON.stringify(data));
        feData = data;
    }

    // End of the update process, we can now display the data
    displayCharacters();
}