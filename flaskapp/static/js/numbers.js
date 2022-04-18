/**
 * Main javascript for the numbbers game file
 */

async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

function validate() {
    $('#message').hide();
    let values = [];
    let possible_values = [100,75,50,25,10,9,8,7,6,5,4,3,2,1];
    let big = [100,75,50,25];

    let used_100 = [];
    let used_75 = [];
    let used_50 = [];
    let used_25 = [];
    let used_1 = [];
    let used_2 = [];
    let used_3 = [];
    let used_4 = [];
    let used_5 = [];
    let used_6 = [];
    let used_7 = [];
    let used_8 = [];
    let used_9 = [];
    let used_10 = [];
    let invalid = false;

    const obj_arr = $('.num-input');
    obj_arr.each(function(i, obj) {
        $(this).removeClass('invalid');

        if ($(this).attr('id') == 'target') return;

        if (obj.value != "" && $.inArray(parseInt(obj.value), possible_values) < 0){
            $('#message').text("Number is not in [100,75,50,25,9,8,7,6,5,4,3,2,1]");
            $('#message').addClass('alert-danger');
            $('#message').show();
            $(this).addClass('invalid');
            invalid = true;
        } else {
            if (obj.value != "") {
                let oval = parseInt(obj.value);
                values.push(oval);
                switch(oval) {
                    case 100:
                        used_100.push(i);
                        break;
                    case 75:
                        used_75.push(i);
                        break;
                    case 50:
                        used_50.push(i);
                        break;
                    case 25:
                        used_25.push(i);
                        break;
                    case 1:
                        used_1.push(i);
                        break;
                    case 2:
                        used_2.push(i);
                        break;
                    case 3:
                        used_3.push(i);
                        break;
                    case 4:
                        used_4.push(i);
                        break;
                    case 5:
                        used_5.push(i);
                        break;
                    case 6:
                        used_6.push(i);
                        break;
                    case 7:
                        used_7.push(i);
                        break;
                    case 8:
                        used_8.push(i);
                        break;
                    case 9:
                        used_9.push(i);
                        break;
                    case 10:
                        used_10.push(i);
                        break;
                    default:
                }
            }
            $(this).removeClass('invalid');
        }
        
    });
    let num_big = 0;
    for (i = 0; i < values.length; i++) {
        if ($.inArray(parseInt(obj_arr[i].value),big) >= 0) {
            num_big += 1;
        }
    }

    // if (num_big > 4) {
    //     // You can't have more than 4 big values
    //     $('#message').text("You can't have more than 4 big values!");
    //     $('#message').addClass('alert-danger');
    //     $('#message').show();
    //     obj_arr.each(function(i, obj) {
    //         if (obj.value != "" && $.inArray(parseInt(obj.value), big) >= 0){
    //             $(this).addClass('invalid');
    //         }
    //     });
    // }

    if (used_100.length > 1) {
        $('#message').text("You can't have 100 more than once!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_100) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_75.length > 1) {
        $('#message').text("You can't have 75 more than once!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_75) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_50.length > 1) {
        $('#message').text("You can't have 50 more than once!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_50) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_25.length > 1) {
        $('#message').text("You can't have 25 more than once!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_25) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }

    if (used_1.length > 2) {
        $('#message').text("You can't have 1 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_1) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_2.length > 2) {
        $('#message').text("You can't have 2 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_2) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_3.length > 2) {
        $('#message').text("You can't have 3 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_3) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_4.length > 2) {
        $('#message').text("You can't have 4 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_4) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_5.length > 2) {
        $('#message').text("You can't have 5 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_5) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_6.length > 2) {
        $('#message').text("You can't have 6 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_6) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_7.length > 2) {
        $('#message').text("You can't have 7 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_7) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_8.length > 2) {
        $('#message').text("You can't have 8 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_8) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_9.length > 2) {
        $('#message').text("You can't have 9 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_9) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }
    if (used_10.length > 2) {
        $('#message').text("You can't have 10 more than twice!");
        $('#message').addClass('alert-danger');
        $('#message').show();
        obj_arr.each(function(i, obj) {
            if ($.inArray(i, used_10) >= 0){
                $(this).addClass('invalid');
            }
        });
        invalid = true;
    }

    if ($('#target').val() != "" && parseInt($('#target').val()) < 101) {
        $('#message').text("Target is not in the range [101,999]");
        $('#message').addClass('alert-danger');
        $('#message').show();
        $('#target').addClass('invalid');
        invalid = true;
    }
    if ($('#target').val() == "") {
        invalid = true;
    }


    if (values.length != 6 || invalid) {
        $('#computeBtn').addClass('disabled');
    } else {
        $('#computeBtn').removeClass('disabled');
    }
}

function compute() {
    if ($('#computeBtn').hasClass('disabled')) return;
    $('#message').hide();
    let loading_text = ' <div class="loader"></div>';
    let original_html = "";
    if ($('#computeBtn').html() != loading_text) {
        original_html = $('#computeBtn').html();
        $('#computeBtn').html(loading_text);
        $('#computeBtn').addClass('disabled');
    }

    let values = [];
    $('.num-input').each(function(i, obj) {
        values.push(parseInt(obj.value));
    });

    let request_json = {
        'target':values[0],
        'v1':values[1],
        'v2':values[2],
        'v3':values[3],
        'v4':values[4],
        'v5':values[5],
        'v6':values[6],
    }

    // Make the AJAX request
    $.ajax({
        url:'https://playground.iridescent.io/countdown/api/v1.0/numbers', 
        data:request_json,
        success:async function(data, textStatus, jqXHR) {
            if (data['result'][0] === "It's Impossible!") {
                $('#solution').html("<h1 class=\"display-6 animated fadeIn\"> It's Impossible :O</h1>");
            } else {
                html = "<h1 class=\"display-6 animated fadeIn\">Solution: </h1>\n<ul class=\"list-group\" id=\"solution-list\">\n";
                html += "</ul>\n";
                $('#solution').html(html);
                for (var x = 0; x < data['result'].length; x++) {
                    $("#solution-list").append("<li class=\"list-group-item animated fadeIn\">" + data['result'][x] + "</li>");
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"solution"]);
                    await sleep(500);
                }
                
            }
            $('#solution').append("<br /><a style=\"float:right;\" class=\"btn btn-primary btn-lg\" href=\"numbers.html\">Reset</a>")
            $('#computeBtn').removeClass('disabled');
            $('#computeBtn').html(original_html);



        },
        error:function(jqXHR, textStatus, errorThrown) {
            $('#message').text("Server Error (" + errorThrown + "): " + textStatus);
            $('#message').addClass('alert-danger');
            $('#message').show();
            $('#computeBtn').removeClass('disabled');
            $('#computeBtn').html(original_html);
        },
        timeout:60000
    });

    
}
