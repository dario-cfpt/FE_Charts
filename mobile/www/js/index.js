const baseUrl = "http://localhost:3000/";

let feData = JSON.parse(localStorage.getItem("feData"));

function updateData(data) {
    if (Object.keys(data).length > 0) {
        localStorage.setItem("feData", JSON.stringify(data));
        feData = data;
    }
}

if (feData != null) {
    fetch(baseUrl + "update", {
        method: "POST",
        body: JSON.stringify({version: feData.version}) ,
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
    fetch(baseUrl + "all")
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


