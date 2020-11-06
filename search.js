// JavaScript source code
    $('#btn1').click(function() {

        $.ajax({
            url: "libs/php/search.php",
            type: 'POST',
            dataType: 'json',
            data: {
                lang: $('#selLanguageOne').val(),
                search: ($('#searchInput').val()).replace(/ /g, '+')
            },
            success: function(result) {

                console.log(result);

                if (result.status.name == 'ok') {

                    $('#location').html(result['data'][0]['name']);
                    $('#country').html(result['data'][0]['countryName']);
                    $('#countryCode').html(result['data'][0]['countryCode']);
                    $('#population').html(result['data'][0]['population']);
                    $('#status').html('ok');
                }

            },

            error: function(jqXHR, textStatus, errorThrown) {
                var errorMessage = jqXHR.status + ': ' + jqXHR.statusText;
                alert('Error - ' + errorMessage);
            }
        });
    });