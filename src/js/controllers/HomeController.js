angular.module('app').controller("HomeController",
    ['$scope', '$http', '$location', '$timeout', '$resource', '$anchorScroll', '$document',
        function ($scope, $http, $location, $timeout, $resource, $anchorScroll, $document) {

            $scope.workCards = [
                {
                    title: "Sandbrún ehf",
                    position: "Captain / 2nd engineer / Sailor",
                    description: "Started as a sailor at young age on a small boat named Diddi SH42, got my licence and beginned my fishing carreer as a captain in the summertime. Later on i got my marine engineer licence and started working on another larger ship which this company owns as well as a 2nd engineer for two seasons. This experience has tought me a lot and trained me in for example, how to work in difficult situations where i gained both physical and mental strength alongside experience in working with others",
                    duration: "2004-2016",
                    imagePath: "img/diddi.jpg",
                    hasWeb: false
                }, {
                    title: "Vodafone",
                    position: "Sales representative",
                    description: "Worked in the call center as a sales consultant, selling their telecommunicative services. From this job i gained a lot of knowledge of telecommunicating services, experience and training in solving problems in both technical and accounting area. I also improved my communicating skills",
                    duration: "2011",
                    imagePath: "img/vodafone.png",
                    website: "https://vodafone.is",
                    hasWeb: true
                }, {
                    title: "Snæfellsbær",
                    position: "Handyman",
                    description: "Ministered variety of tasks for my home town working as a handyman for many licenced craftsmans such as carpenders, painters and plumbers. There i gained a lot of practical work technique",
                    duration: "2006-2008",
                    imagePath: "img/is-snaef.gif",
                    website: "http://snb.is",
                    hasWeb: true
                }];            
          

              $scope.educationCards = [{
                badgeClass: 'animated fadeInLeft',
                badgeIconClass: 'school',
                side: 'left',
                title: 'Reykjavík University',
                content: 'Studies that educate students on how to design and analyze software, algorithms, systems, networking, databases, programming languages, hardware, security and new technology.',
                degree: 'Computer Science',
                imagePath: 'img/ru.png',
                duration: '2014 - present',
                tooltipDirection: 'right',

        
            }, {
                badgeClass: 'animated fadeInRight',
                badgeIconClass: 'school',
                side: 'right',
                title: 'Reykjavík University',
                content: 'Took few courses in math and programming to prepare myself for the degree.',
                degree: 'Pre-studies',
                imagePath: 'img/ru.png',
                duration: '2013 - 2014',
                tooltipDirection: 'left'
                
            }, {
                badgeClass: 'animated fadeInLeft',
                badgeIconClass: 'directions_boat',
                side: 'left',
                title: 'Technical school',
                content: 'Licence to control and manage engines on ships, educates students with detailed error detection course, liquid systems, electric systems and rules',
                degree: 'Marine Engineering',
                imagePath: 'img/logotskoli_2.jpg',
                duration: '2011',
                tooltipDirection: 'right'
                
            }, {
                badgeClass: 'animated fadeInRight',
                badgeIconClass: 'directions_boat',
                side: 'right',
                title: 'Technical school',
                content: 'Licence to control fishing ships with a maximum length of 12 meters. Courses about crafts or hardware on board, sailing rules, map calculations and history.',
                degree: ' Marine control',
                imagePath: 'img/logotskoli_2.jpg',
                duration: '2009',
                tooltipDirection: 'left'
                
            }, {
                badgeClass: 'animated fadeInLeft',
                badgeIconClass: 'supervisor_account',
                side: 'left',
                title: 'High School of Laugar',
                content: 'I know to much of icelandic sagas after this time.',
                degree: 'Sociology',
                imagePath: 'img/Laugar-logo.jpg',
                duration: '2008 - 2010',
                tooltipDirection: 'right'
                
            }];
            
            var self = this;

            self.hidden = false;
            self.isOpen = false;
            self.hover = true;
            $scope.showTooltip = false;
     
            $scope.$watch('demo.isOpen', function (isOpen) {
                if (isOpen) {
                    $timeout(function () {
                        $scope.tooltipVisible = self.isOpen;
                    }, 600);
                } else {
                    $scope.tooltipVisible = self.isOpen;
                }
            });

            self.pages = [
                { name: "About", icon: "account_box", link:"scrollToAbout()" },
                { name: "Education", icon: "account_box", link:"scrollToEducation()" },
                { name: "Work", icon: "account_box", link:"scrollToWork()" },
                { name: "Skills", icon: "account_box", link:"scrollToSkills()" },
            ];


            $scope.scrollToAbout = function () {
                var someElement = angular.element(document.getElementById('about'));
                var container = angular.element(document.getElementById('container'));
                container.scrollTo(someElement, 0, 800);
            };
            $scope.scrollToEducation = function () {
                var someElement = angular.element(document.getElementById('education'));
                var container = angular.element(document.getElementById('container'));
                container.scrollTo(someElement, 0, 800);
            };
            $scope.scrollToWork = function () {
                var someElement = angular.element(document.getElementById('work'));
                var container = angular.element(document.getElementById('container'));
                container.scrollTo(someElement, 0, 800);
            };
            $scope.scrollToSkills = function () {
                var someElement = angular.element(document.getElementById('skills'));
                var container = angular.element(document.getElementById('container'));
                container.scrollTo(someElement, 0, 800);
            };
            $scope.title = 'Welcome to my online portfolio.';

            var imagePath = 'img/profile/baraeg.jpg';

            $scope.goToAbout = function () {
                $location.hash('about');
                $anchorScroll();
            };


            $scope.links = [
                { name: "Facebook", link: "http://www.facebook.com/birkirfreyrbaldurss", icon: "img/icons/facebook.png", direction: "bottom" },
                { name: "Twitter", link: "http://twitter.com/birkirfr", icon: "img/icons/twitter.png", direction: "bottom" },
                { name: "Instagram", link: "http://www.instagram.com/birkirfr/", icon: "img/icons/instagram.png", direction: "bottom" },
                { name: "Spotify", link: "http://play.spotify.com/user/1142285129", icon: "img/icons/spotify.png", direction: "bottom" },
                { name: "Youtube", link: "http://www.youtube.com/user/birkirf", icon: "img/icons/youtube.png", direction: "bottom" },
                { name: "LinkedIn", link: "http://www.linkedin.com/in/birkir-freyr-baldursson", icon: "img/icons/linkedin.png", direction: "top" },
                { name: "Github", link: "http://github.com/bbffbb", icon:"img/icons/github.png", direction:"bottom"}
            ];

        }]);