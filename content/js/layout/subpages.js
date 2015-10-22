require.config({
	waitSeconds: 100,
	paths: {
        // define libs
        "jquery": "../modules/libs/jquery-v2.1.3.min",
        
        // define plugins
        "hmbrgr": "../modules/plugins/hmbrgr.min",
        "stellar": "../modules/plugins/stellar.min",
		"elements": "../modules/plugins/elements.min",
        "owl": "../modules/plugins/owl.carousel.min",
        "dropdown": "../_source/dropdowns"
	},
    
    // load order, depencies
	shim: {
        
        // load libraries first
		"jquery": { exports: "jquery" },
        
        // load plugins
        "hmbrgr": { deps:['jquery'], exports: "hmbrgr" },
        "stellar": { deps:['jquery'], exports: "stellar" },
        "elements": { deps:['hmbrgr'], exports: "elements" },
        "dropdown": { deps:['jquery'], exports: "dropdown" },
        "owl": { deps:['hmbrgr'], exports: "owl" }
        
	},
	deps: ["../core/app-subpage"]
});'jquery', 'hmbrgr', 'stellar', 'owl', 'dropdown'