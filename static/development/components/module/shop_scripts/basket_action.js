function minus(wrapper, input_name, this_click) {
    let wrap = $(this_click).parents(wrapper);
    let input = $(wrap).find(input_name);
    let value = Number($(input).val());

    if (value <= 1) {
        $(input).val(1);
    } else {
        $(input).val(value - 1);
    }

    return Number($(input).val());
}

function plus(wrapper, input_name, this_click) {
    let wrap = $(this_click).parents(wrapper);
    let input = $(wrap).find(input_name);
    let value = Number($(input).val());

    $(input).val(value + 1);

    return Number($(input).val());
}

function input_basket(input_name) {
    let input = $(input_name);
    let value = Number($(input).val());

    if (value < 0) {
        $(input).val(1);
    }

    return Number($(input).val());
}


function delete_item(this_click, wrapper) {
    let wrap = $(this_click).parents(`${wrapper}`);
    $(wrap).css('position', 'relative');
    $(wrap).css('transition', 'all .2s');
    $(wrap).css('max-height', '1000px');


    $(wrap).css("max-height", '0px');
    $(wrap).css("transform", 'scale(0)');
    setTimeout(() => {
        $(wrap).css("position", 'absolute');
    }, 200);
    setTimeout(() => {
        $(wrap).remove();
    }, 1000);
}


export { minus, plus, input_basket, delete_item }