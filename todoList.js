const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

const quotes = [
          "Focus on Being Productive instend of Busy",
          "Setting goals is the first step in turning the invisible into the visible",
          "Oppotunities dont happen,you create them",
          "Do the best You can, No one can do more than that",];

function displayRandomQuote() {
          const quoteElement = document.getElementById("quote");
          const randomIndex = Math.floor(Math.random()*quotes.length);
          quoteElement.textContent = quotes[randomIndex];
}
displayRandomQuote(); 

let list = JSON.parse(localStorage.getItem("list"));
if(list) {
         list.array.forEach((task) => {
          toDoList(task);  
         });
}

formEl.addEventListener("submit",(event) => {
         event.preventDefault();
          toDoList();
});

function toDoList(task) {
          let newTask = inputEl.value;
          if(task){
                    newTask = task.name ;
          }
      }



