const userList = [
    {name:"John", genre:"M", salary:35000},
    {name:"Emma", genre:"F", salary:50000},
    {name:"Joe", genre:"M", salary:28000},
    {name:"Sandra", genre:"F", salary:30000},
    {name:"Chris", genre:"M", salary:50000},
]

// Combien les hommes gagneraient-ils AU TOTAL si ils étaient augmentés de 1000 euros CHACUN
const increasedSalaries=userList
// .map((key)=>key.salary+1000);
console.log("nouveau tableau",increasedSalaries );
const usersM = userList.filter((i)=>i.genre=="M");
console.log("tableau des salariés hommes",usersM);
const totalUpdatedSalary = usersM.reduce((sum,current)=>sum+current.salary+1000,0);
console.log("total augmenté",totalUpdatedSalary);



