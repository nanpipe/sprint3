<template>
  <div id="UserCreate" class="auth_user">
    <div class="container_auth_user">
      <h2>Autenticarse</h2>
      <form  v-on:submit.prevent="processAuthUser">
        <input class="ancho" type="text" v-model="user_in.username" placeholder="Username" />
        <br />
        <input
            class="ancho"
          type="password"
          v-model="user_in.password"
          placeholder="Password"
        />
        <br />
        <input class="ancho" type="text" v-model="user_in.email" placeholder="Email" />
        <br />
        <input class="ancho" type="text" v-model="user_in.dob" placeholder="Date of Birth" />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>





<script>
import axios from "axios";
export default {
  name: "UserCreate",
  data: function () {
    return {
      user_in: {
        username: "",
        password: "",
        email: "",
        dob: ""
      },
    };
  },
  methods: {
    processAuthUser: function () {



      var self = this;
      console.log(self.user_in);
      axios.post("http://127.0.0.1:8000/user/create/?username=" + self.user_in.username + "&password=" + self.user_in.password 
                + "&email="+ self.user_in.email + "&dob=" + self.user_in.dob )
        .then((result) => {
          alert("Autenticación Exitosa");
          self.$emit("log-in", self.user_in.username);
          this.$router.push('user/'+self.user_in.username);
        })
        .catch((error) => {
          if (error.response.status == "404")
            alert("ERROR 404: Usuario no encontrado.");
          if (error.response.status == "403")
            alert("ERROR 403: Contraseña Erronea.");
        });
    },
  },
};
</script>




<style>

.formClass{
    width: 10   0%;
}

.ancho{

    width: 100%;
}

.auth_user {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container_auth_user {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auth_user h2 {
  color: #283747;
}

.auth_user form {
  width: 60%;
}
.auth_user input {
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid #283747;
}

.auth_user button {
  width: 100%;
  height: 40px;
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}

.auth_user button:hover {
  color: #e5e7e9;
  background: crimson;
  border: 1px solid #283747;
}
</style>