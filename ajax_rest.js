$(document).ready(function() {
  $("form").submit(function(event) {
      var formData = {
          ip: $("#ip").val(),
      };

      var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
      var token = "6a92bb6a1ca5e0ee60f5e8fc443e0a03c0649980";
      var query = formData.ip;

      var options = {
          method: "GET",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + token
          }
      }

      fetch(url + query, options)
          .then(response => response.json())
          .then(result => {
              console.log(result);

              // Извлекаем название города из ответа
              var city = result.location.data.city;

              // Отображение названия города на странице
              $("#result").html("City: " + city);
          })
          .catch(error => console.log("error", error));

      event.preventDefault();
  });
});