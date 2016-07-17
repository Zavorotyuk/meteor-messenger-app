Router.route('/', {
    name:'home',
    template: 'login'
});
Router.route('/registration');
Router.route('/login');
Router.route('/editprofile');
Router.route('/loc/:city',{
    template:'location',
    data: function(){
        //console.log(this.params.country)
        return { text: this.params.city };
    }
});
Router.configure({
    layoutTemplate: 'main'
});
