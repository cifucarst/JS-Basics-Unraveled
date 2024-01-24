/* Exercise: managing a stack

create aporgram that simulates a stack using the push and pop methods. Teh stack should store a collection
of books. Users can perform the following actions:

1. Add a new book to the top of the stack.
2. Remove the book form the top of the stack.
3. Display the current stack of books.

Implement a loop that allows users to interact with the stack until the choose to exit
*/

let bookCart = [];

const ADD_TO_CART_ACTION = 'addToCart';
const REMOVE_FROM_CART_ACTION = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

function viewCart() {
    console.log('Current cart of books: ' + bookCart);
}

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove.');
            } else {
                const removedBook = bookCart.pop();
                console.log(`Remove book from the cart: ${removedBook}`);
            }
            break;
        case VIEW_CART_ACTION:
            viewCart();
            break;
        default:
            console.log('Invalid action. Please choose a valid option');
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'Think like a monk');
performCartActions(VIEW_CART_ACTION);
