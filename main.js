import Request from './classes/Request.js'
import UI      from './classes/UI.js'

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