export default class UI {
    //Printing Categories
    static printCategories(categories) {
        const container = document.getElementById('categories');

        categories.forEach(category => {
            container.innerHTML += `<option value="${category.id}">${category.name}</option>`
        });
    }
    //Printing Questions
    static printQuestions(questions) {
        const container = document.getElementById('container-questions');
        container.innerHTML = '';

        questions.forEach((question) => {
            container.innerHTML += `<div class="container-card col-md-4 mt-4">
                                        <div class="my-card card h-100">
                                            <div class="card-body"> 
                                                ${question.question}
                                            </div>
                                        </div>
                                    </div>`
        });
    }
}