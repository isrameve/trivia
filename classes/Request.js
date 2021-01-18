export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php');
    }
    static getQuestions() {
        const howMany = document.getElementById('how-many').value;
        const category = document.getElementById('categories').value;

        return fetch(`https://opentdb.com/api.php?amount=${howMany}&category=${category}`);
        //https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple&encode=url3986
    }
}
