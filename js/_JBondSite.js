$(document).ready(function () {
    var filter;
    $('#filters > li').on('click', function (event) {
        filter = $(this).attr('id');
        //calculate max
        var max = 0;
        $.each(bonds, function (index, thisbond) {
            $('#' + thisbond.name + ' .stats').html(thisbond[filter]);
            if (thisbond[filter] > max) {
                max = thisbond[filter];
            }
        });
        
        //calculate width of container in which this has to be display
        var widthOfStats = $('#bondlayout .stats').first().width();
        console.log( widthOfStats +"  "+max);


        $.each(bonds, function (index, thisbond) {
            switch(filter){
                case 'films':
                    var widthShouldBe = widthOfStats/max ;
                    console.log(thisbond.name+" films :"+ thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - films");

                    break;
                case 'kills' : 

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " kills :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - kills");

                    break;
                case 'kissed' : 

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " kissed :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - kissed");
                    break;
                
                case 'iSlept' : 

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " iSlept :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - iSlept");
                    break;
                case 'eSlept' : 

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " eSlept :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - eSlept");
                    break;
                case 'believed_dead' : 

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " believed_dead :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - belived_dead");
                    break;
                case 'bond_james_bond' : 

                    var widthShouldBe = widthOfStats/max ;
                    console.log(thisbond.name + " bond_james_bond :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - bond_james_bond");
                    break;
                case 'martinis_drunk' : 

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " martinis_drunk :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - martinis_drunk");
                    break;
                case 'rotten_tomato':

                    var widthShouldBe = widthOfStats / max;
                    console.log(thisbond.name + " rotten_tomato :" + thisbond[filter] + " average_Count: " + thisbond[filter] / max + " widthShouldBe :" + widthShouldBe + " - rotten_tomato");
                    break;

            
            }

        });


    });

});