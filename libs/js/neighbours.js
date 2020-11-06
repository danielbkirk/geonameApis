// JavaScript source code
$('#btn3').click(function () {

    $.ajax({
        url: "libs/php/neighbours.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lang: $('#selLanguageThree').val(),
            country: $('#selCountry').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == 'ok') {

                $('#countryN1').html(result['data'][0]['name']);
                $('#countryCodeN1').html(result['data'][0]['countryCode']);
                $('#populationN1').html(result['data'][0]['population']);
                $('#latitudeN1').html(result['data'][0]['lat']);
                $('#longitudeN1').html(result['data'][0]['lng']);

                $('#countryN2').html(result['data'][1]['name']);
                $('#countryCodeN2').html(result['data'][1]['countryCode']);
                $('#populationN2').html(result['data'][1]['population']);
                $('#latitudeN2').html(result['data'][1]['lat']);
                $('#longitudeN2').html(result['data'][1]['lng']);

                $('#countryN3').html(result['data'][2]['name']);
                $('#countryCodeN3').html(result['data'][2]['countryCode']);
                $('#populationN3').html(result['data'][2]['population']);
                $('#latitudeN3').html(result['data'][2]['lat']);
                $('#longitudeN3').html(result['data'][2]['lng']);
            }

        },

        error: function (jqXHR, textStatus, errorThrown) {
            var errorMessage = jqXHR.status + ': ' + jqXHR.statusText;
            alert('Error - ' + errorMessage);
        }
    });
});
