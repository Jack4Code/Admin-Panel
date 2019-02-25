const numOfServers = 2;
const listOfServers = ['jackServer', 'juliaServer'];
const UrlValues = 'http://localhost:61144/api/values';

// $('.btn').click(function(){
//     $.get(Url, function(data, status){
//         console.log(`${data}`)
//     });
// })

function GetRequest(Url) {
    // $.ajax({
    //     url: Url,
    //     type: "GET",
    //     success: function (result) {
    //         console.log(result);
    //     },
    //     error: function (error) {
    //         console.log(`Error ${error}`);
    //     }
    // })
    $.getJSON(Url, function (result) {
        console.log(result)
    });
}

GetRequest(UrlValues);










