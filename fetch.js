function fetchApi() {

    let url = "https://api-url.com/endpoint" +
        "?parameter1=value" +
        "&parameter2=value";

    fetch(url)
        .then(response => response.json())
        .then(response => {

            // handle API response

        }, error => {
            console.log.error(error);
        });

}

fetchApi();