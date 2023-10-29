const products = [
    // Nuestro array de  objeto de productos
    // Producto1
    {
        id:'1',
        name: 'Producto 1',
        price: 'Precio1',
        category: 'Categoria1',
        img:'buscarimg.com/ref1.jpg',
        stock: 25,
        description: 'Descripcion de producto 1'
    },
    // Producto2
    {
        id:'2',
        name: 'Producto 2',
        price: 'Precio2',
        category: 'Categoria1',
        img:'buscarimg.com/ref2.jpg',
        stock: 45,
        description: 'Descripcion de producto 2'
    },
    // Producto3
    {
        id:'3',
        name: 'Producto 3',
        price: 'Precio3',
        category: 'Categoria1',
        img:'buscarimg.com/ref3.jpg',
        stock: 10,
        description: 'Descripcion de producto 3'
    },
    // Producto4
    {
        id:'4',
        name: 'Producto 4',
        price: 'Precio4OK',
        category: 'Categoria2',
        img:'buscarimg.com/ref4.jpg',
        stock: 5,
        description: 'Descripcion de producto 4'
    },
    // Producto5
    {
        id:'5',
        name: 'Producto 5',
        price: 'Precio5',
        category: 'Categoria2',
        img:'buscarimg.com/ref5.jpg',
        stock: 5,
        description: 'Descripcion de producto 5'
    },
    // Producto6
    {
        id:'6',
        name: 'Producto 6',
        price: 'Precio6',
        category: 'Categoria2',
        img:'buscarimg.com/ref6.jpg',
        stock: 10,
        description: 'Descripcion de producto 6'
    },

]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })

}