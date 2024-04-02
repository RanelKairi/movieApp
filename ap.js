const API_KEY = `526fc34b`
let img = document.querySelector(`#poster`); 
let input = document.querySelector(`input`);
let title = document.querySelector(`#title`);
let genre = document.querySelector(`#genre`);
let year = document.querySelector(`#year`);
let director = document.querySelector(`#director`);
let actors = document.querySelector(`#actors`);
let plot = document.querySelector(`#plot`);
let ratings = document.querySelector(`#rating`);
document.querySelector(`#butt`).addEventListener('click', loadData);

// הייתי מוסיף עוד הרבה דברים למשל עם הרייטינג שמצויין באייפיאיי אך לצערי אין לי את הזמן לכך
//אין דרך יעילה יותר לעשות את כל זה ? כמו להשתמש במערך לולאה או משהו יותר סימפטי?שאלה**


async function loadData(){
    
    let response = await fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=${API_KEY}`);    
    let data = await response.json();

    console.log(data)
    img.src = data.Poster
    title.innerText = data.Title;
    genre.innerText = data.Genre;
    year.innerText = data.Year;
    director.innerText = data.Director
    actors.innerText = data.Actors
    plot.innerText = data.Plot
    ratings.innerText = JSON.stringify(data.Ratings[0].Value  
    )
};



