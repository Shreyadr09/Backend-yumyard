import express from 'express';
const app = express();

// Sample products array
const products = [
    {
    "id": 1,
    "title": "Masala Dosa",
    "price": 5.99,
    "description": "Crispy crepe made from fermented rice and lentil batter, filled with spiced potato filling.",
    "category": "jainfood",
    "image": "https://media.istockphoto.com/id/909906350/photo/masala-dosa-south-indian-food.jpg?s=612x612&w=0&k=20&c=3CI-bw2NhYaX_t0-CZIXIIXsOygFcUaoGSmzbnVB-fU=",
    "rating": {
      "rate": 4.7,
      "count": 150
    }
  },
  {
    "id": 2,
    "title": "Paneer Tikka",
    "price": 8.99,
    "description": "Chunks of paneer marinated in spices and grilled to perfection.",
    "category": "jainfood",
    "image": "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.jpg?s=1024x1024&w=is&k=20&c=u-v3YdnX80PL_xzAKo6nLqZARkkBKfTNI_Z1j3xdR7Y=",
    "rating": {
      "rate": 4.6,
      "count": 180
    }
  },
  {
    "id": 3,
    "title": "Pani Puri",
    "price": 3.49,
    "description": "Crunchy hollow puris filled with spiced water, tamarind chutney, and chickpeas.",
    "category": "jainfood",
    "image": "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=",
    "rating": {
      "rate": 4.8,
      "count": 220
    }
  },
  {
    "id": 4,
    "title": "Samosa",
    "price": 1.99,
    "description": "Crispy pastry filled with spiced potatoes and peas, deep-fried to golden perfection.",
    "category": "jainfood",
    "image": "https://media.istockphoto.com/id/1198579964/photo/chole-samosa-chaat-an-ever-popular-roadside-treat-in-north-india.jpg?s=612x612&w=0&k=20&c=Asx5IARbJ6OBkoiLt2E5KSp-95buKzplZjxDQ1f5MZw=",
    "rating": {
      "rate": 4.5,
      "count": 200
    }
  },
  {
    "id": 5,
    "title": "Ragda Pattice",
    "price": 7.99,
    "description": "A comforting meal of red kidney beans cooked in a spicy tomato gravy, served with steamed rice.",
    "category": "jainfood",
    "image": "https://media.istockphoto.com/id/1264057625/photo/indian-aloo-tikki-or-potato-cutlet-is-made-out-of-boiled-potatoes-peas-and-various-curry.jpg?s=612x612&w=0&k=20&c=JsKPdXmjEDXN_ekqv9LhJfyXhU9O1cSi6GljnDgd1Pw=",
    "rating": {
      "rate": 4.9,
      "count": 250
    }
  },
  {
    "id": 6,
    "title": "Chana Chaat",
    "price": 6.99,
    "description": "Thin and crispy crepe made from fermented rice and lentil batter.",
    "category": "italian",
    "image": "https://media.istockphoto.com/id/1406389610/photo/black-chickpea-chaat-or-kala-chana-chat.jpg?s=612x612&w=0&k=20&c=VmPVuAgY5qjo7BFYv19Z4VSobAozIpIekDKuc5YMV9U=",
    "rating": {
      "rate": 4.6,
      "count": 170
    }
  },
  {
    "id": 7,
    "title": "Idli",
    "price": 4.49,
    "description": "Soft and fluffy steamed rice cakes, a popular South Indian breakfast dish.",
    "category": "nepali",
    "image": "https://media.istockphoto.com/id/481746758/photo/rava-idli-with-sagu.jpg?s=612x612&w=0&k=20&c=LdJO-OQHWnIGyjpzoRG6lKwdq4zj_eTWsqz6CBzA6Ag=",
    "rating": {
      "rate": 4.8,
      "count": 190
    }
  },
  {
    "id": 8,
    "title": "Vada",
    "price": 3.99,
    "description": "Crispy deep-fried lentil fritters, perfect for snacking.",
    "category": "south indian food",
    "image": "https://media.istockphoto.com/id/1024558380/photo/group-of-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina.jpg?s=612x612&w=0&k=20&c=cNol7HXELvV0UmGbdvOd-cG6oZvfb9ApLvJ96mF650s=",
    "rating": {
      "rate": 4.7,
      "count": 180
    }
  },
  {
    "id": 9,
    "title": "Upma",
    "price": 5.49,
    "description": "A savory porridge made from semolina, flavored with spices and vegetables.",
    "category": "south indian food",
    "image": "https://media.istockphoto.com/id/1488737992/photo/upma-recipe-suji-ka-upma-rava-upma-with-red-and-coconut-chutney.jpg?s=1024x1024&w=is&k=20&c=u-v3YdnX80PL_xzAKo6nLqZARkkBKfTNI_Z1j3xdR7Y=",
    "rating": {
      "rate": 4.5,
      "count": 160
    }
  },
  {
    "id": 10,
    "title": "Tandoori Vegetables",
    "price": 6.99,
    "description": "Tangy and spicy tamarind rice, a popular South Indian rice dish.",
    "category": "south indian food",
    "image": "https://media.istockphoto.com/id/953514746/photo/tandoori-chicken-whole-with-naan-and-raita.jpg?s=2048x2048&w=is&k=20&c=9e5PyKzOSI6XUtNJ7iBXuGI43KjlZpJMizYDhlAkr9w=",
    "rating": {
      "rate": 4.9,
      "count": 210
    }
  },
  {
    "id": 11,
    "title": "Aloo Gobi",
    "price": 4.99,
    "description": "Steamed dumplings filled with meat or vegetables, served with a spicy dipping sauce.",
    "category": "nepali food",
    "image":  "https://media.istockphoto.com/id/1091565958/photo/spicy-potato-curry-indian-recipe.jpg?s=2048x2048&w=is&k=20&c=LItyxs-TTuYWVo-IykXlfkqOeZSD5CgXdbVYVzIwcPo=",
    "rating": {
      "rate": 4.7,
      "count": 140
    }
  },
  {
    "id": 12,
    "title": "Thukpa",
    "price": 8.49,
    "description": "Spicy Tibetan noodle soup with vegetables or meat.",
    "category": "italian",
    "image": "https://media.istockphoto.com/id/462493549/photo/asian-style-fish-curry.jpg?s=2048x2048&w=is&k=20&c=Trdj8CBEYfordF1cu_pWQEdksv9GMn_tMiUfOCFfihg=",
    "rating": {
      "rate": 4.8,
      "count": 160
    }
  },
];

const categories = [
    "jainfood",
    "south indian food",
    "nepali food",
    "italian"
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
