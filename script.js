
let role = prompt("Enter your role (admin / manager / developer / intern)").toLowerCase();


switch (role) {
    case "admin":
        alert("Access Level: Full system access");
        break;

    case "manager":
        alert("Access Level: Team management access");
        break;

    case "developer":
        alert("Access Level: Code access");
        break;

    case "intern":
        alert("Access Level: Limited access");
        break;

    default:
        alert("Invalid input. Please try again.");
}


let paymentMethod = prompt("Choose payment method (credit / debit / upi / cod)").toLowerCase();


switch (paymentMethod) {
    case "credit":
        alert("Payment through Credit Card selected");
        break;

    case "debit":
        alert("Payment through Debit Card selected");
        break;

    case "upi":
        alert("Payment through UPI selected");
        break;

    case "cod":
        alert("Cash on Delivery selected");
        break;

    default:
        alert("Invalid input. Please try again.");
}



let orderStatus = prompt(
    "Enter order status (placed / packed / shipped / delivered / cancelled)"
).toLowerCase();


switch (orderStatus) {
    case "placed":
        alert("Your order has been placed successfully");
        break;

    case "packed":
        alert("Your order is packed and ready to ship");
        break;

    case "shipped":
        alert("Your order has been shipped");
        break;

    case "delivered":
        alert("Your order has been delivered");
        break;

    case "cancelled":
        alert("Your order has been cancelled");
        break;

    default:
        alert("Invalid input. Please try again.");
}



let day = prompt("Enter day name (Monday - Sunday)").toLowerCase();


switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        alert("Today is a Working Day");
        break;

    case "friday":
        alert("Today is a Half Day");
        break;

    case "saturday":
    case "sunday":
        alert("Today is a Holiday");
        break;

    default:
        alert("Invalid input. Please try again.");
}
