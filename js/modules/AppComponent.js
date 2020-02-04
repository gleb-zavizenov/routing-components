export default {
    template: `
    <section>
        <h1>This is the app page</h1>

        <form id="my-form">
            <label for="name">Enter your name: </label>
            <input v-model="user" type="text" name="username" required placeholder="username">
            <br>
            <label for="password">Enter your password: </label>
            <input v-model="password" type="password" name="password" required placeholder="password">
            <br>
            <input @click.prevent="submitUserData" type="submit" value="Sign Up / Log In">
        </form>
    </section>
    `,

    data: function(){
        return {
            user: "",
            password: ""
        }
    },

    methods: {
        submitUserData(){
            // do a fetch here using POST method
            console.log('hit the API Pan is asking for, which should be in a root VUe instace!');

            document.querySelector('form').reset();

            this.user = "";
            this.password = "";
        }
    },  

    created: function(){
        console.log('app component is rendered!')
    }
}