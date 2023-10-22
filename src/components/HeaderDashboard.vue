<template>
    <section class="header-dashboard">
    <h1>Dashboard</h1>
        <form class="search" action="/" method="GET">
            <input type="text" name="search" placeholder="Search..">
            <input type="submit" name="search-button" aria-label="search button" class="search-button" value="SEND">
        </form>
    </section>
</template>

<style scoped>
.header-dashboard{
		display: flex;
}
h1{
  text-transform: uppercase;
  font-weight: 400;
}
form{
  display: flex;
  gap:.5rem;
  padding-left:1rem;
}
input{
  width:50%;
}
</style>