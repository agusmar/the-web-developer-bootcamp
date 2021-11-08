HTML: HyperText Markup Language

HTML is the most basic building block of the Web. It defines the meaning and structure of web content. 
CSS is used to describe a web page's appearance/presentation 
JS is used to add functionality.

HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way.

Nesting elements
Elements can be placed within other elements.

Attributes
Elements can also have attributes, which contain extra information about the element that won't appear in the content.
For example, the class attribute is an identifying name used to target the element with style information


Anatomy of an HTML document
Individual HTML elements aren't very useful on their own. Next, let's examine how individual elements combine to form an entire HTML page:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>

<html> element wraps all the content on the page. 
<head> element acts as a container for everything you want to include on the HTML page, that isn't the content the page will show to viewers. This includes keywords and a page description that would appear in search results, CSS to style content, character set declarations, and more. 
<title> element sets the title of the page, which is the title that appears in the browser tab the page is loaded in. The page title is also used to describe the page when it is bookmarked.
<body> element contains all the content that displays on the page, including text, images, videos, games, playable audio tracks, or whatever else.

The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.