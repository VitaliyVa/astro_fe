

export default function return_anim_item(item, className, delay) {
    let custom_delay = delay;
    let all_target = $(item);
    $(all_target).css('position', 'relative');
    $(all_target).css('opacity', '0');
    $.each(all_target, function (index, litle_value) {
        custom_delay += delay;
        set_scroll(litle_value, function (value) {
            setTimeout(() => {
                $(value).addClass(className);
                $('.main_bg').addClass('main_bg_active');
            }, custom_delay);
        });
    });
}


function set_scroll(container, action) {
    let target_block = $(container);
    let blockStatus = true;
    $(window).scroll(function () {
        for_eacher(target_block);
    });
    for_eacher(target_block);

    function for_eacher(block) {
        $.each(block, function (index, value) {
            let scrollEvent = ($(window).scrollTop() >= ($(value).offset().top - $(window).height()));

            if (scrollEvent && blockStatus) {
                blockStatus = false;
                action(value);
            }
        });
    }
}

