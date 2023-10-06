const {createApp} = Vue;
createApp({
    data(){
        return{
            emails:[],
            valore: 10,
            counter: 0
        }
    },

    methods:{

        getApi(){

            for (let i = 0; i < this.valore; i++){

                axios
                
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
        
                .then((risposta)=>{
    
                    this.emails.push(risposta.data.response);

                    this.counter++;

                    if(this.counter === this.valore){
                        this.generazione = true;
                    }
                })

                
                .catch((errore)=>{
                    console.log(errore)
                });
            }
            
            
        },
    },

    computed:{
        generazione(){
            return this.counter === this.valore;
        },
    },

    mounted(){
        this.getApi();
    }

}).mount('#app')