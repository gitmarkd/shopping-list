/* ======================================
RE-USABLE FUNCTIONS
=========================================*/

/* add items to the input box, by clicking on the item */
function addToInput(item) {
    $('.add-item').val(item);
}

/* add items to the list, by clicking on the cart */
function addToList(item) {
    $('.shop-list tbody').append(
        '<tr>' +
        '<td class="text-center set-width">' +
        '<input type="checkbox" class="checkbox">' +
        '</td>' +
        '<td class="text-center item-listed">' +
        item +
        '</td>' +
        '<td class="set-width">' +
        '<button class="text-center delete">X</button>' +
        '</td>' +
        '</tr>'
    );

    $('#item-name').val('');
}

/* select items to cross out */
function strikeItem() {
    $(this).parent().parent().toggleClass('strike');
}

/* remove item from list by clicking the 'X' button */
function removeItem() {
    $(this).parent().parent().remove();
    if ($('.shop-list tbody').children().length == 0) {
        $('table thead').hide();
    }
}

/* reset and clear the list */
function removeAll() {
    $(this).remove();
}

/* ======================================
INSIDE $(document).ready(): functions that target elements that were created during load time
=========================================*/

$(document).ready(function () {

    /* clicking the cart invokes the addToList() function */
    $('form a').on('click', function () {
        addToList($('input').val());
        $('.table thead').show();
        $('.shop-list').show();
    });

});

/* ======================================
OUTSIDE $(document).ready(): functions that target dynamically created elements that were created after load time
=========================================*/

$(document).on('click', '.checkbox', strikeItem);
$(document).on('click', '.delete', removeItem);

/* ======================================
KEYBOARD EVENT HANDLERS
=========================================*/

/* add item on enter */

/* clear list on delete */

/* clear list on backspace */
