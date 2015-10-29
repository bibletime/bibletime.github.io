$('document').ready( function() {
    $('.ReadMore').on('click', function() {
        $(this).parent('p').hide().parents('article').find('.Hidden').show();
        return false;
    });
});
