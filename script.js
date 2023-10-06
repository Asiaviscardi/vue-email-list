const {createApp} = Vue;
createApp({
    data(){
        return{

        }
    },

    methods:{

        getApi(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    
            .then((risposta)=>{

                console.log(risposta)
    
            })
    
            .catch((errore)=>{
                console.log(errore)
            })
        }
    }

}).mount('#app')