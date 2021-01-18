import Request from './classes/Request.js'
import UI from './classes/UI.js'

//Submit event
const form = document.getElementById('form-questions');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    Request.getQuestions()
        .then((response) => response.json())
        .then(data => UI.printQuestions(data.results))
});

//Getting categories
Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))

// Get the API
// function getApi() {
//     let howMany = document.getElementById('how-many').value;

//     const url = `https://opentdb.com/api.php?amount=${howMany}`;
//     console.log(url);

//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => printData(data))
// }

// function printData(data) {
//     let container = document.getElementById('container-questions');

//     data.results.forEach((element) => {
//         container.innerHTML += `<div class="container-card col-4">
//                                     <div class="my-card card">
//                                         <div class="card-body"> 
//                                             ${element.question}
//                                         </div>
//                                     </div>
//                                 </div>`
//     });
// }
