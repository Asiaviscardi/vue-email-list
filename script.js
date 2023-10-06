const {createApp} = Vue;
createApp({
    data(){
        return{
            emails:'',
            valore: 10
        }
    },

    methods:{

        getApi(){

            for (let i = 0; i < this.valore; i++){

                axios
                
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
        
                .then((risposta)=>{
    
                    this.emails += risposta.data.response + ',';
                })
    
                .catch((errore)=>{
                    console.log(errore)
                });
            }

        },
    },

    mounted(){
        this.getApi();
    }

}).mount('#app')