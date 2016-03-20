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
        '<input type="checkbox" class="checkbox"></td>' +
        '<td class="text-center item-listed">' +
        item +
        '</td>' +
        '<td class="set-width">' +
        '<button class = "text-center">X</button>' +
        '</td>' +
        '</tr>'
    );
}

/* select items to cross out */
function checkItem() {
    alert('you checked the check-box!');
}

/* remove item from list by clicking the 'X' button */
function removeItem() {}

/* reset and clear the list */
function removeAll() {}

/* ======================================
INSIDE $(document).ready(): functions that target elements that were created during load time
=========================================*/

$(document).ready(function () {

    /* clicking the cart invokes the addToList() function */
    $('form a').on('click', function () {
        addToList($('input').val());
        $('.shop-list').show();
    });

});

/* ======================================
KEYBOARD EVENT HANDLERS
=========================================*/

/* add item on enter */

/* clear list on delete */

/* clear list on backspace */

/* ======================================
OUTSIDE $(document).ready(): functions that target dynamically created elements that were created after load time
=========================================*/

$(document).on('check', '.checkbox', checkItem);
