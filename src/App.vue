

<template>
  <div id="app">
    <div class="header">
      <h1>My TIC Finances</h1>
      <nav>
        <p>{{username}}</p>
        <button v-on:click="init" v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      
      <router-view></router-view> <!-- Duplicando footer and header -->
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>





<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
      username: "",
      email: "",
      dob: ""
    };
  },
  
  methods: {
    init: function () {
      //if (this.$route.name != "user") {
      //  let username = localStorage.getItem("current_username");
      //  this.$router.push({ name: "user", params: { username: username } });
      //}
    },
  },
  created: function () {
    this.username = this.$route.params.username;
    console.log(this.$route);
    let self = this;
    axios
      //.get("http://127.0.0.1:8000/user/info/"+this.username)
      .get("http://127.0.0.1:8000/user/info/"+"szapatao")
      .then((result) => {
        self.email = result.data.email;
        self.dob = result.data.dob;
        console.log(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  },
  //beforeCreate: function () {
  //  localStorage.setItem("current_username", "santi2020");
  //  localStorage.setItem("isAuth", true);
  //  this.$router.push({name:"user",params:{username:'santi2020'}})
  //},




  
}
</script>


<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: right ;
  align-items: center;
  font-size: 20px;
  margin-right: 10px;
}
.header nav p{
  margin-right:10px;
}
.header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
