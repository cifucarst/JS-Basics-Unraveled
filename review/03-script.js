// Structures

// Lists
let my_list = ["Brais", "Bl4ck", "Wolfy", "Visionos"];
console.log(my_list);
my_list.push("Castor"); // Insertion
my_list.push("Castor");
console.log(my_list);
my_list.splice(my_list.indexOf("Brais"), 1); // Deletion
console.log(my_list);
console.log(my_list[1]); // Access
my_list[1] = "Cuervillo"; // Update
console.log(my_list);
my_list.sort(); // Sorting
console.log(my_list);
console.log(typeof my_list);

// Sets (JavaScript doesn't have sets literals)
let my_set = new Set(["Brais", "Moure", "@mouredev", "36"]);
console.log(my_set);
my_set.add("mouredev@gmail.com"); // Insertion
my_set.add("mouredev@gmail.com");
console.log(my_set);
my_set.delete("Moure"); // Deletion
console.log(my_set);
// Sets cannot be sorted directly in JavaScript

// Objects
let my_object = {
    "name": "Brais",
    "surname": "Moure",
    "alias": "@mouredev",
    "age": "36"
};
my_object["email"] = "mouredev@gmail.com"; // Insertion
console.log(my_object);
delete my_object["surname"]; // Deletion
console.log(my_object);
console.log(my_object["name"]); // Access
my_object["age"] = "37"; // Update
console.log(my_object);


// Extra
function my_agenda() {
    let agenda = {};

    function insert_contact() {
        let phone = prompt("Enter the contact's phone number: ");
        if (!isNaN(phone) && phone.length > 0 && phone.length <= 11) {
            agenda[name] = phone;
        } else {
            console.log("You must enter a phone number with a maximum of 11 digits.");
        }
    }

    while (true) {
        console.log("");
        console.log("1. Search contact");
        console.log("2. Insert contact");
        console.log("3. Update contact");
        console.log("4. Delete contact");
        console.log("5. Exit");

        let option = prompt("\nSelect an option: ");

        switch (option) {
            case "1":
                let name = prompt("Enter the name of the contact to search for: ");
                if (agenda.hasOwnProperty(name)) {
                    console.log(`The phone number of ${name} is ${agenda[name]}.`);
                } else {
                    console.log(`The contact ${name} does not exist.`);
                }
                break;
            case "2":
                name = prompt("Enter the name of the contact: ");
                insert_contact();
                break;
            case "3":
                name = prompt("Enter the name of the contact to update: ");
                if (agenda.hasOwnProperty(name)) {
                    insert_contact();
                } else {
                    console.log(`The contact ${name} does not exist.`);
                }
                break;
            case "4":
                name = prompt("Enter the name of the contact to delete: ");
                if (agenda.hasOwnProperty(name)) {
                    delete agenda[name];
                } else {
                    console.log(`The contact ${name} does not exist.`);
                }
                break;
            case "5":
                console.log("Exiting the agenda.");
                return;
            default:
                console.log("Invalid option. Choose an option from 1 to 5.");
        }
    }
}

my_agenda();
