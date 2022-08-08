//create db connection
let db;

//connection to IndexedDB database "budget-tracker"
const request = indexedDB.open('budget-tracker', 1);