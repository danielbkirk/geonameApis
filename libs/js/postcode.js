    $('#btn2').click(function () {

        $.ajax({
            url: "libs/php/postcode.php",
            type: 'POST',
            dataType: 'json',
            data: {
                searchPC: $('#postcodeInput').val().replace(/ /g, '+')
            },
            success: function(result) {

                console.log(result);

                if (result.status.name == 'ok') {

                    $('#postcode').html(result['data'][0]['postalCode']);
                    $('#districtPC').html(result['data'][0]['adminName3']);
                    $('#countyPC').html(result['data'][0]['adminName2']);
                    $('#countryPC').html(result['data'][0]['adminName1']);
                    $('#statusPC').html('ok');
                }

            },

            error: function (jqXHR, textStatus, errorThrown) {
                var errorMessage = jqXHR.status + ': ' + jqXHR.statusText;
                alert('Error - ' + errorMessage);
            }
        });
    });
