// Variables
const spanJour = document.getElementById('spanDay');
let TodoSaisie = document.querySelector('.todoWrited');
const btnAddTodo = document.querySelector('.btnAddTodo');
const ulList = document.getElementById('ulList');

// Ecouteurs
btnAddTodo.addEventListener('click',addTodo);

// Functions
function JourDeLaSemaine() {
    const jour = new Date()
    let day = jour.getDay();
    switch (day) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break

        case 2: day = "Mardi";
            break

        case 3: day = "Mercredi";
            break

        case 4: day = "Jeudi";
            break

        case 5: day = "Vendredi";
            break

        case 6: day = "Samedi";
            break
        default:
            "nothing";
            break;
    }
spanJour.innerText += " " + day;
}
JourDeLaSemaine();

function addTodo(params) {
    
    ulList.innerHTML = TodoSaisie.value;
}
