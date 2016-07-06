$(function() {
	var A = $(".AsiaPlace");
	var W = $(".way");
	$("#Asia").on("click", function() {
		$(".way").hide();
		$(this).parent().siblings().children().removeClass("on");
		if (A.is(':visible')) {
			$(".AsiaPlace").hide();
			$(this).removeClass("on");
		} else {
			$(".AsiaPlace").show();
			$(this).addClass("on");
			$.ajax({
				type: "get",
				url: "D_Asia.json",
				success: function(data) {
					var html = $("#moban1").html(),
						moban = Handlebars.compile(html);
					$(".AsiaPlace").html(moban(data));
				}
			});
		}

	})
	$("#all").on("click", function() {
		$(".AsiaPlace").hide();
		$(this).parent().siblings().children().removeClass("on");
		if (W.is(':visible')) {
			$(".way").hide();
			$(this).removeClass("on");
		} else {
			$(".way").show();
			$(this).addClass("on");
			$.ajax({
				type: "get",
				url: "D_Asia.json",
				success: function(data) {
					var html = $("#moban2").html(),
						moban = Handlebars.compile(html);
					$(".way").html(moban(data));
				}
			});
		}
	})
	$("#home").on('click', function() {
		$.ajax({
			type: "get",
			url: "D_Asia.json",
			success: function(data) {
				console.log(data);
				var html = $("#moban3").html(),
					moban = Handlebars.compile(html);
				$(".seach").html(moban(data));
				$(".seach a:nth-of-type(1)").addClass("home");
				$(".seach a:nth-of-type(2)").addClass("search");
				$(".seach a:nth-of-type(3)").addClass("my");
				$(".seach a:nth-of-type(4)").addClass("shopp");
				$(".search").click(function() {
					$(".seach div a").hide();
					$(".seach div").after("<input type='search'/>");
				})
			}
		});

		$('.seach').animate({
			height: 'toggle'
		}, "slow")
	})

})