/* Instanciar nuestras dependencias */
console.clear();
import express from "express"
import handlebars from "express-handlebars"
import {faker} from '@faker-js/faker'
import { generar } from "./fake.js"

/* Declarar nuestras constantes */
const app = express()
app.use(express.urlencoded({ extended: true }));


let productos = []

// Establecemos la configuración de handlebars
app.use(express.static('./handlebars'));

app.engine(
    "hbs",
    handlebars.engine  ({
        extname: "*.hbs",
        defaultLayout: "index.hbs",
    })
    );
    
    app.set('view engine', "hbs");
    app.set("views", "./views");
    
    app.get('/', (req, res) => {
        res.render('datos', )
        
    })
    
    app.get('/tabla', (req, res) => {
        // console.log(productos.length)
        res.render('tabla', {productos});
    });
    app.post('/datos', (req, res) => {
        const {nombre, precio, url} = req.body
        const producto = {
            'id': id,
            'nombre':nombre,
            'precio':precio,
            'url':url
        }
        productos.push(producto_test)
        console.log(productos)
        res.redirect('/tabla')
    });
    
    app.get('/api/productos_test', (req, res) =>{
        console.log(generar)

        res.render('api', {generar} )
        
    })
    

    app.post('/api', (req, res)=>{
        const {id, nombre, precio, foto} = req.body
        const producto = {
            'id': id,
            'nombre':nombre,
            'precio':precio,
            'foto':foto
        }
        generar.push(producto)
        console.log(producto)
        res.redirect('/api')
})







// app.get('/api/productos_test', (req, res) => {
    //     const cant = Number(req.query.cant) || CANT_PRODUCTOS
    //     res.json(generarProductos(cant))
    //     console.log(generarProductos(cant))
    // })
    
    // let objeto = JSON.parse(productos_test)
    
    /* Configuración del servidor */
    
    const PORT = 8080
    const server = app.listen(PORT, () => {
        console.log(PORT,' ||---> Server ON, in port ||---> ', PORT);
    })
    server.on('error', error => console.log('Error en el servidor', error));