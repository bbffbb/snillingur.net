angular.module('ChatApp').controller("HomeController",
    ['$scope', '$location', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$timeout',
        function($scope, $location, $timeout, $mdBottomSheet, $mdSidenav, $mdDialog) {

            $scope.info = {
                author: "Birkir Freyr Baldursson",
                email: "Birkirfreyrbaldurss@gmail.com",
                imagePath: "/img/baraeg.jpg",
                phone: "8456776",
                location: "Reykjavík, Iceland"
            };

            $scope.menu = [{
                link: 'showTabDialog($event)',
                title: 'Details',
            }];

            $scope.admin = [{
                link: 'showListBottomSheet()',
                title: 'Contact',
            }];

            $scope.showDetailsDialog = function(ev) {
                $mdDialog.show({
                    templateUrl: 'directives/dialogs/details.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };

            $scope.showSocialMediaDialog = function(ev) {
                $mdDialog.show({
                    templateUrl: 'directives/dialogs/socialmedia.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };


            var self = this;

            self.hidden = false;
            self.isOpen = false;
            self.hover = false;
            $scope.tooltipVisible = self.isOpen;

            // On opening, add a delayed property which shows tooltips after the speed dial has opened
            // so that they have the proper position; if closing, immediately hide the tooltips
       

            self.items = [
                { name: "Facebook", link:"http://www.facebook.com/birkirfreyrbaldurss", icon: "img/icons/facebook.png", direction: "bottom" },
                { name: "Twitter", link:"http://twitter.com/birkirfr", icon: "img/icons/twitter.png", direction: "bottom" },
                { name: "Instagram",link:"http://www.instagram.com/birkirfr/", icon: "img/icons/instagram.png", direction: "bottom" },                                
                { name: "Spotify", link:"http://play.spotify.com/user/1142285129", icon: "img/icons/spotify.png", direction: "bottom" },
                { name: "Youtube", link:"http://www.youtube.com/user/birkirf", icon: "img/icons/youtube.png", direction: "bottom" },
                { name: "LinkedIn", link:"http://www.linkedin.com/in/birkir-freyr-baldursson", icon: "img/icons/linkedin.png", direction: "bottom" }
            ];

            $scope.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            $scope.alert = '';

            $scope.showListBottomSheet = function() {
                $scope.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'directives/bottom-sheet/bottom-sheet.html',
                    controller: 'ListBottomSheetCtrl'
                }).then(function(clickedItem) {
                    $scope.alert = clickedItem['name'] + ' clicked!';
                });
            };



        }]);

angular.module('ChatApp').controller("ListBottomSheetCtrl",
    ['$scope', '$location', '$mdBottomSheet',
        function($scope, $location, $mdBottomSheet) {

            $scope.links = [
                { name: 'About' },
                { name: 'Upload' },
                { name: 'Copy' },
                { name: 'Print this page' },
            ];

            $scope.listItemClick = function($index) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        }]);