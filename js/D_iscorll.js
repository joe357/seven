var menuPage=new iScroll("container",{
			onBeforeScrollStart:function(e){
				var tagName=e.target.nodeName.toLowerCase();
				if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
					e.preventDefault();	
				}		
			}
		})