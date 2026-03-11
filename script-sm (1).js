const app = new Vue({
    el: "#app",
    data: {
        newTask: "",
        info: "Please enter the taskname in the field above",
        infoColor: {color: "blue"},
        tasks: [] //(filter)
    },
    methods: {
        addTask: function() {
            let thisTask = {};
            thisTask.taskname = this.newTask;
            thisTask.completed = false;
            this.tasks.push(thisTask)
            console.log(thisTask)
        },
        markComplete: function(index){
            // task --> completed ---> set --> true
            this.tasks[index].completed = true;

        }
    },
    computed:{
        totalTask: function(){
            return this.tasks.length;
        },
        completedTask: function(){
            let completedArr = this.tasks.filter((task) => task.completed)
            console.log(completedArr)
            return completedArr.length
        },
        pendingTask: function() {
            // let completedArr = this.tasks.filter((task) => task.completed == false)
            // console.log(completedArr)
            // return completedArr.length

            return this.totalTask - this.completedTask;
        }
    },
    watch: {
        newTask: function(newVal){
            if(newVal.length >= 6){
                this.info = "Good to go! add task";
                this.infoColor = {color: "green"};
            }
            else{
                this.info = "the task should be atleast 6 characters";
                this.infoColor = {color: "red"};
            }
        }
    }
}) 


// task1: {
//     "taskname": "task 1",
//     "completed": false
// }

1. 



