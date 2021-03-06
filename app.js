const app = Vue.createApp({
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: "johndoe@gmail.com",
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        getUser(){
            axios.get('https://randomuser.me/api')
            .then(response => {
                const data = response.data.results
                this.firstName =  data[0].name.first
                this.lastName = data[0].name.last
                this.email = data[0].email
                this.gender = data[0].gender
                this.picture = data[0].picture.large
            })
           
        }
    }
})

app.mount('#app')