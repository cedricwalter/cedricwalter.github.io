$(document).ready(function () {
    var hash = decodeURIComponent(window.location.hash.replace('#', ''));
    if (hash) {
        $('#searchBox').hide();
        $('#title').hide();
    }
    $('#searchBox').val(hash);
});

var token = false;
function setToken(ob) {
   token = ob.checked;
   $('.element').filter(function () {
     $(this).toggle($(this).find('.token').text().toLowerCase().indexOf(token) > -1);
   }
}

function setPrivacy(ob) {
   var privacy = ob.checked;
   $('.element').filter(function () {
     $(this).toggle($(this).find('.privacy').text().toLowerCase().indexOf(privacy) > -1);
   }
}
var dex = false;
function setDex(ob) {
   dex = ob.checked;
   search();
}
var side = false;
function setSide(ob) {
   side = ob.checked;
   search();
}
var atomic = false;
function setAtomic(ob) {
   atomic = ob.checked;
   search();
}

function clear() {
   token = '';
   $('.token').checked = '';
   privacy = '';
   dex = '';
   side = '';
   atomic = '';
   search();
}


function search() {
    var query = $('#searchBox').val().toLowerCase();

    // Filter elements
    $('.element').filter(function () {
        // search only in address
        //$(this).toggle($(this).find('.motto').text().toLowerCase().indexOf(query) > -1);
        $(this).toggle(true);

        $(this).toggle($(this).find('.token').text().toLowerCase().indexOf(token) > -1);

//        if (privacy !== '') {
            $(this).toggle($(this).find('.privacy').text().toLowerCase().indexOf(privacy) > -1);
        //}
//        if (dex !== '') {
            $(this).toggle($(this).find('.dex').text().toLowerCase().indexOf(dex) > -1);
//        }
//        if (side !== '') {
            $(this).toggle($(this).find('.side').text().toLowerCase().indexOf(side) > -1);
//        }
//        if (atomic !== '') {
            $(this).toggle($(this).find('.atomic').text().toLowerCase().indexOf(atomic) > -1);
//        }
    });

    $('.subcategory').filter(function () {
        $(this).toggle($(this).find('.element:visible').length > 0);
    });
    $('.category').each(function(){
        if($(this).find('.subcategory:visible').length > 0){
            $(this).closest('.box').css('visibility', 'visible');
            $(this).closest('.box').css('height', '');
            $(this).closest('.box').css('overflow', '');
        }else{
            $(this).closest('.box').css('visibility', 'hidden');
            $(this).closest('.box').css('height', '1px');
            $(this).closest('.box').css('overflow', 'hidden');
        }
    });
    // $('.category').filter(function () {
    //     $(this).toggle($(this).find('.subcategory:visible').length > 0);
    // });
    $('.masonry').masonry('layout');
}
