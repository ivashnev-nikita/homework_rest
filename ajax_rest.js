$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      ip: $("#ip").val(),
    };

    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
    var token = "a92d7c65c4bba9aff2843da2b3df6869e97d2bcd";

    $.ajax({
      type: "GET",
      url: url + formData.ip,
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Token "+ token);
      },
      dataType: "json",
      encode: true,
    }).done(function (result) {
      console.log(result);

      // Извлекаем название города из ответа
      var city = result.location.data.city;

      // Отображение названия города на странице
      $("#result").html("City: " + city);
    });

    event.preventDefault();
  });
});