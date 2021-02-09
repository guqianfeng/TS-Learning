"use strict";
var Home;
(function (Home) {
    console.log('gqf test');
    var Header = /** @class */ (function () {
        function Header() {
            var div = document.createElement('div');
            div.innerHTML = 'this is header';
            document.body.appendChild(div);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var div = document.createElement('div');
            div.innerHTML = 'this is content';
            document.body.appendChild(div);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var div = document.createElement('div');
            div.innerHTML = 'this is footer';
            document.body.appendChild(div);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
