import celu01 from './img/celular01.jpg'
import celu02 from './img/celular02.png'
import celu03 from './img/celular03.png'
import celu04 from './img/celular04.jpg'
import monitor01 from './img/monitor01.jpg'
import monitor02 from './img/monitor02.jpg'
import monitor03 from './img/monitor03.jpg'
import memoria01 from './img/memoria01.jpg'
import memoria02 from './img/memoria02.jpg'
import memoria03 from './img/memoria03.jpg'

const productos = [
    // Nuestro array de  objeto de productos
    // Producto1
    {
        id:'1',
        name: 'Samsung Galaxy A04',
        price: '112.000',
        categoryId:'1',
        category: 'Celulares',
        img: celu01, 
        stock: 25,
        description: 'El celular Samsung Galaxy A04s posee un moderno y atractivo diseño en color verde que querrás tener en tus manos. Su pantalla envolvente de 6,5 pulgadas y resolución HD+ está pensada para que puedas conectarte con amigos, realizar transmisiones en vivo, y disfrutar de todas tus series y películas favoritas en una calidad excelente sin perderte de nada.'
    },
    // Producto2
    {
        id:'2',
        name: 'Celular Motorola G13',
        price: '110.000',
        categoryId:'1',
        category: 'Celulares',
        img: celu02,
        stock: 35,
        description: 'Celular. Pantalla con tecnologia IPS de 6.528" (20:9), resolucion 720 x 1600 HD+, 269ppi, HiD, 90 Hz. Procesador Mediatek Helio G85 Octa core (2 Ghz). Almacenamiento 64 Gb (expandible hasta 512Gb) / RAM 4 Gb. Camara "Principal: 50 MP (74.26) F1.8Angular y profundidad: 2MP (78) F2.4Macro: 2MP (80.1) F2.4" / Camara frontal 8MP (78) F2.0. Conexiones: Wi Fi 802.11 a/b/g/n/ac/k/v/r/u - WIFI5 (2.4 y 5Ghz). Bluetooth 5.1. GPS, AGPS, LTEPP, SUPL,Glonass, Galileo. Lector de tarjetas Micro SD. USB C 2.0. Entrada para auricular de 3.5mm. Sistema operativo Android 13. Bateria de 5000 mAh. Sensores: acelerometro, de proximidad, brujula, giroscopio, huella dactilar, luz ambiente, desbloque facial. Radio FM.'
    },
    // Producto3
    {
        id:'3',
        name: 'Celular Motorola G32',
        price: '150.000',
        categoryId:'1',
        category: 'Celulares',
        img: celu03,
        stock: 10,
        description: 'Te presentamos el Motorola Moto G32 con un procesador Octa-Core 2.4 GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 50+8+2 MP.'
    },
    //PRODUCTO 4
    {
        id:'4',
        name: 'Celular Xiaomi Redmi Note 11',
        price: '133.000',
        categoryId:'1',
        category: 'Celulares',
        img: celu04,
        stock: 12,
        description: 'El celular Xiaomi Redmi Note 11 posee un diseño elegante, atractivo y moderno. Cuenta con una pantalla de 6,43 pulgadas, con la que podrás ampliar tu visión y mirar todo lo que te estabas perdiendo.'
    },
    // Producto5
    {
        id:'5',
        name: 'Monitor Gamer Samsung 24”',
        price: '115.000',
        categoryId:'2',
        category: 'Monitores',
        img: monitor01,
        stock: 4,
        description: 'El monitor Samsung LF24T350FHLCZB de 24 pulgadas cuenta con resolución Full HD (1920 x 1080 píxeles) de formato widescreen 16:9 y un contraste 1000:1.'
    },
    // Producto6
    {
        id:'6',
        name: 'Monitor Gamer Samsung  22”',
        price: '100.000',
        categoryId:'2',
        category: 'Monitores',
        img: monitor02,
        stock: 10,
        description: 'El monitor gamer Samsung LF22T350FHLCZB de 22 pulgadas cuenta con resolución Full HD (1920 x 1080 píxeles) de formato widescreen 16:9 y un contraste 1000:1.'
    },
    // Producto6
    {
        id:'7',
        name: 'Monitor LG 27” Full HD',
        price: '260.000',
        categoryId:'2',
        category: 'Monitores',
        img: monitor03,
        stock: 3,
        description: 'El monitor LG 27GL650F de 27 pulgadas cuenta con resolución Full HD (1920 x 1080 píxeles) de formato widescreen 16:9. ideal para jugar todos tus juegos favoritos y trabajar en lo que más te gusta.'
    },

    {
        id:'8',
        name: 'MEMORIA 16GB DDR5 5600 ADATA TRAYNON',
        price: '80.000',
        categoryId:'3',
        category: 'Memorias',
        img: memoria01,
        stock: 15,
        description: `Memory Type DDR5
        Form Factor U-DIMM
        Capacity 16GB
        Speeds 5600
        CAS Latencies 46
        Operating Voltage 1.1V
        Operating Temperature 0°C to 85°C`
    },
    {
        id:'9',
        name: 'MEMORIA 16GB DDR5 6000 PNY XLR8 GAMING MAKO BLACK EPIC-X RGB',
        price: '115.000',
        categoryId:'3',
        category: 'Memorias',
        img: memoria02,
        stock: 8,
        description: `Memory Type DDR5 Unbuffered DIMM
        Capacity 16GB
        Frequency Speed (JEDEC) 6000MHZ (PC-48000)
        CAS Latency CL38
        Voltage 1.3V
        XMP Support Yes
        Speed Compatibility 4800MHz-6000MHz
        Warranty Limited Lifetime`
    },
    {
        id:'10',
        name: 'MEMORIA 16GB (2X8GB) DDR4 3600 LEXAR HADES RGB',
        price: '50.000',
        categoryId:'3',
        category: 'Memorias',
        img: memoria03,
        stock: 20,
        description: `Marca Lexar
        Tipo DDR4
        Conector DIMM
        Disipador Si
        Retroiluminación RGB
        Color Negro`
    },

]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })

}

export const getProductosPorCategoria = (category) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos.map(prod => prod.categoryId === category))
        },500)
    })
}