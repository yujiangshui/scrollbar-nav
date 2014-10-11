;( function( $ ){

	$.fn.extend( {
		scrollbarNav: function( options ){

			this.defaults = {
				topOffset : 10
			};

			var settings = $.extend( {}, this.defaults, options );

			return this.each( function() {

				var $this = $( this );

				//DOM 结构创建
				var tempDOM = $('<ul class="scroll-nav"></ul>');
				var contentHeight = $this.height();
				$this.find('h1,h2,h3,h4,h5,h6')
					.each(function(index, elem) {
						var itemOffsetTop = $(elem).offset().top - settings.topOffset;
						var windowHeight = $(window).height();
						//计算 item 在边栏的位置
						var scrollbarOffsetTop = (itemOffsetTop / contentHeight) * windowHeight;
						var navItem = '<li style="top:'+scrollbarOffsetTop+'px" class="scroll-nav-'+elem.tagName.toLowerCase()+'" data-offset-top="'+itemOffsetTop+'px">'+$(elem).text()+'</li>'
						tempDOM.append(navItem);
				});
				$('body').append(tempDOM);

				//单击滚动功能实现
				$('body').on('click','.scroll-nav li',function() {
					var offsetTop = $(this).data('offset-top');
					console.log(offsetTop);
					$('body').animate({scrollTop: offsetTop},200);
				});


			});

		}
	});

})( jQuery );