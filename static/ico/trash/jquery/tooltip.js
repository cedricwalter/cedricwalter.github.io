

function ifEmpty(value) {
    if (value === "") {
        return "Use <a href=\"https://docs.google.com/forms/d/e/1FAIpQLScODPNSx0Ak5ZFfev5dObCp2QiezHXT6zYE8gbZRE7sWGD-2Q/viewform\" target=\"_blank\">this form</a> to help us complete these data.";
    }

    return value;
}



function tooltip(name, rating, all, ongoing, upcoming, ended, regulation, taxation, accounting, aml,
             notes, sources, regulator, cryptocurrency) {

    /*	'<div class="row">'+
              '<div class="col-sm-3"></div>'+
              '<div class="col-sm-5">'+rating+'</div>'+
            '</div>'+

            '<div class="row">'+
              '<div class="col-3">All ICO</div>'+
              '<div class="col-8"><a href="https://icobench.com/icos?filterStatus=&filterCountry='+name+'" target="_new">'+all+'</a></div>'+
            '</div>'+

            '<div class="row">'+
              '<div class="col-3">Ongoing ICO</div>'+
              '<div class="col-8"><a href="https://icobench.com/icos?filterStatus=ongoing&filterCountry='+name+'" target="_new">'+ongoing+'</a></div>'+
            '</div>'+

            '<div class="row">'+
              '<div class="col-3">Upcoming ICO</div>'+
              '<div class="col-8"><a href="https://icobench.com/icos?filterStatus=upcoming&filterCountry='+name+'" target="_new">'+upcoming+'</a></div>'+
            '</div>'+

            '<div class="row">'+
              '<div class="col-3">Ended ICO</div>'+
              '<div class="col-8"><a href="https://icobench.com/icos?filterStatus=ended&filterCountry='+name+'" target="_new">'+ended+'</a></div>'+
            '</div>'+

            '<div class="row">'+
              '<div class="col-3">Note(s)</div>'+
              '<div class="col-8">'+notes+'</div>'+
            '</div>' +

            '<div class="row">'+
              '<div class="col-3">Regulator(s)</div>'+
              '<div class="col-8">'+regulator+'</div>'+
            '</div>'

            '<div class="row">'+
              '<div class="col-3">Source(s)</div>'+
              '<div class="col-8">'+sources+'</div>'+
            '</div>'
            ;	*/

    var stars = "";
    for (var i = 1; i <= parseInt(rating); i++) {
        stars = stars + "<i class=\"fas fa-star fa-2x\"></i>";
    }
    for (var i = 1; i <= 5 - parseInt(rating); i++) {
        stars = stars + "<i class=\"far fa-star fa-2x\"></i>";
    }

    var color = "#aaaaaa";
    if (rating === "5") {
        color = "#0bf446";
    }
    if (rating === "4") {
        color = "#00671a";
    }
    if (rating === "3") {
        color = "#04a12b";
    }
    if (rating === "2") {
        color = "#00cc33";
    }
    if (rating === "1") {
        color = "red";
    }

    return '<div class="myTable">' +
        '<div class="table-responsive">' +
        '<table class="table table-striped table-sm "  >' +
        '<tbody>' +
        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold; font-size: 20px">ICO-R</td>' +
        '    <td class="d-inline-block col-8"><span style="color: ' + color + '">' + stars + ' (' + rating + ')' + '</span></td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-coins" style="color: #ffd700"></i> All ICO</td>' +
        '    <td class="d-inline-block col-8" style="font-weight: bold;"><a href="https://icobench.com/icos?filterStatus=&filterCountry=' + name + '" target="_new">' + all + '</a></td>' +
        '  </tr>' +
        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-coins" style="color: #ffd700"></i> Ongoing ICO</td>' +
        '    <td class="d-inline-block col-8" style="font-weight: bold;"><a href="https://icobench.com/icos?filterStatus=ongoing&filterCountry=' + name + '" target="_new">' + ongoing + '</a></td>' +
        '  </tr>' +
        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-coins" style="color: #ffd700"></i> Upcoming ICO</td>' +
        '    <td class="d-inline-block col-8" style="font-weight: bold;"><a href="https://icobench.com/icos?filterStatus=upcoming&filterCountry=' + name + '" target="_new">' + upcoming + '</a></td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-coins" style="color: #ffd700"></i> Ended ICO</td>' +
        '    <td class="d-inline-block col-8" style="font-weight: bold;"><a href="https://icobench.com/icos?filterStatus=ended&filterCountry=' + name + '" target="_new">' + ended + '</a></td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> Cryptocurrency</td>' +
        '    <td class="d-inline-block col-8">' + ifEmpty(cryptocurrency) + '</td>' +
        '  </tr>' +
        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> ICO Regulation</td>' +
        '    <td class="d-inline-block col-8">' + ifEmpty(regulation) + '</td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> Taxation</td>' +
        '    <td class="d-inline-block col-8">' + ifEmpty(taxation) + '</td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> Accounting</td>' +
        '    <td class="d-inline-block col-8">' + ifEmpty(accounting) + '</td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> KYC/AML/PEP</td>' +
        '    <td class="d-inline-block col-8">' + ifEmpty(aml) + '</td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> Notes</td>' +
        '    <td class="d-inline-block col-8"><p class="notes">' + ifEmpty(notes) + '</p></td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> Local legal expert(s)</td>' +
        '    <td class="d-inline-block col-8">none yet, you can <a href="https://docs.google.com/forms/d/e/1FAIpQLSckubfx-OEvd05cMhWWuBpSrpGV2pmNG-1cV2NZBsaH3sQDoA/viewform">apply now</a></td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;"><i class="fas fa-gavel" style="color: brown"></i> Regulator(s)</td>' +
        '    <td class="d-inline-block col-8">' + ifEmpty(regulator) + '</td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;">Sources</td>' +
        '    <td class="d-inline-block col-8">' + sources + '</td>' +
        '  </tr>' +

        '  <tr>' +
        '    <td class="d-inline-block col-4" style="font-weight: bold;">Disclaimer</td>' +
        '    <td class="d-inline-block col-8">' + 'Informations provided here are not binding,<br>please consult a Legal firm in your country for help.' + '</td>' +
        '  </tr>' +


        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>';
    //'<main class="type--1"> <div class="wrap">  <section class="mast">   <h1 class="mast__title"></h1>   <dl class="mast__list">    <div class="size">     <dt></dt>     <dd></dd>    </div>    <div class="calories">     <div>      <dt></dt>      <dd class="calories__label">ICO-R</dd>     </div>     <dd class="calories__value">0</dd>    </div>   </dl>  </section>  <section class="values">   <div class="values--a">    <div class="values__title">     <span>Amount/Serving</span>     <span></span>    </div>    <dl class="values__list">     <div>      <dt>Status</dt>      <dd></dd>      <dd>unknown</dd>     </div>        <div>      <dt>All ICO</dt>      <dd></dd>      <dd><a href="https://icobench.com/icos?filterStatus=&filterCountry=Afghanistan" target="_new"> 4</a></dd>     </div>        <div>      <dt>Upcoming ICO</dt>      <dd></dd>      <dd>0</dd>     </div>        <div>      <dt>Ongoing ICO</dt>      <dd></dd>      <dd><a href="https://icobench.com/icos?filterStatus=ongoing&filterCountry=Afghanistan" target="_new"> 1</a></dd>     </div>        <div>      <dt>Ended ICO</dt>      <dd></dd>      <dd><a href="https://icobench.com/icos?filterStatus=ended&filterCountry=Afghanistan" target="_new"> 1</a></dd>     </div>        <div>      <dt>Utility Token</dt>      <dd></dd>      <dd></dd>     </div>        <div>      <dt>Security Token</dt>      <dd></dd>      <dd></dd>     </div>        <div>      <dt>Tax Free Tx</dt>      <dd></dd>      <dd>unknown</dd>     </div>        <div>      <dt><i class="fas fa-gavel"></i> Notes</dt>      <dd></dd>      <dd></dd>     </div>        <div>      <dt>ICO allowed</dt>      <dd></dd>      <dd></dd>     </div>        <div>      <dt>Token registration</dt>      <dd></dd>      <dd></dd>     </div>       </dl>   </div>     </section>  <section class="footnote">  <p>* Informations provided here are not binding, please consult a Legal firm in your country for help.</p> </section> </div></main>';
}