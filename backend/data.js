import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Raj Kumar",
            email: "admin@example.com",
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: "Shubham Bhagat",
            email: "user@example.com",
            password: bcrypt.hashSync('1234567'),
            isAdmin: true,
        },
    ],
    products : [
        {
            // _id: '1',
            name: 'Puma Hoodie',
            slug: 'Puma-Hoodie',
            category: 'Mens-Clothing',
            image: '/images/men_1.jpg',
            price: 1299,
            countInStock: 10,
            brand: 'Puma',
            rating: 4.3,
            numReviews: 19,
            description: 'High quality Hoodie',
        },
        {
            // _id: '2',
            name: 'Adidas Trackpant',
            slug: 'adidas-trackpant',
            category: 'Mens-Clothing',
            image: '/images/men_2.jpg',
            price: 1599,
            countInStock: 4,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 23,
            description: 'High quality product',
        },
        {
            // _id: '3',
            name: 'Nike Shirt',
            slug: 'nike-shirt',
            category: 'Mens-Clothing',
            image: '/images/men_3.jpg',
            price: 999,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 25,
            description: ' Mens Poly Cotton Digital Printed Stitched Half Sleeve Shirt',
        },
        {
            // _id: '4',
            name: 'IndoPrimo Shirt',
            slug: 'IndoPrimo-shirt',
            category: 'Mens-Clothing',
            image: '/images/men_4.jpg',
            price: 699,
            countInStock: 5,
            brand: 'IndoPrimo',
            rating: 4.5,
            numReviews: 10,
            description: 'IndoPrimo Mens Cotton Casual Shirt Full Sleeve',
        },
        {
            // _id: '5',
            name: 'Saree',
            slug: 'saree',
            category: 'Womens-Clothing',
            image: '/images/women_1.jpg',
            price: 599,
            countInStock: 10,
            brand: 'MANOHARI',
            rating: 4.5,
            numReviews: 29,
            description: 'MANOHARI Women Most Trendy Premium Heavy Chiffon Embroidered Work type 5.5 Meter Saree',
        },
        {
            // _id: '6',
            name: 'Adidas T-Shirt',
            slug: 'adidas-shirts',
            category: 'Womens-Clothing',
            image: '/images/women_2.jpg',
            price: 799,
            countInStock: 4,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 23,
            description: 'High quality product',
        },
        {
            // _id: '7',
            name: 'Stylish top',
            slug: 'stylish-top',
            category: 'Womens-Clothing',
            image: '/images/women_3.jpg',
            price: 1099,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 21,
            description: ' Women Crepe Slim Fit Digital Printed Top',
        },
        {
            // _id: '8',
            name: 'Salwar Suit',
            slug: 'salwar-suit',
            category: 'Womens-Clothing',
            image: '/images/women_4.jpg',
            price: 699,
            countInStock: 0,
            brand: 'PANASH TRENDS',
            rating: 4,
            numReviews: 11,
            description: 'Panash Trends Women Georgette heavy Embroidery Salwar Suit',
        },
        {
            // _id: '9',
            name: 'Men Panal Sneakers',
            slug: 'men-panal-sneakers',
            category: 'Shoes',
            image: '/images/shoe_1.jpg',
            price: 1299,
            countInStock: 16,
            brand: 'US Polo Association',
            rating: 4.5,
            numReviews: 9,
            description: 'US Polo Association Men Panal Sneakers Round toe, Material : Synthetic Leather',
        },
        {
            // _id: '10',
            name: 'Unisex-Adult Duramo 10 Shoes',
            slug: 'Unisex-Adult-Duramo-10-Shoes',
            category: 'Hostel Essentials',
            image: '/images/shoe_2.jpg',
            price: 1549,
            countInStock: 7,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 23,
            description: 'Adidas Unisex-Adult Duramo 10 Shoes Width : Medium, Material : Synthetic Textile Rubber',
        },
        {
            // _id: '11',
            name: 'Unisex-Adult Solarsmash RCT Running Shoe',
            slug: 'Unisex-Adult-Solarsmash-RCT-Running-Shoe',
            category: 'Shoes',
            image: '/images/shoe_3.jpg',
            price: 1650,
            countInStock: 0,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 31,
            description: 'Puma Unisex-Adult Solarsmash RCT Running Shoe Width : Medium, Material : Rubber',
        },
        {
            // _id: '12',
            name: 'Men Air Zoom Structure 21 Running Shoe',
            slug: 'Men-Air-Zoom-Structure-21-Running-Shoe',
            category: 'Shoes',
            image: '/images/shoe_4.jpg',
            price: 2150,
            countInStock: 5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 17,
            description: 'Nike Men Air Zoom Structure 21 Running Shoe, Soft and Durable, Material : Rubber',
        },
        {
            // _id: '13',
            name: 'Gaming-Laptop',
            slug: 'Gaming-Laptop',
            category: 'Electronics',
            image: '/images/elec_3.jpg',
            price: 71499,
            countInStock: 19,
            brand: 'Asus Rog',
            rating: 5,
            numReviews: 18,
            description: 'Gaming Laptop GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Windows 10/Gray/2.4 Kg)',
        },
        {
            // _id: '14',
            name: 'Speaker',
            slug: 'Speaker',
            category: 'Electronics',
            image: '/images/elec_1.jpg',
            price: 2199,
            countInStock: 10,
            brand: 'Boat',
            rating: 4.5,
            numReviews: 8,
            description: 'Boat Partypal 50 20W Bluetooth, Wireless, Auxiliary, USB, Fm Speaker - Knight Black',
        },
        {
            // _id: '15',
            name: 'Gaming-keyboard',
            slug: 'Gaming-keyboard',
            category: 'Electronics',
            image: '/images/elec_4.jpg',
            price: 1250,
            countInStock: 17,
            brand: 'Zebronics',
            rating: 4.5,
            numReviews: 20,
            description: 'Branded Gaming Keyboard',
        },
        {
            // _id: '16',
            name: 'Fitness-Band',
            slug: 'Fitness-Band',
            category: 'Electronics',
            image: '/images/elec_2.jpg',
            price: 1999,
            countInStock: 54,
            brand: 'Noise',
            rating: 4,
            numReviews: 10,
            description: 'Branded Watch',
        },
        
        {
            // _id: '17',
            name: 'Plain Dosa',
            slug: 'plain-dosa',
            category: 'Grocery',
            image: '/images/groc_1.jpg',
            price: 50,
            countInStock: 10,
            brand: 'Haldirams',
            rating: 4.5,
            numReviews: 9,
            description: 'Instant Mix Plain Dosa 200 g',
        },
        {
            // _id: '18',
            name: 'Motichoor Laddoo',
            slug: 'motichoor-laddoo',
            category: 'Grocery',
            image: '/images/groc_2.jpg',
            price: 411,
            countInStock: 4,
            brand: 'Haldirams',
            rating: 5,
            numReviews: 233,
            description: 'Traditional Indian "melt in mouth" ladoos made with sugar syrup soaked boondi, Milk, Desi ghee, Pista, Elaichi and Kesar',
        },
        {
            // _id: '19',
            name: 'Bhujia',
            slug: 'bhujia',
            category: 'Grocery',
            image: '/images/groc_3.jpg',
            price: 51,
            countInStock: 15,
            brand: 'Haldirams',
            rating: 4.5,
            numReviews: 20,
            description: 'Bhujia (200 gm)',
        },
        {
            // _id: '20',
            name: 'Cookies Heaven Kaju',
            slug: 'cookies-heaven-kaju',
            category: 'Grocery',
            image: '/images/groc_4.jpg',
            price: 99,
            countInStock: 5,
            brand: 'Haldirams',
            rating: 4.5,
            numReviews: 17,
            description: 'Cookies Heaven Kaju (150 g)',
        },
        {
            // _id: '21',
            name: 'Electric Kettle',
            slug: 'Electric-Kettle',
            category: 'Hostel Essentials',
            image: '/images/hostel_1.jpg',
            price: 799,
            countInStock: 10,
            brand: 'Prestige',
            rating: 4.5,
            numReviews: 9,
            description: 'Prestige 1.5 Litre Kettle 1500-watts, Red',
        },
        {
            // _id: '22',
            name: 'Stainless Steel Travel Mug',
            slug: 'stainless-steel-travel-mug',
            category: 'Hostel Essentials',
            image: '/images/hostel_2.jpg',
            price: 549,
            countInStock: 4,
            brand: 'Borosil',
            rating: 5,
            numReviews: 233,
            description: 'Borosil - vacuum insulated Hydra Coffeemate stainless Steel travel mug - spill proof - hot and cold',
        },
        {
            // _id: '23',
            name: 'Tea/Coffee Mug',
            slug: 'tea-coffee-mug',
            category: 'Hostel Essentials',
            image: '/images/hostel_3.jpg',
            price: 165,
            countInStock: 15,
            brand: 'PCH PinkCity',
            rating: 4.5,
            numReviews: 20,
            description: 'PCH PinkCity Handicraft Printed Masala Chai Ceramic Tea/Coffee Mug (320ml)',
        },
        {
            // _id: '24',
            name: 'Iron',
            slug: 'iron',
            category: 'Hostel Essentials',
            image: '/images/hostel_4.jpg',
            price: 1350,
            countInStock: 5,
            brand: 'Crompton',
            rating: 4.5,
            numReviews: 17,
            description: 'Crompton Brio 1000-Watts Dry Iron with Weilburger Coating (Sky Blue and White)',
        },
        
    ],
}

export default data;