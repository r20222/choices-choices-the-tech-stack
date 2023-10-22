<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  
</script>

<template>
  <header>
      <nav>
        <img src="/public/Ocean-Cleanup-Logo-Dark.png" alt="logo of The ocean cleanup">
        <ul>
            <li><a href="https://theoceancleanup.com/" class="nav-link"><span>Home</span></a></li>
            <li><RouterLink class="nav-link" to="/"><span>Dashboard</span></RouterLink></li>
            <li><RouterLink class="nav-link" to="/oceanSystem"><span>Ocean System</span></RouterLink></li>
            <li><a href="/" class="nav-link"><span>Our Technology</span></a></li>
            <li><a href="/" class="nav-link"><span>Economic Impact</span></a></li>
            <li><a href="/" class="nav-link"><span>Plastic Sources</span></a></li>
            <li><a href="/" class="nav-link"><span>Donate</span></a></li>
            <li><a href="/" class="nav-link"><span>Our Newsletter</span></a></li>
        </ul>
      </nav>
  </header>

  <RouterView />
</template>

<style>
 /* Roboto font */
 /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'); */

/* Proxima font */
/* @font-face {
font-family: 'Proxima';
src: url("/ProximaNovaFont.otf") format("opentype") weight("normal");
src: url("/Proxima-Nova-Bold.otf") format("opentype") weight("bold");
} */

/* Base */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: sans-serif;
}

:root {
--darkBlue: #143653;
--lightBlue: #5CC8DE;
--whiteColor: #ffffff;
--lightGray: #f7f7f7;
--accentGray: rgb(228, 228, 228);
--worldmapGray: #dbdbdb;
--worldmapBorder: #8c8c8c;
--worldmapbuttons: rgb(235, 235, 235);
--textColor: #143653;
--boxShadow: rgba(128, 128, 128, 0.132);
--color: rgb(212, 212, 212);
--textSize: 1.2rem;
--iconSize: 2rem;
}

 

html{
scroll-behavior: smooth;
}

body{
background-color: var(--lightGray);
color: var(--textColor);
position: relative;
}


/* navigatie */
header {
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 3.4rem;
background-color: var(--whiteColor);
box-shadow: var(--boxShadow) 0px 0px 8px;
z-index: 100;
}

nav {
height: inherit;
display: flex;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
overflow: hidden;
}

nav img {
height: 100%;
}

.nav-link {
text-align: center;
color: var(--darkBlue);
/* font-size: 10rem; */
}

.nav-link span {
display: none;
}

.active {
color: var(--lightBlue);
}


ul,
li {
list-style: none;
}

ul{
    padding-left:1rem;
    padding-right:1rem;
    height:inherit;
}
a {
text-decoration: none;
}



/* Breakpoints medium screen */
@media (min-width:992px) {
/* Nav */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 12.5rem;
    height: 100vh;
    box-shadow: var(--boxShadow) 0px 0px 8px;
}
nav img {
    width: inherit;
    height: auto;
}
nav {
    height: 100%;
    flex-direction: column;
    justify-content: left;
    overflow: hidden;
}

.nav-link {
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .05rem;
}

.nav-link span {
    display: flex;
    justify-content: left;
    align-items: center;  
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top:3rem;
    padding-bottom:5rem;
}

.nav-link span:hover {
    color: var(--lightBlue);
}

.active {
    color: var(--lightBlue);
}
} 

/* Breakpoints large screen */
/* @media (min-width:1200px) {
.nav-link {
    display: flex;
    justify-content: left;
    align-items: center;
}

.nav-link span {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem; */
    /* font-weight: 600; */
    /* font-size: 1.5rem; */
    /* text-transform: uppercase;
    letter-spacing: .05rem;
}

.nav-link:hover {
    color: var(--lightBlue);
}

.active {
    color: var(--lightBlue);
}
} */
</style>
