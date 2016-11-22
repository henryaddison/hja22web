$(document).ready(function() {

  var links = [
    {
      href: "https://www.bbc.co.uk/news",
      favicon_url: "https://www.bbc.co.uk/favicon.ico",
      text: "BBC News"
    },{
      href: "https://www.theguardian.com/uk",
      favicon_url: "https://www.theguardian.com/favicon.ico",
      text: "The Guardian"
    },{
      href:"https://arstechnica.co.uk",
      favicon_url: "https://arstechnica.co.uk/favicon.ico",
      text: "Ars Technica"
    },{
      href: "http://www.espncricinfo.com",
      favicon_url: "http://www.espncricinfo.com/favicon.ico",
      text: "Cricinfo"
    },{
      href: "https://news.ycombinator.com/news",
      favicon_url: "https://news.ycombinator.com/favicon.ico",
      text: "Hacker News"
    },{
      href: "http://www.datatau.com/news",
      favicon_url: "http://www.datatau.com/favicon.ico",
      text: "Data Tau"
    },{
      href: "https://feedly.com/index.html",
      favicon_url: "https://feedly.com/favicon.ico",
      text: "Feedly"
    }
  ]

  var topsitesHtml = Handlebars.templates.topsites({links: links});

  $("#top-sites").html(topsitesHtml);
});
