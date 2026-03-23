// define components
const home = { template: "<h1>This is home view</h1>"} // /home
const about = { template: "<h1>This is about view</h1>"} // /about
const profile = { 
    template: `<div>
        <h2>This is profile view</h2>
        Username: <input type="text" v-model="username">
        Role: <input type="text" v-model="role">
        <button @click="naviGate">Go</button>
        {{message}}
        </div>`,
    data: function(){
        return {
            username: "",
            role: "",
            message: ""
        }
    },
    methods: {
        naviGate: function(){
            if(this.role === "admin" || this.role === "user"){
                this.$router.push({name: "userName", params: {username: this.username}, query: {role: this.role}})
            }
            else {
                this.message = "Incorrect role, only admin or user is allowed"
            }
            
        }
    }

} // /profile
const user = { 
    template: `
    <div>
        <h1>Hello I am {{ $route.params.username }} !</h1>
        <h1>I have role: {{ $route.query.role }} !</h1>
    </div>
    `,
    mounted: function(){
        console.log(this.$route.params.username)
    }
}
const users = {
    template: `
        <div>      
            <router-link to="/users/dashboard">Dashboard</router-link> |
            <router-link to="/users/activities">Activities</router-link>
            <h1>This is Users view</h1>
            <router-view></router-view>
        </div>
    `
}
const dashboard = { template: "<h2>This is dashboard view</h2>"} 
const activities = { 
    template: `
    <div>
        <h2>This is activity view</h2>
        <button @click="goHome">Home</button>
    </div>    
    
    `,
    methods: {
        goHome: function(){
            this.$router.push("/home")
        }
    }
    

} 

// mapping with routes
const routes = [
    {path: "/home", component: home},
    {path: "/about", component: about},
    {path: "/profile", component: profile},
    {path: "/user/:username", name: "userName", component: user},
    {
        path: "/users", 
        component: users,
        children: [
            { path: "dashboard", component: dashboard},
            { path: "activities", component: activities},
        ]
    }    
]

// create router object 

const router = new VueRouter({
    // routes: routes
    routes
})

// Vue.component("landing", {
//     template: `
//     <div>
//         <h2>This is landing component</h2>
//         <router-view></router-view>
//     </div>
//     `
// })

const app = new Vue({
    el: "#app",
    // router: router 
    router
})

params = {
    username: "adarsh"
}


// /users 
// component 1

// /users/profile 
// component 1.1
// /users/about 

// component  1.2


// @app.route("/login")
// finction



//    return redirect("/dashboard")








