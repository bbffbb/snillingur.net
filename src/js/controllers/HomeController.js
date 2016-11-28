angular.module('ChatApp').controller("HomeController",
    ['$scope', '$location', '$timeout', '$mdBottomSheet', '$mdSidenav', '$mdDialog',
        function ($scope, $location, $timeout, $mdBottomSheet, $mdSidenav, $mdDialog) {

            $scope.work = [
                { company: "Sandbrún ehf", title: "Captain / 2nd engineer / Sailor", description: "asdfælj", started: "2004", ended: "2016" },
                { company: "Sandbrún ehf", title: "Captain / 2nd engineer / Sailor", description: "asdfælj", started: "2004", ended: "2016" },
                { company: "Sandbrún ehf", title: "Captain / 2nd engineer / Sailor", description: "asdfælj", started: "2004", ended: "2016" },
                { company: "Sandbrún ehf", title: "Captain / 2nd engineer / Sailor", description: "asdfælj", started: "2004", ended: "2016" },
                { company: "Sandbrún ehf", title: "Captain / 2nd engineer / Sailor", description: "asdfælj", started: "2004", ended: "2016" },
            ];

            $scope.environment = [
                { name: "GitHub", rate: 9 },
                { name: "ASP.NET", rate: 7 },
                { name: "ASP.NET MVC", rate: 7 },
                { name: "Node.js", rate: 8 },
                { name: "Express.js", rate: 8 },
                { name: "AngularJS", rate: 8 },
                { name: "REST", rate: 7 },
                { name: "MongoDB", rate: 7 },

            ];
            $scope.languages = [
                { name: "C++", rate: 7 },
                { name: "C#", rate: 6 },
                { name: "Java", rate: 6 },
                { name: "JavaScript", rate: 8 },
                { name: "HTML5", rate: 9 },
                { name: "CSS", rate: 9 },
                { name: "Linux", rate: 7 },
                { name: "SQL", rate: 7 },
            ];

            $scope.color = {
                red: Math.floor(Math.random() * 255),
                green: Math.floor(Math.random() * 255),
                blue: Math.floor(Math.random() * 255)
            };



            $scope.disabled3 = 70;

            $scope.invert = Math.floor(Math.random() * 100);

            $scope.isDisabled = true;

            $scope.cards = [{
                title: "My Philosophy",
                description: "I'm always focusing on the performance, design and usability in my products. By reading about and trying out new features i have increased my coding knowledge.",
                imagePath: "/img/cards/philosophy.png"
            },
            {
                title: "My Mission",
                description: "I'm a highly motivated, creative and reliable developer. Im allways trying to better my self when it comes to coding with one mission. To become better developer.",
                imagePath: "/img/cards/mission.png"
            },
            {
                title: "My Process",
                description: "When i'm developing my goal is allways to complete the project, but when it is done i have the tendencies to add a little more extra to make it better than requested.",
                imagePath: "/img/cards/process.png"
            }];

            $scope.info = {
                author: "Birkir Freyr Baldursson",
                email: "Birkirfreyrbaldurss@gmail.com",
                imagePath: "/img/profile/baraeg.jpg",
                phone: "8456776",
                location: "Reykjavík, Iceland"
            };

            $scope.menu = [{
                title: "Details",
                link: "showTabDialog($event)"
            }];

            $scope.education = [
                { school: "University of Reykjavík", department: "Computer Science", description: "asldfæj", startDate: "2014", endDate: "-" },
                { school: "Technical School", department: "Computer Science", description: "asldfæj", startDate: "2014", endDate: "-" }

            ];





            $scope.showWorkDialog = function (ev) {
                $mdDialog.show({
                    templateUrl: 'directives/dialogs/work.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });
            };

            $scope.showEducationDialog = function (ev) {
                $mdDialog.show({
                    templateUrl: 'directives/dialogs/education.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });
            };

            $scope.showSkillsDialog = function (ev) {
                $mdDialog.show({
                    templateUrl: 'directives/dialogs/skills.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });
            };






            $scope.links = [
                { name: "Facebook", link: "http://www.facebook.com/birkirfreyrbaldurss", icon: "img/icons/facebook.png", direction: "bottom" },
                { name: "Twitter", link: "http://twitter.com/birkirfr", icon: "img/icons/twitter.png", direction: "bottom" },
                { name: "Instagram", link: "http://www.instagram.com/birkirfr/", icon: "img/icons/instagram.png", direction: "bottom" },
                { name: "Spotify", link: "http://play.spotify.com/user/1142285129", icon: "img/icons/spotify.png", direction: "bottom" },
                { name: "Youtube", link: "http://www.youtube.com/user/birkirf", icon: "img/icons/youtube.png", direction: "bottom" },
                { name: "LinkedIn", link: "http://www.linkedin.com/in/birkir-freyr-baldursson", icon: "img/icons/linkedin.png", direction: "top" }
            ];

            $scope.toggleSidenav = function (menuId) {
                $mdSidenav(menuId).toggle();
            };

        }]);


