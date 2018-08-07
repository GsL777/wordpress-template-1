//javascript functions
//$.noConflict(); //jquery $ sign doesn't conflict with other javascript functions

/*grid row cards START*/
$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

/* grid row cards END*/


/*index.html multi-gallery makes image bigger START

$('.pics').hover(function() {
    $(this).data('width', $(this).width());
    $(this).data('height', $(this).height());
    $(this).css({
        width: $(this).width() * 1.1,
        height: $(this).height() * 1.1
    });
}, function() {
    $(this).css({
        width: $(this).data('width'),
        height: $(this).data('height')
    });
});

/*index.html multi-gallery END*/





















/*#id map GOOGLE MAPS START*/
function initMap() {
	var location = {lat: 54.892813, lng: 23.916402};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 17,
		center: location
	});
	
	var marker = new google.maps.Marker({ position: new google.maps.LatLng(54.892813, 23.916402), title: 'Gimnastikos centras', map:map});
	var marker = new google.maps.Marker();
		marker.setPosition(new google.maps.LatLng(54.892813, 23.916402));
		marker.setMap(map);
};
//*#id map GOOGLE MAPS END*/





/*gallery.html picture gallery START*/

let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });


/*gallery.html picture gallery END*/