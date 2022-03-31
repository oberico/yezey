/*  Aqui estamos criando a parte de dados do produto */
const data ={
    products: [
        {
            name: 'Yeezy 500 Blush',
            slug: 'yeezy-500-blush', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500BLUSH/backside.jpg',
            price: 500,
            countIsStock: 10,
            brand: 'Adidas Yezzy',
            rating: 4.3,
            numReviews: 12,
            description: 'pisante bacana',
        },

        {
            name: 'Yeezy 500 Salt',
            slug: 'yeezy-500-salt', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500SALT/backside.jpg',
            price: 500,
            countIsStock: 10,
            brand: 'Adidas Yezzy',
            rating: 4.2,
            numReviews: 12,
            description: 'pisante bacana',
        },

        {
            name: 'Yeezy 500 Super Moon ',
            slug: 'yeezy-500-super-moon', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500SUPERMOON/backside.jpg',
            price: 500,
            countIsStock: 10,
            brand: 'Adidas Yezzy',
            rating: 4.1,
            numReviews: 12,
            description: 'pisante bacana',
        },

        {
            name: 'Yeezy 500 Utility Black',
            slug: 'yeezy-500-utility black', /*slug é o que vai como chave unica e você vê na URL*/
            category: 'Yeezzy 500',
            image: '/images/YEEZY500UTILITYBLACK/backside.jpg',
            price: 500,
            countIsStock: 10,
            brand: 'Adidas Yezzy',
            rating: 4.7,
            numReviews: 12,
            description: 'pisante bacana',
        },
    ],
};

export default data;