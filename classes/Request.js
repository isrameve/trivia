export default class Request {
    static getQuestions() {
        const result = this.getFilters();
        return fetch(`https://opentdb.com/api.php?amount=${result[0]}&category=${result[1]}`);
                    //https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple&encode=url3986
    }
    //This take the configuration of the User
    static getFilters() {
        const howMany    = document.getElementById('how-many').value;
        const category   = document.getElementById('categories').value;
        // const difficulty = document.getElementById('difficulty').value;
        // const type       = document.getElementById('type').value;
        return [howMany, category];
    }
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php');
    }
}
