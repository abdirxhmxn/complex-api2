/**
 * get the country and category of news and then use the city info to get population
 */

/**
 * this is to see if there is any connection between the population density and crime rates
 */

document.querySelector('button').addEventListener('click', search)

function search() {
    reset()

    const newsApiKey = 'c9d5229cea5b6863d3bd277a6c2ede67'


    let keyWord;
    let country;
    //https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    let selectCountry = document.getElementById("country");
    let selectCategory = document.getElementById("category");
    let textCountry = selectCountry.options[selectCountry.selectedIndex].text;
    // let textCategory = selectCategory.options[selectCategory.selectedIndex].text.toLowerCase();
    let popCountry = textCountry
    switch (textCountry) {
        case 'Australia':
            country = 'au';
            break;
        case 'Brazil':
            country = 'br';
            break;
        case 'Canada':
            country = 'ca';
            break;
        case 'China':
            country = 'cn';
            break;
        case 'Egypt':
            country = 'eg';
            break;
        case 'France':
            country = 'fr';
            break;
        case 'Germany':
            country = 'de';
            break;
        case 'Greece':
            country = 'gr';
            break;
        case 'India':
            country = 'in';
            break;
        case 'Ireland':
            country = 'ie';
            break;
        case 'Italy':
            country = 'it';
            break;
        case 'Japan':
            country = 'jp';
            break;
        case 'Netherlands':
            country = 'nl';
            break;
        case 'Norway':
            country = 'no';
            break;
        case 'Pakistan':
            country = 'pk';
            break;
        case 'Peru':
            country = 'pe';
            break;
        case 'Philippines':
            country = 'ph';
            break;
        case 'Portugal':
            country = 'pt';
            break;
        case 'Romania':
            country = 'ro';
            break;
        case 'Russian Federation':
            country = 'ru';
            break;
        case 'Singapore':
            country = 'sg';
            break;
        case 'Sweden':
            country = 'se';
            break;
        case 'Switzerland':
            country = 'ch';
            break;
        case 'Taiwan':
            country = 'tw';
            break;
        case 'Ukraine':
            country = 'ua';
            break;
        case 'United Kingdom':
            country = 'gb';
            break;
        case 'United States':
            country = 'us';
            break;
        default:
            console.log('Error: Unknown country');
            country = 'us';
            break;
    }

    // switch (textCategory) {
    //     case 'general':
    //         category = 'general'
    //         break;
    //     case 'world':
    //         category = 'world'
    //         break;
    //     case 'business':
    //         category = 'business'
    //         break;
    //     case 'technology':
    //         category = 'technology'
    //         break;
    //     case 'entertainment':
    //         category = 'entertainment'
    //         break;
    //     case 'science':
    //         category = 'science'
    //         break;
    //     case 'sports':
    //         category = 'sports'
    //         break;
    //     case 'health':
    //         category = 'health'
    //         break;
    //     case 'nation':
    //         category = 'nation'
    //         break;
    //     default:
    //         category = 'null'
    //         console.log('Error: Uknown category')
    //         break;
    // }


    console.log(textCountry)
    // console.log(textCategory)
    keyWord = document.querySelector('input').value.toLowerCase()
    const urlPop = `https://d6wn6bmjj722w.population.io:443/1.0/population/2025/${popCountry}/`
    const url = `https://gnews.io/api/v4/search?q=${keyWord}&lang=en&max=9&country=${country}&apikey=${newsApiKey}`

    let results = document.querySelector('h3')
    fetch(urlPop)
        .then(res => res.json())

        .then(data => {
            console.log(data)
            let totalFem = 0;
            let totalMale = 0;

            data.forEach(element => {
                totalFem += Number(element.females);
                totalMale += Number(element.males);
            });

            let sum = totalFem + totalMale;
            //https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
            let popString = sum.toLocaleString()


            //used this as a template and tweaked it for my needs
            //https://www.w3schools.com/js/tryit.asp?filename=trychartjs_pie
            const malePercent = totalMale / sum * 100
            const femPercent = totalFem / sum * 100
            const xValues = ["Male", "Female"];
            const yValues = [malePercent, femPercent];
            const barColors = [
                "#1d21dcff",
                "#c018f3ff",
            ]

            const ctx = document.getElementById('myChart')
            new Chart(ctx, {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: `${textCountry}'sPopulation Distribution Graph`
                    }
                }
            });

            console.log("First element:", data[0]);
            console.log("Total population:", sum);
            let pop = document.querySelector('p')
            pop.innerText = `Total population: ${popString}`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    article = data.articles;
                    if (data.articles.length < 1) {
                        results.innerText = 'There is no news.'
                    } else {
                        const container = document.createElement('div')
                        article.forEach(element => {
                            const art = document.createElement('article')
                            art.innerHTML = `<a href=${element.url} target="_blank"><h4>${element.title}</h4><img src=${element.image}><p>${element.description}</p></a>`
                            container.appendChild(art)
                        });
                        document.body.appendChild(container)
                    }

                 })
                .catch(err => {
                    console.log(`error ${err}`)
                })
        })

        .catch(err => {
            console.log(`error ${err}`)
        })


}
function reset() {
    const info = document.querySelectorAll('article')
    if (info) {
        info.forEach(element => {
            //https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
            element.remove()
        })
    }
    //used chatGPT to help me remove the graph with each new search
    const ctx = document.getElementById('myChart');
    if (ctx) {
        ctx.remove(); // remove old canvas
        let newCanvas = document.createElement('canvas');
        newCanvas.id = 'myChart';
        document.body.appendChild(newCanvas);
    }
    let results = document.querySelector('h3')
    results.innerText = "Results:"
}