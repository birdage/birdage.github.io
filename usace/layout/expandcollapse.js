$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],

		// Just for fun also changing the look of the menu
		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});

	reqUrl = 'http://usace.asa.rocks/services/structure/'
  
    var ajax  = $.ajax({
          type: 'GET',
          url: reqUrl,  
          dataType: 'jsonp',
        })  
    .success(function( structure ) {
      $.each( structure, function( val, cat ) {           
        //loop over each category   
        if (val == 'oceanography'){
	        $.each( cat, function( val1, type ) {		    	
	           item_list = []
			  var addItems = [{
					name: val1,
					icon: 'fa fa-phone-square',
					link: '#',
					items: item_list
			  }];

			 
		      //loop over type
		        var st_contain = {
		      		title: val1,
					icon: 'fa fa-phone-square',
					link: '#',
					items: []					
				}
		      $.each( type, function( val2, station ){
		      	var st = {
		      		name: val2,
					icon: 'fa fa-book',
					link: '#'							
				}
				st_contain.items.push(st)
				console.log(val2)          	
	          });
			  item_list.push(st_contain)
		      addItems.items = item_list
		      

			  console.log(addItems)

	          var $addItem = $( '#menu' ).multilevelpushmenu( 'findmenusbytitle' , 'oceanography' ).first();
			  $( '#menu' ).multilevelpushmenu( 'additems' , addItems , $addItem , 0 );
	        });

	    //if ocean
    	};
    //ocean
     })
    //end request
    })

});