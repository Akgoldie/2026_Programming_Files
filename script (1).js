Vue.component("profile", {
    props: ["myuser"],
    template: `
            <div class="card">
               <h1>Hello {{ myuser.username }}, this is my first component!</h1>
               <h2>{{ count }}</h2>
               <h2>My password is {{ myuser.password }}</h2>
               <h2>Learning {{ myuser.course }} </h2>
               <slot></slot>
               <button @click="addCount">Add one</button>
            </div>
               `,
    data: function(){
        return {
            var2: "Hello from data of component",
            count: 0
        }
    },
    methods: {
        addCount: function(){
            this.count++;
            this.$emit('emit-count', this.var2)
        }
    },
    // watch: {
    //     var2: function(){

    //     }
    // }

})

const app = new Vue({
    el: "#app",
    data: {
        var1: "hello Vue",
        globalCount: 0,
        users: []
    },
    mounted: function(){
        console.log(this.var1)
        // load information from backend
        setTimeout(()=> {
            this.users = [
            { id: 1, username: "Adarsh", password: "12345", course: "MAD I", desc: "random user 1"},
            { id: 2, username: "Vijay", password: "23451", course: "MAD II", desc: "random user 2"},
            { id: 3, username: "Ravi", password: "34512", course: "PDSA", desc: "random user 3"},
            { id: 4, username: "Sumit", password: "45123", course: "DBMS", desc: "random user 4"},
            { id: 5, username: "Arinjay", password: "51234", course: "ADL", desc: "random user 5"},
            { id: 6, username: "Maneesh", password: "54321", course: "JAVA", desc: "random user 6"},
        ]
        }, 2000)
        
    },
    methods: {
        addGlobal: function(){
            this.globalCount++;
        }
    }
})