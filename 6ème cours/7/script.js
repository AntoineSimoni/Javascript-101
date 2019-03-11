$(document).ready(function(){
    $("#bmi").submit(function(e) {
        e.preventDefault();
        var weight = $("[name='weight']").val();
        var height = $("[name='height']").val();
        if (weight > 0 && height > 0) {
            var finalBmi = weight/(height/100*height/100);
            $("#valBMI").val(finalBmi);
            if (finalBmi < 18.5) {
                $("#meaning").val("Tu es comme gabi. (Mince)");
            }
            else if (finalBmi > 18.5 && finalBmi < 24.9) {
                $("#meaning").val("Tu es lambda.");
            }
            else if (finalBmi > 24.9 && finalBmi < 29.99) {
                $("#meaning").val("Tu es gros billi.");
            }
            else {
                $("#meaning").val("Tu es obese.");
            }
        }
    }); 
});


function date_heure(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre');
        j = date.getDate();
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = 'Nous sommes le '+j+' '+mois[moi]+' '+annee+'';
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
};