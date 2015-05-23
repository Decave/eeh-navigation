angular.module('eehNavigation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-navigation/menu-item-content/eeh-navigation-menu-item-content.html',
    "<span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ menuItem.iconClass}}\"></span>\r" +
    "\n" +
    "<span class=\"menu-item-text\"> {{ menuItem.text|translate }}</span>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/navbar/eeh-navigation-navbar.html',
    "<nav class=\"navbar navbar-default navbar-static-top eeh-navigation eeh-navigation-navbar\" role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"navbar-header\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\">\r" +
    "\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "        <a ng-if=\"_navbarBrand.state && !_navbarBrand.href\" class=\"navbar-brand\" ui-sref=\"{{ _navbarBrand.state }}\">\r" +
    "\n" +
    "            <span ng-include=\"'template/eeh-navigation/navbar-brand.html'\"></span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <a ng-if=\"!_navbarBrand.state && _navbarBrand.href\" class=\"navbar-brand\" ng-href=\"{{ _navbarBrand.href }}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "            <span ng-include=\"'template/eeh-navigation/navbar-brand.html'\"></span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div collapse=\"isNavbarCollapsed\" class=\"navbar-collapse\">\r" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-left\">\r" +
    "\n" +
    "            <li ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "                ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "                dropdown\r" +
    "\n" +
    "                ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "            <li ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "                ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "                dropdown\r" +
    "\n" +
    "                ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-brand.html\">\r" +
    "\n" +
    "    <img ng-if=\"_navbarBrand.src\" ng-src=\"{{_navbarBrand.src}}\">\r" +
    "\n" +
    "    <span ng-if=\"_navbarBrand.text\">{{ _navbarBrand.text|translate }}</span>\r" +
    "\n" +
    "</script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.hasChildren()\" dropdown-toggle>\r" +
    "\n" +
    "        <span class=\"icon-fw {{ iconBaseClass() }} {{ item.iconClass }}\"></span>\r" +
    "\n" +
    "        <span> {{ item.text|translate }}</span>\r" +
    "\n" +
    "        <span class=\"caret\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"item.hasChildren()\" class=\"dropdown-menu\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()|orderBy:'weight'\"\r" +
    "\n" +
    "            ng-class=\"{'divider': item.isDivider}\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            ui-sref-active-eq=\"active\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/search-input/eeh-navigation-search-input.html',
    "<form ng-submit=\"submit()\" class=\"navbar-form navbar-right\">\r" +
    "\n" +
    "    <div class=\"input-group\">\r" +
    "\n" +
    "        <input type=\"text\"\r" +
    "\n" +
    "               class=\"form-control search-input\"\r" +
    "\n" +
    "               placeholder=\"{{'Search'|translate}}\"\r" +
    "\n" +
    "               ng-model=\"searchTerm\">\r" +
    "\n" +
    "        <span class=\"input-group-btn\">\r" +
    "\n" +
    "            <button class=\"btn btn-default\" type=\"submit\">\r" +
    "\n" +
    "                <span class=\"icon-fw {{ iconBaseClass() }} {{ searchIconClass }}\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('template/eeh-navigation/sidebar/eeh-navigation-sidebar.html',
    "<nav class=\"navbar navbar-default eeh-navigation eeh-navigation-sidebar\" role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"navbar-collapse\" collapse=\"isNavbarCollapsed\">\r" +
    "\n" +
    "        <ul class=\"nav sidebar-nav\">\r" +
    "\n" +
    "            <li class=\"sidebar-search\" ng-show=\"!_sidebarTextCollapse.isCollapsed && _sidebarSearch.isVisible\">\r" +
    "\n" +
    "                <eeh-navigation-search-input search-term=\"searchInputModel\" submit=\"searchInputSubmit\" ng-if=\"searchInputIsVisible\"></eeh-navigation-search-input>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li ng-repeat=\"item in sidebarMenuItems | orderBy:'weight'\"\r" +
    "\n" +
    "                ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\r" +
    "\n" +
    "                ng-class=\"{ 'leaf': !item.hasChildren() }\"\r" +
    "\n" +
    "                ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "                ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "            <li ng-click=\"toggleSidebarTextCollapse()\" ng-if=\"_sidebarTextCollapse.isVisible && isSidebarVisible()\">\r" +
    "\n" +
    "                <a>\r" +
    "\n" +
    "                    <span class=\"icon-fw {{ iconBaseClass() }}\" ng-class=\"_sidebarTextCollapse.isCollapsed ? collapsedSidebarIconClass : expandedSidebarIconClass\"></span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"eeh-navigation-page-wrapper\" ng-class=\"{ 'sidebar-invisible': !isSidebarVisible() }\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-lg-12\">\r" +
    "\n" +
    "            <div ng-transclude></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/sidebar-menu-item.html\">\r" +
    "\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <a ng-if=\"!item.state && item.hasChildren() && !_sidebarTextCollapse.isCollapsed\"\r" +
    "\n" +
    "       ng-click=\"item.isCollapsed = !item.isCollapsed\">\r" +
    "\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\r" +
    "\n" +
    "        <span class=\"navbar-right sidebar-arrow icon-fw {{ iconBaseClass() }}\"\r" +
    "\n" +
    "              ng-class=\"item.isCollapsed ? collapsedMenuItemIconClass : expandedMenuItemIconClass\"></span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren() && !_sidebarTextCollapse.isCollapsed\" collapse=\"item.isCollapsed\"\r" +
    "\n" +
    "        class=\"nav sidebar-nav\">\r" +
    "\n" +
    "        <li ng-repeat=\"item in item.children()\"\r" +
    "\n" +
    "            ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\r" +
    "\n" +
    "            ng-class=\"{ 'leaf': !item.hasChildren() }\"\r" +
    "\n" +
    "            ng-if=\"item._isVisible()\"\r" +
    "\n" +
    "            ui-sref-active-eq=\"active\"\r" +
    "\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );

}]);
