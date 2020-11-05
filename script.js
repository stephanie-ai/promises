const orderDrinks = ()  => new Promise(drinksOrder);
const form = document.getElementById('justAform');
let userInput;
const drinksList = {
  wine: 0,
  beer: 2,
  whiskey: 0,
  coffee: 5
};

form.addEventListener('submit', submitForm);

function submitForm(e) {
  userInput = e.target[0].value;
  ordering();
  timedRefresh();
};

function ordering() {
  orderDrinks()
    .then(drink)
    .catch(goThirsty);
}

function timedRefresh(time) {
	setTimeout("location.reload(true);", time);
}

function drinksOrder(resolve,reject) {
  switch(true){
    case(userInput === 'wine' && drinksList.wine > 0):
      drinksList.wine--;
      resolve(userInput);
      break;
    case(userInput === 'beer' && drinksList.beer > 0):
      drinksList.beer--;
      resolve(userInput);
      break;
    case(userInput === 'whiskey' && drinksList.whiskey > 0):
      drinksList.whiskey--;
      resolve(userInput);
      break;
    case(userInput === 'coffee' && drinksList.coffee > 0):
      drinksList.coffee--;
      resolve(userInput);
      break;
    default:
      const error = "We are out of that drink"
      reject(error);
  }
};

function drink(wine) {
  console.log(`I drink my ${wine}`)
};

function goThirsty (error) {
  console.log(error)
};
