/*  Aqui estamos criando a parte de dados do produto */
import bcrypt from 'bcryptjs';

const data ={
    users:[
        {
            name: 'Berico',
            email: 'bericolanches@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        
        {
            name: 'Xocops',
            email: 'xocopinhoturbinado@gmail.com',
            password: bcrypt.hashSync('123123'),
            isAdmin: false,
        },
    ],
    products: [
        {
            //_id: '1',
            name: 'Yeezy 500 Blush',
            slug: 'yeezy-500-blush', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500BLUSH/backside.jpg',
            price: 500,
            countInStock: 0,
            brand: 'Adidas Yezzy',
            rating: 4.7,
            numReviews: 22,
            description: 'pisante bacana',
        },

        {  
            //_id: '2',
            name: 'Yeezy 500 Salt',
            slug: 'yeezy-500-salt', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500SALT/backside.jpg',
            price: 500,
            countInStock: 0,
            brand: 'Adidas Yezzy',
            rating: 4.2,
            numReviews: 19,
            description: 'pisante bacana',
        },

        {
            //_id: '3',
            name: 'Yeezy 500 Super Moon ',
            slug: 'yeezy-500-super-moon', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500SUPERMOON/backside.jpg',
            price: 1790,
            countInStock: 23,
            brand: 'Adidas Yezzy',
            rating: 3.9,
            numReviews: 12,
            description: 'pisante bacana',
        },

        {
            //_id: '4',
            name: 'Yeezy 500 Utility Black',
            slug: 'yeezy-500-utility black', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500UTILITYBLACK/backside.jpg',
            price: 2990,
            countInStock: 1,
            brand: 'Adidas Yezzy',
            rating: 5,
            numReviews: 27,
            description: 'pisante bacana',
        },
    ],
};

export default data;