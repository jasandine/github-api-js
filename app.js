
  var viewModel = {
    issues: ko.observableArray()
  };

  ko.applyBindings(viewModel);

  $.getJSON("https://api.github.com/orgs/factor-io/issues?state=all&access_token=158e8f36a5f996eb4af68e713c6c28f6533f1814&filter=all", function (data) {
    viewModel.issues(data);
  });

  (function poll() {
    $.ajax({
        url: "https://api.github.com/orgs/factor-io/issues?state=all&access_token=158e8f36a5f996eb4af68e713c6c28f6533f1814&filter=all",
        type: "GET",
        success: function(data) {
            console.log("polling");
        },
        dataType: "json",
        complete: setTimeout(function() {poll()}, 5000),
        timeout: 2000
    })
  })();