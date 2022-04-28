$("#form").submit(function (e) {
    e.preventDefault()
    var query = $("#search").val()
    var API_KEY = '56B38D2F6FF04BD6BAB6CC3D7D409DB3'

    // url = (  https://api.serpwow.com/live/search 
    //          api_key=56B38D2F6FF04BD6BAB6CC3D7D409DB3
    //          query=Varquery
    //          engine=google)
    var url = 'https://api.serpwow.com/live/search api_key=' + API_KEY + ' query=' + query + ' engine=google'
    console.log(url)
    
    //loop thing na backtick na
    $.get(url, function (data) {
        console.log(data)
        data.organic_result.forEach(res => {
            result = `
    <h1>${res.title}</h1></br><a href="${res.url}">${res.url}</a><p>${res.snippet}</p>
    `
        })

    })
});