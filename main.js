// Get the API
function getApi() {
    let howMany = document.getElementById('how-many').value;

    const url = `https://opentdb.com/api.php?amount=${howMany}`;
    console.log(url);

    fetch(url)
        .then((response) => response.json())
        .then((data) => printData(data))
}

function printData(data) {
    let container = document.getElementById('container-questions');

    data.results.forEach((element) => {
        container.innerHTML += `<div class="container-card col-4">
                                    <div class="my-card card">
                                        <div class="card-body"> 
                                            ${element.question}
                                        </div>
                                    </div>
                                </div>`
    });
}
// Get category
function getCategories() {
    fetch("https://opentdb.com/api_category.php")
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories))
}

function printCategories(categories) {
    let selectCategory = document.getElementById('categories');
    
    categories.forEach((category) => {
        selectCategory.innerHTML += `<option value="${category.id}">${category.name}</option>`
    });
}