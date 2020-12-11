//attivazione di vue tools web
Vue.config.devtools = true;
//struttura generale vue
var app = new Vue({
  el: '#app',
  data: {
    navItems:["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    langSelect: "en",
    pageDown: false
  },
  methods: { 
    scrollToTop() {
         window.scrollTo(0,0);
    },
    scroll() {
      window.onscroll = () => {
        if(document.documentElement.scrollTop > window.innerHeight){
          this.pageDown = true;
        } else{
          this.pageDown = false;
        }
        console.log("offsetHeight"+document.documentElement.offsetHeight);
        console.log("scrolltop" +document.documentElement.scrollTop)
        
        
      };
    }
        
 },
 mounted(){
   this.scroll()
 }
});
