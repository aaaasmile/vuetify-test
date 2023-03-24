# vuetify-test

Ho creato questo progetto per testare vuetify.
Ho cercato di creare una repository con tutte le risorse locali scaricando tutti i fari fonts e css.
In questa repository ho fatto un upgrade di vuetify e vue da 2 a 3.1

## Particolarità della versione 3
Per trovare i files della distribuzione di vue sono andato su questo link:
https://unpkg.com/browse/vue@3.2.47/dist/  

Per vuetify sul sito si trova il link del cdn che è:  
https://cdn.jsdelivr.net/npm/vuetify@3.1.11/dist/vuetify.min.css
https://cdn.jsdelivr.net/npm/vuetify@3.1.11/dist/vuetify.min.js

Per vue router esso ha una home page per proprio conto e il dn è:
https://unpkg.com/vue-router@4.0.15/dist/vue-router.global.js

Nota che vue e vue router hanno entrambi una versione per l'ambiente prod, mentre vuetify è già in minified.

Per la conversione vedi il file main.js. Non ci sono import sia per vue che per vuetify.
Essi hanno una variabile globale che viene inserita nel file index.html.  Qui abbiamo:
- Vue.createApp
- VueRouter.createRouter
- Vuetify.createVuetify

Poi questo pezzo di codice molto intuitivo:

    app.use(vuetify)
    app.use(router)
    app.mount('#app')

Per quanto riguarda il componente login esso non ha più il nome ma è un componente anonimo.
Template nel file js funziona senza problemi come nella versione 2, quindi si può fare uno sviluppo
con 'Vue Template in Js' come nella versione 2. 

## Store
Per lo store avevo usato in precedenza vuex che ora però non viene più sviluppato.
Per le nuove app viene consigliato Pinia: https://pinia.vuejs.org/ e https://github.com/vuejs/pinia
Pinia ha la dipendenza di VueDemi che ho incluso globalmente.