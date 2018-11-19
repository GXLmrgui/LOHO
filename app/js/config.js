require.config({
	baseUrl: "/",
	paths: {
		"header": "module/header",
		"hot": "module/hot",
		"mainfloor": "module/mainfloor",
		"footer": "module/footer",
		"banner": "module/banner",
        "jquery": "libs/jquery/jquery-1.11.3",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"tools": "libs/tools",
		"jquerycookie": "libs/jquery.cookie",
		"template": "libs/template-web",
		"list":"module/list",
		"glass":"module/glass",
		"product":"module/product"
		
	},
	//垫片
	shim:{
		"bootstrap": {
			deps: ["jquery"]
		}
	}
})