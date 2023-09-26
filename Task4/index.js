const wapi = "https://restcountries.com/v2/all";

fetch(wapi)
    .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error("something error occured");
    })
    .then(function(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(
                data[i].flag,
                data[i].name,
                data[i].region,
                data[i].subregion
            );
        }
    })
    .catch(function(err) {
        console.log(err.message);
    });