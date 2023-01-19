

<template>
  <div class="background"></div>
  <nav>    
    <router-link to="/about">A Propos</router-link>
  </nav>
  <router-view id="content"/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
 
  
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.background{

  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: url("assets/background.jpg");  
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(6px);


}

#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: whitesmoke;
}







</style>
