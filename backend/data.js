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
            name: 'Tenis Feio',
            slug: 'yeezy-500-blush', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500BLUSH/backside.jpg',
            price: 2500,
            countInStock: 4,
            brand: 'Adidas Yeezy',
            rating: 1,
            numReviews: 22,
            description: 'pisante bacana',
        },

        {  
            //_id: '2',
            name: 'Yeezy 700 Wave Runner Mauve',
            slug: 'yeezy-700-wave-runner-mauve', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezy 700',
            image: '/images/YEEZYBOOST700WAVERUNNERMAUVE/frontside.jpg',
            price: 2799,
            countInStock: 10,
            brand: 'Adidas Yeezy',
            rating: 4.7,
            numReviews: 98,
            description: 'pisante bacana',
        },


        {
            //_id: '4',
            name: 'Yeezy 500 Utility Black',
            slug: 'yeezy-500-utility black', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezy 500',
            image: '/images/YEEZY500UTILITYBLACK/backside.jpg',
            price: 2990,
            countInStock: 0,
            brand: 'Adidas Yeezy',
            rating: 4.2,
            numReviews: 27,
            description: 'pisante bacana',
        },

        {
            //_id: '4',
            name: 'Yeezy 350 Pirate Black',
            slug: 'yeezy-350-pirate-black', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezy 350',
            image: '/images/YEEZYBOOST350PIRATEBLACK2016/frontside.jpg',
            price: 3199,
            countInStock: 12,
            brand: 'Adidas Yeezy',
            rating: 5,
            numReviews: 152,
            description: 'pisante bacana',
        },

        {
            //_id: '4',
            name: 'Yeezy 350 V2 Red',
            slug: 'yeezy-350-v2-red', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezy 350',
            image: '/images/YEEZYBOOST350V2RED/frontside.jpg',
            price: 3499,
            countInStock: 25,
            brand: 'Adidas Yeezy',
            rating: 5,
            numReviews: 252,
            description: 'pisante bacana',
        },

        {
            //_id: '4',
            name: 'Yeezy Power Calabasas Grey',
            slug: 'yeezy-power-calabasas-grey', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezy Power',
            image: '/images/YEEZYPOWERPHASECALABASASGREY/frontside.jpg',
            price: 1499,
            countInStock: 50,
            brand: 'Adidas Yeezy',
            rating: 4,
            numReviews: 72,
            description: 'pisante bacana',
        },

        {
            //_id: '4',
            name: 'Yeezy 700 Chocolate',
            slug: 'yeezy-700-chocolate', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezy 700',
            image: '/images/YEEZYBOOST750CHOCOLATE/frontside.jpg',
            price: 2679,
            countInStock: 24,
            brand: 'Adidas Yeezy',
            rating: 4.6,
            numReviews: 123,
            description: 'pisante bacana',
        },

        {
            //_id: '4',
            name: 'Sandália Havaiana Raíz',
            slug: 'havaiana-raiz', 
            category: 'Havaiana raíz',
            image: '/images/HAVAIANARAIZ/frontside.png',
            price: 10,
            countInStock: 2000,
            brand: 'Havaianas',
            rating: 3.0,
            numReviews: 1223,
            description: 'quebra o galho',
        },


    ],
};

export default data;