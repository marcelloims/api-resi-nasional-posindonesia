$('#tombol-cari').on('click', function () {
    $.ajax({
        url: 'https://api.binderbyte.com/v1/track',
        type: 'GET',
        dataType: 'JSON',
        data: {
            'api_key' : '080eaad089ef0b94591967ad61d4a42b46f07e69bf97f2150414b100d2ffab23',
            'courier' : 'pos',
            'awb' : $('#no-resi').val()
        },
        success: function (result) {
            console.log(result);
            console.log(result.status)
            if (result.message == "Successfully tracked package") {
                $('#detail-resi').html('<h1>No Resi  ditemukan!</h1>')
            } else {
                $('#detail-resi').html('<h1>No Resi tidak ditemukan!</h1>')
            }
        }
    });
})