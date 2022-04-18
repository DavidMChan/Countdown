/**
 * Main javascript for the numbbers game file
 */

async function sleep(ms = 0) {
    return new Promise((r) => setTimeout(r, ms));
}

function validate() {
    $('#message').hide();
    let values = [];
    let invalid = false;

    const obj_arr = $('.letter-input');
    obj_arr.each(function (i, obj) {
        $(this).removeClass('invalid');

        if ($(this).attr('id') == 'target') return;

        if (obj.value != '' && !/[a-zA-Z]/.test(obj.value)) {
            $('#message').text('Value is not a valid countdown letter');
            $('#message').addClass('alert-danger');
            $('#message').show();
            $(this).addClass('invalid');
            invalid = true;
        } else {
            if (obj.value != '') {
                values.push(obj.value);
            }
            $(this).removeClass('invalid');
        }
    });

    if (values.length != 9 || invalid) {
        $('#computeBtn').addClass('disabled');
    } else {
        $('#computeBtn').removeClass('disabled');
    }
}

function compute() {
    if ($('#computeBtn').hasClass('disabled')) return;
    $('#message').hide();
    let loading_text = ' <div class="loader"></div>';
    let original_html = '';
    if ($('#computeBtn').html() != loading_text) {
        original_html = $('#computeBtn').html();
        $('#computeBtn').html(loading_text);
        $('#computeBtn').addClass('disabled');
    }

    let values = [];
    $('.letter-input').each(function (i, obj) {
        values.push(obj.value);
    });

    let request_json = {
        v1: values[0],
        v2: values[1],
        v3: values[2],
        v4: values[3],
        v5: values[4],
        v6: values[5],
        v7: values[6],
        v8: values[7],
        v9: values[8],
    };

    // Make the AJAX request
    $.ajax({
        url: '/countdown/api/v1.0/letters',
        data: request_json,
        success: async function (data, textStatus, jqXHR) {
            if (data['result'][0] === "It's Impossible!") {
                $('#solution').html('<h1 class="display-6 animated fadeIn"> It\'s Impossible :O</h1>');
            } else {
                html =
                    '<h1 class="display-6 animated fadeIn">Solution(s): </h1>\n<ul class="list-group" id="solution-list">\n';
                html += '</ul>\n';
                $('#solution').html(html);
                data['result'].sort();
                data['result'].sort(function (a, b) {
                    return b.length - a.length;
                });
                for (var x = 0; data['result'][x].length == 9 || x < Math.min(data['result'].length, 9); x++) {
                    if (data['result'][x].length == 9) {
                        $('#solution-list').append(
                            '<li class="list-group-item animated fadeIn">' +
                                '<span class="badge badge-pill badge-danger">' +
                                data['result'][x].length +
                                '</span>' +
                                '<span style="padding-left: 30px">' +
                                data['result'][x] +
                                '</span>' +
                                '</li>'
                        );
                    } else if (data['result'][x].length > 6) {
                        $('#solution-list').append(
                            '<li class="list-group-item animated fadeIn">' +
                                '<span class="badge badge-pill badge-warning">' +
                                data['result'][x].length +
                                '</span>' +
                                '<span style="padding-left: 30px">' +
                                data['result'][x] +
                                '</span>' +
                                '</li>'
                        );
                    } else if (data['result'][x].length > 4) {
                        $('#solution-list').append(
                            '<li class="list-group-item animated fadeIn">' +
                                '<span class="badge badge-pill badge-success">' +
                                data['result'][x].length +
                                '</span>' +
                                '<span style="padding-left: 30px">' +
                                data['result'][x] +
                                '</span>' +
                                '</li>'
                        );
                    } else {
                        $('#solution-list').append(
                            '<li class="list-group-item animated fadeIn">' +
                                '<span class="badge badge-pill badge-primary">' +
                                data['result'][x].length +
                                '</span>' +
                                '<span style="padding-left: 30px">' +
                                data['result'][x] +
                                '</span>' +
                                '</li>'
                        );
                    }
                    await sleep(400);
                }
            }
            $('#solution').append(
                '<br /><a style="float:right;" class="btn btn-primary btn-lg" href="letters.html">Reset</a>'
            );
            $('#computeBtn').removeClass('disabled');
            $('#computeBtn').html(original_html);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#message').text('Server Error (' + errorThrown + '): ' + textStatus);
            $('#message').addClass('alert-danger');
            $('#message').show();
            $('#computeBtn').removeClass('disabled');
            $('#computeBtn').html(original_html);
        },
        timeout: 60000,
    });
}

function compute_con() {
    if ($('#computeBtn').hasClass('disabled')) return;
    $('#message').hide();
    let loading_text = ' <div class="loader"></div>';
    let original_html = '';
    if ($('#computeBtn').html() != loading_text) {
        original_html = $('#computeBtn').html();
        $('#computeBtn').html(loading_text);
        $('#computeBtn').addClass('disabled');
    }

    let values = [];
    $('.letter-input').each(function (i, obj) {
        values.push(obj.value);
    });

    let request_json = {
        v1: values[0],
        v2: values[1],
        v3: values[2],
        v4: values[3],
        v5: values[4],
        v6: values[5],
        v7: values[6],
        v8: values[7],
        v9: values[8],
    };

    // Make the AJAX request
    $.ajax({
        url: '/countdown/api/v1.0/letters',
        data: request_json,
        success: async function (data, textStatus, jqXHR) {
            if (data['result'][0] === "It's Impossible!") {
                $('#solution').html('<h1 class="display-6 animated fadeIn"> It\'s Impossible :O</h1>');
            } else {
                html =
                    '<h1 class="display-6 animated fadeIn">Solution(s): </h1>\n<ul class="list-group" id="solution-list">\n';
                html += '</ul>\n';
                $('#solution').html(html);
                data['result'].sort(function (a, b) {
                    return b.length - a.length;
                });
                for (var x = 0; data['result'][x].length == 9; x++) {
                    $('#solution-list').append(
                        '<li class="list-group-item animated fadeIn">' +
                            '<span style="padding-left: 30px">' +
                            data['result'][x] +
                            '</span>' +
                            '</li>'
                    );
                    await sleep(400);
                }
            }
            $('#solution').append(
                '<br /><a style="float:right;" class="btn btn-primary btn-lg" href="conundrum.html">Reset</a>'
            );
            $('#computeBtn').removeClass('disabled');
            $('#computeBtn').html(original_html);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#message').text('Server Error (' + errorThrown + '): ' + textStatus);
            $('#message').addClass('alert-danger');
            $('#message').show();
            $('#computeBtn').removeClass('disabled');
            $('#computeBtn').html(original_html);
        },
        timeout: 60000,
    });
}
