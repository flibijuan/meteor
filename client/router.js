/**
 * Created by rana on 8/15/15.
 */
Router.configure({
    layoutTemplate:"layout"
});
Router.map(function(){
   this.route("products",{path:"/"});
    this.route("about",{path:"/about"});
    this.route("home",{path:"/home"});

});
