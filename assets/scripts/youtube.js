$(document).ready((x) => {
  // YouTube API CALL
  var key = "AIzaSyB9IppNXuEhH6SDwKTqGX2IvXvnTN-u_Jo";

  // CHRIS "AIzaSyBiDHX3IxmCc8lrjytfMjRpFnsVPvI5i7U";
  // KRISTEN "AIzaSyDSRviXZqJhq-NfohY5q1hhxdjdbnqnPc4";
  // ANDIE "AIzaSyB9IppNXuEhH6SDwKTqGX2IvXvnTN-u_Jo";
  // DYLAN "AIzaSyBihort7mkhzu-EAB_W3I-b1s6RIXYGgl8"; 
   
  
  // var searchTerm = $("#search-input").val().trim()

  // var queryURL =
  //   "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=NASA+" + searchTerm + "&key=" + key;

    var queryURL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=NASA+&key=" + key;


  // AJAX call for YouTube API response
  $.ajax({
    url: queryURL,
    method: "GET",
  })
  .then(function (response) {
    console.log(queryURL);
    console.log(response);

    onYouTubeIframeAPIReady(response.items[0].id.videoId);
    onPlayerReady(event);
    stopVideo();
    youTubeModal();  
  });
  
    // YouTube Provided iFrame
      // This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // This function creates an <iframe> (and YouTube player) after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady(id) {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: id,
        });
      }

      // The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function youTubeModal() {
        var trigger = $("body").find('[data-toggle="modal"]');
        trigger.click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-theVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
        });
      }

    // function getSearchInput(searchTerm) {
    //     var queryURL =
    //       "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=NASA+" + searchTerm + "&key=" + key;
            
    //       $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       }).then(response => {
    //         getSearchInput(response);
    //       });
    // } 
      
    // $("#search-button").on("click", function(event){
    //   event.preventDefault();

    //   var searchTerm = $("#search-input").val().trim()

    //   getSearchInput(searchTerm);
    // })
  
});
