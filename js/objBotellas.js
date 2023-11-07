const botellasLs = JSON.parse(localStorage.getItem('botellas')) || []

if(botellasLs.length === 0){
    const botellasObj = [
    {
        id: 1,
        name: 'Johnnie Walker Blue Label',
        licor: 'Whisky',
        img: '/IMAGENES/D_NQ_NP_2X_691874-MLC47573671184_092021-F.webp',
        price: '221.962',
        descrp: 'Un elisir para el paladar',
    },
    {
        id: 2,
        name: 'The Macallan 18 Double Cask Single Malt Whisky Estuche 700ml',
        licor: 'Whisky',
        img: '/IMAGENES/D_NQ_NP_2X_670290-MLA52467831363_112022-F.webp',
        price: '505.000',
        descrp: 'El Macallan Double Cask 18 años, un whisky de pura malta perfectamente equilibrado, madurado durante 18 años en barricas de roble sazonadas con jerez americano y europeo. El roble americano sazonado con jerez agrega una delicada vainilla a las sutiles especias del roble europeo, brindando un whisky con un sabor y carácter más dulce y cálido.',
    },
    {
        id: 3,
        name: 'Vino Eco Blanco 1 Lt Termidor Vinos En Tetra Brick',
        licor: 'Vino',
        img: '/IMAGENES/D_NQ_NP_2X_974599-MLA69872535885_062023-F.webp',
        price: '1.738',
        descrp: 'Un vino de mesa producido por el Grupo Peñaflor, quienes tienen unas bodegas destacadas a nivel internacional. Desde hace tiempo, el vino tinto Termidor se hace presente en la mesa de las familias argentinas, pero también es uno de los vinos más consumidos en todo el mundo',
    },
    {
        id: 4,
        name: 'Tequila Don Julio Blanco 750ml',
        licor: 'Tequila',
        img: '/IMAGENES/D_NQ_NP_2X_905237-MLU70638594960_072023-F.webp',
        price: '68.000',
        descrp: 'Todo el tequila Don Julio proviene de plantas 100% puras de agave Blue Weber. Cada gota que vive dentro de cada botella de tequila Don Julio nace en Los Altos de Jalisco, donde el microclima y el suelo de arcilla roja rica en minerales permiten que florezca la planta de agave azul.',
    },
    {
        id: 5,
        name: 'Tequila Jose Cuervo Especial gold dorado 750ml',
        licor: 'Tequila',
        img: '/IMAGENES/D_NQ_NP_2X_750780-MLA50528575524_062022-F.webp',
        price: '15.233',
        descrp: 'Un aroma a madera, nueces y avellanas; posee un sabor suave y dulce, de color ámbar, elaborado con el mejor agave azul recogido a mano, cocido lentamente, prensado y destilado, no es un proceso rápido sin embargo le otorga esa característica única',
    },
    {
        id: 6,
        name: 'Vino Cordero Con Piel De Lobo Mb 750ml De Mosquita Muerta',
        licor: 'Vino',
        img: '/IMAGENES/vino-malbec-mosquita-muerta-cordero-con-piel-de-lobo-750-ml.jpg',
        price: '1.789',
        descrp: 'Un Malbec joven muy bien elaborado, diferente por su aroma y sabor a frutos maduros. Con una acidez justa deja en boca un picor agradable con un final reforzado por su paso por madera.',
    },
    {
        id: 7,
        name: 'Vino Angelica Zapata Malbec Alta 750cc',
        licor: 'Vino',
        img: '/IMAGENES/D_NQ_NP_2X_680691-MLA40568816454_012020-F.webp',
        price: '14.386',
        descrp: 'Presentado en una elegante botella, este vino es perfecto para compartir en ocasiones especiales o simplemente para disfrutar de una buena cena en casa. Su origen argentino y la cuidada selección de uvas de la región de Mendoza garantizan un sabor auténtico y una calidad excepcional.',
    },
    {
        id: 8,
        name: 'Whiskey Jameson Irlandés 700ml',
        licor: 'Whiskey',
        img: '/IMAGENES/D_NQ_NP_2X_687477-MLA51087858265_082022-F.webp',
        price: '9.889',
        descrp: 'Color dorado cálido. Aroma Suave y fragante, con notas de madera tostada y jerez. Su sabor es excepcionalmente suave, dulce y complejo. Delicada fusión de sabores tales como vainilla, madera de roble, miel, complementados por especias, caramelo y nuez.',
    },
    {
        id: 9,
        name: 'Vino Andeluna Malbec Rose Edicion Limitada 750ml',
        licor: 'Vino',
        img: '/IMAGENES/D_NQ_NP_2X_779684-MLA44580814642_012021-F.webp',
        price: '2.979',
        descrp: 'Honramos con pasión el suelo, la altura, Los Andes y la Luna. La altura precisa, el aire de la cordillera, el sol, el trabajo de nuestra gente dan a estos vinos elegancia, balance, amabilidad. Este vino representa la magia de su entorno, la expresión de su lugar.',
    },
    {
        id: 10,
        name: 'Tequila blanco silver Jose Cuervo Especial 750ml',
        licor: 'Tequila',
        img: '/IMAGENES/D_NQ_NP_2X_728072-MLA45658116404_042021-F.webp',
        price: '15.750',
        descrp: 'Jose Cuervo Silver se dio a conocer a través de la muy famosa y mexicana bebida “Margarita”. Jose Cuervo es un tequila premium color blanco, perfecto para mezclar y preparar diferentes bebidas. Conocido en el mundo como Cuervo Gold, Jose Cuervo Especial se obtiene al ser reposado en barricas dobles logrando obtener un extraordinario suave y dulce sabor, con aroma a madera, nueces y avellanas.',
    },
]
localStorage.setItem('botellas', JSON.stringify(botellasObj))
}