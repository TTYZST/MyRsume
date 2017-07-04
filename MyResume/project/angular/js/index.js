 // 主页面js
 var app = angular.module("myApp",["ui.router"]);
        app.controller("MyCtrl",["$scope","$http",function($scope,$http) {
        			$http.get("data/articles.json").success(function(sec){
        				$scope.articles=sec.articles;
        			})
        }]);

        app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
            // 优秀作品主页面
            .state("main",{
                url:"/",
                templateUrl:"tmp/good.html"
                        
            })

             // 全部作品页面
            .state("main.sub2",{
                url:"/sub2",
                templateUrl:"tmp/allproject.html"
            })
        

            // 邦飞web前端页面
            .state("all1",{
                url:"/all1",
                template:"<iframe width='100%' height='800px' frameborder='0' src='bfweb/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 项目展示页面
            .state("all2",{
                url:"/all2",
                template:"<iframe width='100%' height='800px' frameborder='0' src='index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 京东页面
            .state("all3",{
                url:"/all3",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/zhongshuntao/JD/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 博客页面
            .state("all4",{
                url:"/all4",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/zhongshuntao/faybk/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 钟顺涛个人简历
            .state("all5",{
                url:"/all5",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/zhongshuntao/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 京东页面
            .state("all6",{
                url:"/all6",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/futao/jingdong/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 博客页面
            .state("all7",{
                url:"/all7",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/futao/fay-blog/fay.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 付滔个人简历
            .state("all8",{
                url:"/all8",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/futao/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

             // 京东页面
            .state("all9",{
                url:"/all9",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/luodingqiang/jd1/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 博客页面
            .state("all10",{
                url:"/all10",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/luodingqiang/feizhou/index.html'>页面加载中</iframe>",
                controller:"detail"
            })

            // 罗定强个人简历
            .state("all11",{
                url:"/all11",
                template:"<iframe width='100%' height='800px' frameborder='0' src='project/luodingqiang/index.html'>页面加载中</iframe>",
                controller:"detail"
            })
           
        }]); 
         app.controller("detail",["$scope",function($scope) {

        }]);



// good
$('.all-works').click(function() {
		$('.index-good').css("display","none");
	});
	$('.good-works').click(function() {
		$('.index-good').css("display","block");
	});
	$('.project-title').click(function() {
		$('.index-good').css("display","block");
	})

