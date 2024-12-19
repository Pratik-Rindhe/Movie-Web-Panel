<template>
  <div id="app">
    <div class="container mx-auto">
    <div class="w-6/12 mt-3.5 border border-solid">
    <div class="m-5">
      <div class="mb-5"> 
        <c-button 
        buttonId="submit" 
        kind="primary" 
        >Submit</c-button>
      </div>
       <div>  
        <c-button 
        buttonId="delete" 
        kind="secondary" 
        >Delete</c-button>
       </div>
    </div>
        <div class="m-5">
        <c-button 
        buttonId="primary-full-size" 
        kind="primary" 
        size ="fullsize"
        >Primary Full Size</c-button>
        </div>  

      <div class="m-5">
        <c-button 
        buttonId="secondary-full-size" 
        kind="secondary" 
        size ="fullsize"
        >Secondary Full Size</c-button>
        </div> 
    </div>  
    </div>
  </div>
</template>

<script>
import CButton from './components/Button.vue'

export default {
  name: 'App',
  components: {
    "c-button": CButton
  }
}
</script>