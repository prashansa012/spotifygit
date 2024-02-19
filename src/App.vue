
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
       <div class="mx-2 mb-5">
         <button v-for="page in pages" @click="setID = page.id" :class="`w-full focus:outline-none  h-8 text-s rounded px-3py-2 flex items-center justify-start ${setID ===page.id?'bg-light text-white': 'text-lightest'}`">
          <i class="material-icons mr-3">{{ page.icon }}</i>
          <p>{{ page.name }}</p>
         </button>
        </div>
      <div class="mx-5">
        <h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">Playlist</h1>
        <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
          <img src="createnew.png" class="h-8 w-8 mr-3"/>
          <p class="text-sm text-white ">create playlist</p>
        </button>
        <button class="flex items-center justify-start opacity-75 hover:opacity-100">
          <img src="likes.jpg" class="h-8 w-8 mr-3"/>
          <p class="text-sm text-white ">Like songs</p>
        </button>
        <div class="h-px w-full bg-light my-3"></div>
      </div>
      <div class="mx-5">
        <div class="w-full h-10 overflow-y-scroll">
          <p v-for="album in albums" class="text-lightest hover:text-white text-sm py-1">{{ album.name }}</p>
        </div>
        <button class="flex items-center justify-start text-lightest hover:text-white py-3">
          <i class="material-icons mr-3 rounded-full border border-lightest">arrow_downward</i>
          <p class="text-sm ">Install App</p>
        </button>
      </div>
      <div class="relative pt-3">
        <div class="w-full h-full flex justify-end items-start opacity-0 hover:opacity-100 p-2 absolute">
          <div class="bg-black rounded-full h-6 w-6">
            <i class="material-icons text-white">keyboard_arrow_down</i>
          </div>
        </div>
        <img src="band.jpg" class="w-full"/>
      </div>
       </div>
      <!--main content-->
       <div class="w-full h-full relative overflow-y-scroll">
         <!-- header -->
         <div class="w-full sticky top-0  py-4 px-6 flex items-center justify-between">
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-white mr-3">
              <i class="material-icons text-3xl">keyboard_arrow_left</i>
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-white">
            <i class="material-icons text-3xl">keyboard_arrow_right</i>
          </button>
          </div>
          <div class="relative">
            <button @click="showDropdown=true " class="focus:outline-none bg-light rounded-full py-1 px-2 flex items-center">
              <img src="myface.jpeg" class="rounded-full h-6 w-6"/>
              <p class=" text-white text-xs px-2">
                  Prashansa Goswami
              </p>
              <i v-if="showDropdown=== false" class="material-icons text-white">arrow_drop_down</i>
              <i v-if="showDropdown=== true" class="material-icons text-white">arrow_drop_up</i>
            </button>
            <div v-if="showDropdown=== true" class="absolute bg-light  w-full rounded mt-1">
              <button @click="showDropdown = false" class="focus:outline-none w-full text-s py-2 text-lightest hover text-white border-b border-white opacity-75 hover:opacity-100 ">Account</button>
              <button @click="showDropdown = false" class="focus:outline-none w-full text-s py-2 text-lightest hover text-white border-b border-light opacity-75 hover:opacity-100  ">Log Out</button>
            </div>
          </div>
         </div>
         <!--cards-->
         <div class="px-6 py-3">
         <div class=" flex  items-center justify-between">
          <h1 class="pl-2 text-2xl text-white tracking-wider hover:underline">Recently Played</h1>
          <h2 class="pr-8 pt-4 text-xs text-lightest uppercase tracking-wider hover:underline mb-3">See All</h2>
        </div>
        <div class="w-full flex flex-wrap ">
          <div v-for="recent in recents" class="p-2 w-48">
          <div class="bg-light w-full h-auto p-5 rounded-lg shadow-md">
            <img :src="`${recent.src}`" class="h-auto w-full shadow mb-2 "/>
            <h1 class="text-sm text-white tracking-wide">{{ recent.title }}</h1>
            <h2 class="text-xs text-lightest tracking-wide">{{ recent.artist }}</h2>
          </div>
        </div>
          </div> 
         
        </div>
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
     setID :'home', 
     albums:[
      {name:'drive'},
      {name:'zhu'},
      {name:'All New Indie'},
      {name:'Mellow'},
      {name:'Classic Road Trip Songs'},
      {name:'Lana Del Rey Radio'}
     ],
     showDropdown: false,
     recents:[
      {src:'dailymix1.jpg',title:'Daily Mix 1',artist:'By Spotify'},
      {src:'dailymix2.jpg',title:'Daily mix Pritam',artist:'By Spotify'},
      {src:'shreya.jpg',title:'This is Shreya',artist:'Shreya Ghosal'},
      {src:'sufi.jpg',title:'Sufi & Bollywood',artist:'By Spotify'},
      {src:'diljit.jpg',title:'Diljit Dosanjh Radio',artist:'Diljit Dosanjh'},
      {src:'mega.jpg',title:'Mega Hit Mix',artist:'By Spotify'}
     ]
    }
  }
};
</script>


<style >

</style>
 