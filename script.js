const hell= document.querySelector(".hell");

setTimeout(function(){
    hell.innertext="10";

    setTimeout(function(){
        hell.innertext ="9";

        setTimeout(function(){
            hell.innertext ="8";

            setTimeout(function(){
                hell.innertext ="7"; 

                setTimeou(function(){
                    hell.innertext ="6";

                    setTimeout(function(){
                        hell.innertext ="5";

                        setTimeout(function(){
                            hell.innertext ="4";

                            setTimeout(function(){
                                hell.innertext ="3";

                                setTimeout(function(){
                                    hell.innertext ="2";

                                    setTimeout(function(){
                                        hell.innertext ="1";

                                        setTimeout(function(){
                                            hell.innerText ="Happy Independence Day!";

                                        },1000);

                                    },1000);

                                },1000);

                            },1000);

                        },1000);

                    },1000);

                },1000);

            },1000);

        },1000 );

    },1000);

},1000);
console.log()