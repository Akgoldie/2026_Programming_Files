const app = new Vue({
    el: "#app",
    data: {
        post: null,
        isClicked: false,
        posts: [],
        formData: {
            title: "My dummy post",
            description: "This is to understand post creation with fetch",
            userId: 3
        }
    },
    mounted(){
        this.getPosts()
    },
    methods: {
        getPosts: function(){
            fetch("https://jsonplaceholder.typicode.com/posts") // returns promise
            .then((resp) => {
                resp.json()
            }) // .then resolves the promise returns Response Object
            .then((posts) => {
                this.posts = posts
            }) // .then resolves resp.json()
            .catch((err)=> console.log(err))
        },
        viewPost: function(post_id){
            fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`) // returns promise
            .then((resp) => resp.json()) // .then resolves the promise returns Response Object
            .then((post) => {
                this.post = post;
                this.isClicked = true
            })
            .catch((err)=> console.error(err))
        },
        closePost: function(){
            this.isClicked = false
        },
        createPost: function(){
            fetch("https://jsonplaceholder.typicode.com/posts/${post_id}", {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization-Token": "token-1234"
                },
                body: JSON.stringify(this.formData)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
    }
})

// fetch ---> promise -- then --> Response Object --> response.json() ---> promise --> then ---> data
// https://jsonplaceholder.typicode.com/posts/5

// {
//     username: "Adarsh",
//     user_id: 123  
// }

// "{'username':'Adarsh', 'user_id': '123'}"
 
// 404, 500, 403, 401, 302 -- http error
// network - internet connection is lost , CORS