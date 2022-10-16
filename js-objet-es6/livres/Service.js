export class Service {

    static data = JSON.parse(localStorage.getItem('Library')) || [];

    static saveData = (array) => {       
        
        localStorage.setItem("Library", JSON.stringify(array));}
}




