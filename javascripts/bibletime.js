$('document').ready( function() {
    $('.ReadMore').on('click', function() {
        $(this).parent('p').hide().parents('article').find('.hidden').slideDown();
        return false;
    });
    $.each($('div.date'), function() {
        var ISODate = $(this).text();
        $(this).attr('title', ISODate);
        $(this).text(moment(ISODate, '"YYYY-MM-DD').fromNow());
    } );

});
