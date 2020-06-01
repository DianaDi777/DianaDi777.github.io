$(document).ready(function () {
  // aside navbar: <nav>
  $("#docTabs")
    .find("a")
    .on("click", function (e) {
      e.preventDefault();

      // tab content: <div> gets the html fragments
      var $desc = $("#docDesciption");

      // switch for <a>
      switch ($(this).attr("href")) {
        //submenu load
        case "011.html":
          $desc.load("doc/paragraphs.html");
          break;
        case "012.html":
          $desc.load("doc/texttransform.html");
          break;
        case "013.html":
          $desc.load("doc/fontsizes.html");
          break;
        case "014.html":
          $desc.load("doc/typefaces.html");
          break;
        case "015.html":
          $desc.load("doc/quotes.html");
          break;
        case "016.html":
          $desc.load("doc/lists.html");
          break;
        case "017.html":
          $desc.load("doc/titles.html");
          break;
        case "018.html":
          $desc.load("doc/maxW.html");
          break;

        //submenu ends, normal aside navbar continues:
        case "01.html":
          $desc.load("doc/tables.html");
          break;

        case "02.html":
          $desc.load("doc/forms.html");
          break;
        case "03.html":
          $desc.load("doc/buttons.html");
          break;
        case "04.html":
          $desc.load("doc/flex.html");
          break;
        case "05.html":
          $desc.load("doc/grid.html");
          break;
        case "06.html":
          $desc.load("doc/icons2.html");
          break;
        // case "07.html":
        //   $desc.load("doc/Images.html");
        //   break;
        case "08.html":
          $desc.load("doc/noprint.html");
          break;
        case "010.html":
          $desc.load("doc/shadow.html");
          break;
        case "019.html":
          $desc.load("doc/line-height.html");
          break;
        case "20.html":
          $desc.load("doc/opacity.html");
          break;
        case "21.html":
          $desc.load("doc/spacing.html");
          break;
        case "21-1-1.html":
          $desc.load("doc/margin.html");
          break;
        case "21-1-2.html":
          $desc.load("doc/marginRL.html");
          break;
        case "21-1-3.html":
          $desc.load("doc/marginALL.html");
          break;
        case "22.html":
          $desc.load("doc/borders.html");
          break;
        case "23.html":
          $desc.load("doc/colors.html");
          break;
        case "23-1.html":
          $desc.load("doc/colors_font.html");
          break;
      }
    });
}); //end doc ready
