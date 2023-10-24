const botellasLs = JSON.parse(localStorage.getItem('recetas')) || []


if (botellasLs.length === 0){
const recetasObj = [
    {
        id: 1,
        name: 'Margarita',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Margarita.png',
        ingred: {
            ingred1: '3.5 cl de Tequila',
            ingred2: '2 cl de Cointreau',
            ingred3: '1.5 cl de Zumo de lima',
            ingred4: '',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 2,
        name: 'Negroni',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Negroni-e1414258652370.jpg',
        ingred:{
            ingred1: '3 cl de Ginebra',
            ingred2: '3 cl de Campari',
            ingred3: '3 cl de Vermouth Rojo',
            ingred4: '',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 3,
        name: 'Pisco Sour',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Pisco-Sour.png',
        ingred:{
            ingred1: '4,5 cl de Pisco',
            ingred2: '3 cl de Zumo de limón',
            ingred3: '2 cl de Sirope de azúcar',
            ingred4: '1 cucharadita de Clara de huevo',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 4,
        name: 'Espresso Martini',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Espresso-Martini.jpg',
        ingred:{
            ingred1: '5 cl de Vodka',
            ingred2: '1 cl de Kalhua',
            ingred3: '1 cucharadita de Sirope de azucar',
            ingred4: '1 Expreso Fuerte',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 5,
        name: 'Caipirinha',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Caipirinha.jpg',
        ingred:{
            ingred1: '5 cl de Cachaça',
            ingred2: '1/2 de Lima cortada en cuartos',
            ingred3: '2 cucharillas de Azúcar',
            ingred4: '',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 6,
        name: 'Bloody Mary',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Bloody-Mary.jpg',
        ingred:{
            ingred1: '4.5 cl de Vodka',
            ingred2: '9 cl de Zumo de tomate',
            ingred3: '1.5 cl de Zumo de limón',
            ingred4: '2 Dashes (golpes) de Salsa Perrins (Worchestershire)',
            ingred5: '1 Dash (golpe) de Tabasco'},
        prepa: '',
    },
    {
        id: 7,
        name: 'Moscow Mule',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Moscow-Mule.jpg',
        ingred:{
            ingred1: '4,5 cl de vodka',
            ingred2: '0,5 cl de Zumo de lima',
            ingred3: '12 cl de ginger beer',
            ingred4: '',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 8,
        name: 'Piña Colada',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Piña-Colada.jpg',
        ingred:{
            ingred1: '3 cl de Ron blanco',
            ingred2: '3 cl de Leche de coco',
            ingred3: '9 cl de Zumo de Piña',
            ingred4: '',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 9,
        name: 'Dirty Martini',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Dirty-Martini.png',
        ingred:{
            ingred1: '6 cl de Vodka',
            ingred2: '1 cl de vermouth blanco seco',
            ingred3: '1 cl de aceite de aceitunas',
            ingred4: '',
            ingred5: ''},
        prepa: '',
    },
    {
        id: 10,
        name: 'Mojito',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\Mojito.png',
        ingred:{
            ingred1: '4 cl de Ron cubano',
            ingred2: '3 cl de Zumo de lima',
            ingred3: '6 hojas de Hierbabuena o menta',
            ingred4: '2 cucharillas de Azúcar blanco',
            ingred5: 'Llenar de Soda'},
        prepa: '',
    },
]
 localStorage.setItem('recetas', JSON.stringify(recetasObj))
}