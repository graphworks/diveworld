require.config({
	waitSeconds: 100,
	paths: {
        // define libs
        "jquery": "../modules/libs/jquery-v2.1.3.min",
        
        // define plugins
		"hmbrgr": "../modules/plugins/hmbrgr.min",
        "stellar": "../modules/plugins/stellar.min",
        "flickerplate": "../modules/plugins/flickerplate.min",
        "owl": "../modules/plugins/owl.carousel.min",
        "dropdown": "../_source/dropdowns",
        "swipe": "../_source/swipe"
        
	},
    
    // load order, depencies
	shim: {
        
        // load libraries first
		"jquery": { exports: "jquery" },
        
        // load plugins
        "hmbrgr": { deps:['jquery'], exports: "hmbrgr" },
        "stellar": { deps:['jquery'], exports: "stellar" },
        "flickerplate": { deps:['jquery'], exports: "flickerplate" },
        "owl": { deps:['hmbrgr'], exports: "owl" },
        "dropdown": { deps:['jquery'], exports: "dropdown" },
        "swipe": { deps:['jquery'], exports: "swipe" }
        
        
	},
	deps: ["../core/app-main"]
});