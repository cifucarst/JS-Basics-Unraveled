// Pure and impure functions

// Pure functions
    // Side effects
    // 1. Modifying global variables
    // 2. Modifying parameters
    // 3. HTTP requests
    // 4. Printing messages to the screen or console
    // 5. Manipulating the DOM
    // 6. Getting the current time

    function sum(a, b) { // pure function
        return a + b;
    };
    
    // Impure functions
    function sum(a, b) {
        console.log('A: ', a);
        return a + b;
    };
    
    let total = 0
    function sumWithSideEffect(a) {
        total += a;
        return total;
    }
    
    // Pure function
    function square(x) {
        return x * x;
    };
    
    function addTen(y) {
        return y + 10;
    };
    
    const number = 5;
    const finalResult = addTen(square(number));
    console.log(finalResult);
    