const botellasLs = JSON.parse(localStorage.getItem('botellas')) || []

if(botellasLs.length === 0){
    const botellasObj = [
    {
        id: 1,
        name: 'Johnnie Walker Blue Label',
        licor: 'whisky',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_691874-MLC47573671184_092021-F.webp',
        price: '221.962',
        descrp: '',
    },
    {
        id: 2,
        name: 'he Macallan 18 Double Cask Single Malt Whisky Estuche 700ml',
        licor: 'whisky',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_670290-MLA52467831363_112022-F.webp',
        price: '505.000',
        descrp: '',
    },
    {
        id: 3,
        name: 'Fernet Branca 750cc',
        licor: 'Aperitivo',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_950861-MLA44885730605_022021-F.webp',
        price: '4.678',
        descrp: '',
    },
    {
        id: 4,
        name: 'Tequila Don Julio Blanco 750ml',
        licor: 'Tequila',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_905237-MLU70638594960_072023-F.webp',
        price: '68.000',
        descrp: '',
    },
    {
        id: 5,
        name: 'Tequila Jose Cuervo Especial gold dorado 750ml',
        licor: 'Tequila',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_750780-MLA50528575524_062022-F.webp',
        price: '15.233',
        descrp: '',
    },
    {
        id: 6,
        name: 'Vino Cordero Con Piel De Lobo Mb 750ml De Mosquita Muerta',
        licor: 'Vino',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_942605-MLA51527680357_092022-F.webp',
        price: '1.789',
        descrp: '',
    },
    {
        id: 7,
        name: 'Ron Flor De Caña Centenario 12 Años X 750cc',
        licor: 'Ron',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_733930-MLA51757381093_092022-F.webp',
        price: '36.743',
        descrp: '',
    },
    {
        id: 8,
        name: 'Grey Goose Clásico Vodka Francés Importado Destilado 375ml',
        licor: 'Vodka',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_667413-MLA48849469252_012022-F.webp',
        price: '28.006',
        descrp: '',
    },
    {
        id: 9,
        name: 'Vodka Absolut Clasica 700cc',
        licor: 'Vodka',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_888785-MLA49334946933_032022-F.webp',
        price: '8.999',
        descrp: '',
    },
    {
        id: 10,
        name: 'Aperitivo Aperol 750ml',
        licor: 'Aperitivo',
        img: 'C:\Users\tomyb\Desktop\DISEÑO WEB\Proyecto 2 - Cocteleria\IMAGENES\D_NQ_NP_2X_653025-MLA31576823324_072019-F.webp',
        price: '2.756',
        descrp: '',
    },
]
localStorage.setItem('botellas', JSON.stringify(botellasObj))
}