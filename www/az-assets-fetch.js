
// let urls = {
//     svgsUrl: svgsUrl,
//     countriesUrl: countriesUrl,
//     currenciesUrl: currenciesUrl
// }
onmessage = function (e) {
    const assetsUrl = e.data;
    getRequest(assetsUrl.svgsUrl);
    getRequest(assetsUrl.countriesUrl);
    getRequest(assetsUrl.currenciesUrl);
}


function getRequest(fileUrl) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", fileUrl);
    xmlhttp.setRequestHeader("Accept", "text/plain; charset=UTF-8");
    xmlhttp.onreadystatechange = function () {
        if ((xmlhttp.status == 200) && (xmlhttp.readyState == 4)) {
            const data = JSON.parse(xmlhttp.responseText);
            postMessage({ fileUrl: fileUrl, data: data });
        }
        else if (xmlhttp.status == 404) {
            postMessage({ error: "404 Not Found" });
        }
    };
    xmlhttp.send();
}