<template>
   <div class="animated-background">
       <div class="it1"></div>
       <div class="it2"></div>
       <div class="it3"></div>
       <div class="it4"></div>
       <div class="it5"></div>
        <div class="it6"></div>
       
         </div>

</template>
<style scoped>
@keyframes placeHolderShimmer{
    0% {
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 200px;
    position: relative;
}
.animated-background div{
    background:#ffffff;
    height: 15px;
    position: absolute;
  
}
.it1{
    width: 350px;
    left:30px;
    top:20px;
}
.it2{
    width: 15px;
    left: 30px;
    top: 50px;
}
.it3{
    width: 200px;
    left: 60px;
    top:50px;
}
.it4{
    width: 500px;
    left:30px;
    top:80px;
}
.it5{
    width: 450px;
    left:30px;
    top:110px;
}
.it6{
    width: 600px;
    left:30px;
    top: 140px;
}


</style>