$("document").ready(function() {
  getQuotes();

  function getQuotes() {
    var randomText = new Date().toISOString();
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" +
        randomText,
      function(a) {
        $("#quote").html(a[0].content + "<p>— " + a[0].title + "</p>");
        $("#share").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            a[0].content.replace("<p>", "").replace("</p>", "")
        );
      }
    );
  }

  $("#newQuote").click(function() {
    getQuotes();
  });
});