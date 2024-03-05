import express from 'express';
const app = express();

// Sample products array
const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    // Add more sample products as needed
    {
        id: 2,
        title: "Another Product",
        price: 49.99,
        description: "Description of another product",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 4.5,
            count: 80
        }
    }
];

const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
];

// Route to get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Route to get all categories
app.get('/products/categories', (req, res) => {
    res.json(categories);
});

// Route to get products by category
app.get('/products/categories/:category', (req, res) => {
    const category = req.params.category;
    const productsByCategory = products.filter(product => product.category === category);
    res.json(productsByCategory);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
