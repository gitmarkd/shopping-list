/* ======================================
RE-USABLE FUNCTIONS
=========================================*/

/* add items to the input box, by clicking on the item */
function addToInput(item) {
    $('.add-item').val(item);
}

/* add items to the list, by clicking on the cart */
function addToList(item) {
    if (item) {
        $('.shop-list tbody').append(
            '<tr>' +
            '<td>' +
            '<input type="checkbox" class="checkbox">' +
            '</td>' +
            '<td class="text-center item">' +
            item +
            '</td>' +
            '<td>' +
            '<span class="input-group-btn delete">' +
            '<a class="btn btn-info-outline" type="submit">' +
            '<img src="images//icon-trash.png"></a>' +
            '< /span>' +
            '</td>' +
            '</tr>'
        );

        $('#item-name').val('');

        $('#itemHead').append(': ' + item + ' added successfully').addClass('alert-success');
        $('#itemHead').fadeOut(5000, function () {
            $('#itemHead').html('Item').show().removeClass('alert-success');
        });
    } else {
        alert('Click an item from the menu, or type a product name! ');
    }
}

/* select items to cross out */
function strikeItem() {
    if ($(this).prop('checked')) {
        $(this).parent().siblings('.item').addClass('strike');
    } else {
        $(this).parent().siblings('.item').removeClass('strike');
        $(this).parent().parent().prop('checked', false);
    }
}

/* remove item from list by clicking the 'X' button */
function removeItem() {
    $(this).parent().parent().remove();
    if ($('.shop-list tbody').children().length == 0) {
        $('.strike-all').prop('checked', false);
        $('table thead').hide();
    }
}

function strikeAll() {
    if ($(this).prop('checked')) {
        $(this).parent('th').parent('tr').parent('thead').siblings('tbody').children('tr').children('td').addClass('strike');
        $(this).parent('th').parent('tr').parent('thead').siblings('tbody').children('tr').children('td').children('input').prop('checked', true);
        $(this).parent('th').parent('tr').parent('thead').siblings('tbody').children('tr').children('td').children('input').prop('disabled', true);
    } else {
        $(this).parent('th').parent('tr').parent('thead').siblings('tbody').children('tr').children('td').removeClass('strike');
        $(this).parent('th').parent('tr').parent('thead').siblings('tbody').children('tr').children('td').children('input').prop('checked', false);
        $(this).parent('th').parent('tr').parent('thead').siblings('tbody').children('tr').children('td').children('input').prop('disabled', false);
    }
}

/* reset and clear the list */
function removeAll() {
    $('tbody').empty();
    $('.strike-all').prop('checked', false);
    $(this).parent().hide();
}

/* ======================================
INSIDE $(document).ready(): functions that target elements that were created during load time
=========================================*/

$(document).ready(function () {

    /* clicking the cart invokes the addToList() function */
    $('form a').on('click', function () {
        if ($('input').val()) {
            addToList($('input').val());
            $('.table thead').show();
            $('.shop-list').show();
            $('tr').show();
        } else {
            alert('Click an item from the menu, or type a product name! ');
        }
    });
});

/* ======================================
OUTSIDE $(document).ready(): functions that target dynamically created elements that were created after load time
=========================================*/

$(document).on('click', '.tbody .checkbox', strikeItem);
$(document).on('click', '.delete', removeItem);

$(document).on('click', '.delete-all', removeAll);
$(document).on('click', '.strike-all', strikeAll);

/* ======================================
KEYBOARD EVENT HANDLERS
=========================================*/

/* add item on enter */

/* clear list on delete */

/* clear list on backspace */
