<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function($){

  $(function(){
    $(".addon .nf-field-label").live('click', function(){
      $(".addon .nf-field-element").toggleClass("show");
      $("#nf-field-13-container").toggleClass("show");
      $("#nf-field-16-container").toggleClass("show");
    });
  });
  
  //function updateSum() {
   //   var total = 0;
   //   $("input[type=checkbox]:checked").each(function(i, n) {
    //    total += parseInt($(n).val());
    //  })
    //  $("#nf-field-13").val(total);
   // }
    // run the update on every checkbox change and on startup
   // $("input[type=checkbox]").change(updateSum);
  //  updateSum();
  
  //$(function recalculate() {
  //    var sum = 0;
   //   $("input[type=checkbox]:checked").each(function() {
   //     sum += parseInt($(this).attr("value"));
   //   });
    //  $("#nf-field-13").value(sum);
  //});
 // $("input[type=checkbox]").change(function() {
  //  recalculate();
 // });
  
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#dslc-header").addClass("show");
    } else {
        $("#dslc-header").removeClass("show");
    }
});
  
});</script>
<!-- end Simple Custom CSS and JS -->
