// Define a function to create PowerpuffGril objects
function PowerpuffGril(name, color, superpower) {
    // Initialize properties of each PowerpuffGril object
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false; // Initially, none of the PowerpuffGril is the leader

    // Method to display information about the PowerpuffGril
    this.displayInfo = function() {
        console.log(`PowerpuffGril Information:
        Name: ${this.name}
        Color: ${this.color}
        SuperPower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `);
    }

    // Method to make the PowerpuffGril the leader
    this.becomeLeader = function() {
        this.isLeader = true; // Set the isLeader property to true
        console.log(`${this.name} has become the leader of the PowerpuffGril!`);
    }
}

// Create instances of PowerpuffGril objects
const blossom = new PowerpuffGril("Blossom", "Pink", "Ice Breath");
const buttercup = new PowerpuffGril("Buttercup", "Green", "Super Streth");
const bubbles = new PowerpuffGril("Bubbles", "Blue", "Flight");

// Display information about each PowerpuffGril
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

// Make Blossom the leader of the PowerpuffGril
blossom.becomeLeader();

// Display information about each PowerpuffGril again to see the updated leader status
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
