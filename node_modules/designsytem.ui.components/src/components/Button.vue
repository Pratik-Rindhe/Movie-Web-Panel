<template>
  <button :id="buttonId" :class ="cssClass" v-on:click.stop.prevent="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CButton',  
  props: {
    buttonId: {type:String, default:"cbutton"},
    kind: {type:String, default: "primary"},
    size: {type: String, default: "standard"},
    disable: {type: Boolean, default: false},
   },
  data(){
    return {

    };
  },
   methods: {
            click() {
                this.$emit('click');
            },
            getTypeCssClass(type){
                if(type == "primary"){
                    return "btn btn-primary";
                }
                else if(type == "secondary"){
                    return "btn btn-secondary";
                }
            },
            getSizeCssClass(size){
               if(size == "fullsize"){
                 return "btn-full-size";
               }
               return "";
            },
            getEnabledCssClass(disabled){
               return disabled == true ? "disabled":"";
            }
        },
    computed: {
        cssClass(){
           return this.getTypeCssClass(this.kind) +" "+ this.getSizeCssClass(this.size) +" "+ this.getEnabledCssClass(this.disable); 
        },
     }    
}
</script>

<style scoped>
.btn{
   @apply rounded py-2 px-4 transition-all duration-200
}
.btn-primary{
    @apply bg-red-900 hover:bg-red-700 text-white
}
.btn-secondary {
   @apply bg-white hover:bg-blue-700 hover:text-white text-blue-600 border border-blue-600
}
.btn-full-size {
  @apply w-full
}
</style>