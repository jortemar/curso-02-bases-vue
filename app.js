// COMENTAR SELECCIÓN --> Ctrl + k + c 
// DESCOMENTAR SELECCIÓN --> Ctrl + k + u

const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes)

// esto es un componente. Creado con options API
// hay otra forma de crear componentes, con compositions API
const app = Vue.createApp({
    
    data() {
        // objeto reactivo
        return {
            quotes, //cuando el nombre de la propiedad y su valor es el mismo se puede escribir así
            newQuote: 'Hola mundo' 
        }
    },
    methods: {
        // desestructurizamos el event obteniendo directamente la propiedad que nos interesa, charCode
        // addQuote({charCode}) {
        addQuote() {
            // como estamos utilizando modificador de evento (ver index.html) podemos prescindir
            // de charCode (comentamos esta línea y la original del método addQuote())
            // if ( charCode !== 13 ) return
            
            //push empuja la entrada al final. unshift lo hace al principio
            //coge el array de quotes y le inserta la nueva quote al principio
            this.quotes.unshift({
                quote: this.newQuote
            })

        }
    }
    
})

app.mount('#myApp')