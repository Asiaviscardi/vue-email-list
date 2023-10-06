const {createApp} = Vue;
createApp({
    data(){
        return{
            email:''

        }
    },

    methods:{

        getApi(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    
            .then((risposta)=>{

                this.email = risposta.data.response

                console.log(risposta.data.response)
    
            })
    
            .catch((errore)=>{
                console.log(errore)
            })
        }
    },

    mounted(){
        this.getApi();
    }

}).mount('#app')