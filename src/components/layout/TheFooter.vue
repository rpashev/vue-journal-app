<template>
  <footer>
    <ul class="footer__prompts">
      <li>
        <router-link to="/sign-up">Free Sign Up</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/go-pro">Go Pro</router-link>
      </li>
    </ul>
    <div class="footer__info">
      <ul class="footer__info-group">
        <li>
          <router-link to="/sign-up">What is a Journal?</router-link>
        </li>
        <li>
          <router-link to="/sign-up">What to write about?</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Reflective Journal</router-link>
        </li>
      </ul>
      <ul class="footer__info-group">
        <li>
          <router-link to="/sign-up">Dream Journal</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Travel Journal</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Five Year Journal</router-link>
        </li>
      </ul>
    </div>
    <p>Copyright Journal App Inc. 2021</p>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  height: 12rem;
  width: 100%;
  background: #2f3940;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__info {
  display: flex;
}
ul {
  list-style: none;
  margin-top: 0;
}
li {
  margin: 0.2rem;
}
a {
  font: inherit;
  margin: 0 2rem;
  text-decoration: none;
  color: #fff;
}
a:active,
a:hover,
a.router-link-active {
  color: rgb(155, 190, 190);
}
p {
  position: absolute;
  font-size: 0.8rem;
  bottom: 0.5rem;
  color: #fff;
  opacity: 0.4;
}
</style>
