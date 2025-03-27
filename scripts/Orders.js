import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts() // why isn't this being used in here? ahhhhhh hah!
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, products) => { //allProducts changed to products
    let orderProduct = null

    for (const product of products) { //allProducts changed to products
        if (product.id === order.productId) {
            orderProduct = product.name
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order - all of this looks screwy to me
export const findEmployee = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees) //changed order to orders is not iterable
        const product = findProduct(order, products)  //changed order to orders is not iterable and added products as second variable

        html += `<li>${product} was sold by "${employee}" on ${new Date(order.timestamp).toLocaleDateString()}</li>`
// not able to get these .name properties from product, maybe because product isn't an array for some reason?
        // html += `<li>${product.name} was sold by "${employee.name}" on ${new Date(order.timestamp).toLocaleDateString()}</li>` //changed order to orders is not iterable and added products as second variable
    }

    html += "</ul>"

    return html
}

