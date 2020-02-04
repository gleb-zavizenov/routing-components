export default {
    template: `<h1>Welcome to my super awesome app!</h1>`,

    created: function(){
        console.log('oursplash component rendered!');
    },

    data: function(){
        return{
            message: 'Welcome to my super awesome app!'
        }
    }
}