// COMENTAR SELECCIÓN --> Ctrl + k + c 
// DESCOMENTAR SELECCIÓN --> Ctrl + k + u

const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde app.js </p>
    // `

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola Mundo')
            this.author = 'José Ortega'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }

    // data sería como el objeto. Sus propiedades estarían en el return (quote y author).
    // Debajo ponemos los métodos que vamos a utilizar para cambiar las propiedades
    // En este caso hemos definido dos:
    // changequote() hace referencia al evento click (se activa al pulsar el botón)
    // capitalize() pone en mayúsuculas el quote. Se llama dentro de changequote()
    // para que también se ejecute al pulsar el botón
})

app.mount('#myApp')

