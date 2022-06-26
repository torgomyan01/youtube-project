const {active, none, fix} = {
    active: 'active',
    none: 'd-none',
    fix: 'fix'
}


const openSubtitle = $('#open-subtitle');
const subtitle = $('.subtitle');


openSubtitle.on('click', function (){
    if(subtitle.hasClass(active)){
        subtitle.removeClass(active);
        openSubtitle.text('...ещё');
    } else {
        subtitle.addClass(active);
        openSubtitle.text('Свернуть');
    }
})