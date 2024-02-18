
<template>
<div id="app">
  <div class="bg-dark h-screen">
     <div class="flex " style="height: 88vh;">
      <!--side nav bar-->
       <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
        <img src="green.jpg.png" class="h-10 " style="
        filter: brightness(0) invert(1);"/>
        </div>
       <div class="mx-2">
         <button v-for="page in pages" @click="setID = page.id" :class="`w-full h-8 text-s rounded px-3py-2 flex items-center justify-start ${setID ===page.id?'bg-light text-white': 'text-lightest'}`">
          <i class="material-icons mr-3">{{ page.icon }}</i>
          <p>{{ page.name }}</p>
         </button>
         <!-- <button></button>
         <button></button> -->
      </div>
       </div>
      <!--main content-->
       <div class="w-full h-full relative">
         <!-- header -->
         <div class="w-full sticky top-0  p-2"></div>
        </div>
     </div>    
  </div>
  <!-- play Bar -->
<div class="w-full bg-light" style="height: 12vh;"></div>
</div>

  
</template>

<script>


export default {
  name: 'App',
  data: function(){
    return{
      pages:[
      {id:'home',name:'Home',icon:'home'},   
      {id:'search',name:'Search',icon:'search'},   
      {id:'library',name:'Your Library',icon:'bar_chart'}   
     ],
     setID :'home'
    }
  }
};
</script>


<style >

</style>
 