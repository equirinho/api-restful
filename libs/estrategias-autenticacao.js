module.exports = () =>{
    let strategy = new APIkeyStrategy(
        function(apikey,done){
            if (apikey=="123"){
                return done(null, true);
            } else{
                done(null, false);
            }
        }
    )
    passport.use(strategy);
}