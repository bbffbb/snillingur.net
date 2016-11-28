angular.module('ChatApp').controller("HomeController",
    ['$scope', '$location', '$timeout', '$mdBottomSheet', '$mdSidenav', '$mdDialog',
        function($scope, $location, $timeout, $mdBottomSheet, $mdSidenav, $mdDialog) {

            $scope.resume = [
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

            $scope.rating1 = 3;
            $scope.rating2 = 2;
            $scope.rating3 = 4;


            $scope.disabled3 = 70;

            $scope.invert = Math.floor(Math.random() * 100);

            $scope.isDisabled = true;

            $scope.cards = [{
                title: "My Philosophy",
                description: "my philosophy is..",
                imagePath: "/img/philosophy.png"
            },
            {
                title: "My Mission",
                description: "my philosophy is..",
                imagePath: "/img/mission.png"
            },
            {
                title: "My Process",
                description: "my philosophy is..",
                imagePath: "/img/process.png"
            }];

            $scope.info = {
                author: "Birkir Freyr Baldursson",
                email: "Birkirfreyrbaldurss@gmail.com",
                imagePath: "/img/baraeg.jpg",
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







            $scope.showTabDialog = function(ev) {
                $mdDialog.show({
                    templateUrl: 'directives/dialogs/details.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,

                });
            };


            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;

            $scope.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: '/img/baraeg.jpg',
                    text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                    id: currIndex++
                });
            };

            $scope.randomize = function() {
                var indexes = generateIndexesArray();
                assignNewIndexesToSlides(indexes);
            };

            for (var i = 0; i < 4; i++) {
                $scope.addSlide();
            }

            // Randomize logic below

            function assignNewIndexesToSlides(indexes) {
                for (var i = 0, l = slides.length; i < l; i++) {
                    slides[i].id = indexes.pop();
                }
            }

            function generateIndexesArray() {
                var indexes = [];
                for (var i = 0; i < currIndex; ++i) {
                    indexes[i] = i;
                }
                return shuffle(indexes);
            }

            // http://stackoverflow.com/questions/962802#962890
            function shuffle(array) {
                var tmp, current, top = array.length;

                if (top) {
                    while (--top) {
                        current = Math.floor(Math.random() * (top + 1));
                        tmp = array[current];
                        array[current] = array[top];
                        array[top] = tmp;
                    }
                }

                return array;
            }


            $scope.links = [
                { name: "Facebook", link: "http://www.facebook.com/birkirfreyrbaldurss", icon: "img/icons/facebook.png", direction: "bottom" },
                { name: "Twitter", link: "http://twitter.com/birkirfr", icon: "img/icons/twitter.png", direction: "bottom" },
                { name: "Instagram", link: "http://www.instagram.com/birkirfr/", icon: "img/icons/instagram.png", direction: "bottom" },
                { name: "Spotify", link: "http://play.spotify.com/user/1142285129", icon: "img/icons/spotify.png", direction: "bottom" },
                { name: "Youtube", link: "http://www.youtube.com/user/birkirf", icon: "img/icons/youtube.png", direction: "bottom" },
                { name: "LinkedIn", link: "http://www.linkedin.com/in/birkir-freyr-baldursson", icon: "img/icons/linkedin.png", direction: "top" }
            ];

            $scope.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

        }]);


