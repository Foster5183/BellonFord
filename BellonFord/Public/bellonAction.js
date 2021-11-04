// waiting until the dom is loaded before calling objects within the dom
$(document).ready(function () {
  //variable declartions for content boxes
  let $homeBox = $("#homeBox");
  let $historyBox = $("#historyBox");
  let $videoBox = $("#videoBox");
  let $toursBox = $("#toursBox");
  let $socialsBox = $("#socialsBox");
  let $aboutBox = $("#aboutBox");
  let $contactBox = $("#contactBox");
  let $homeBtn = $("#home");
  let $historyBtn = $("#history");
  let $videoBtn = $("#video");
  let $toursBtn = $("#tours");
  let $socialsBtn = $("#socials");
  let $aboutBtn = $("#about");
  let $contactBtn = $("#contact");
  let $altText = $("#altText");
  //when page is first loaded only the home is visible
  $homeBox.show();
  $historyBox.hide();
  $videoBox.hide();
  $toursBox.hide();
  $socialsBox.hide();
  $aboutBox.hide();
  $contactBox.hide();
  $altText.hide();
  const preVal = "";
  // actions taken for each click
  $homeBtn.on("click", function () {
    $homeBox.show();
    $historyBox.hide();
    $videoBox.hide();
    $toursBox.hide();
    $socialsBox.hide();
    $aboutBox.hide();
    $contactBox.hide();
  });
  $historyBtn.on("click", function () {
    $homeBox.hide();
    $historyBox.show();
    $videoBox.hide();
    $toursBox.hide();
    $socialsBox.hide();
    $aboutBox.hide();
    $contactBox.hide();
  });
  $videoBtn.on("click", function () {
    $homeBox.hide();
    $historyBox.hide();
    $videoBox.show();
    $toursBox.hide();
    $socialsBox.hide();
    $aboutBox.hide();
    $contactBox.hide();
  });
  $toursBtn.on("click", function () {
    $homeBox.hide();
    $historyBox.hide();
    $videoBox.hide();
    $toursBox.show();
    $socialsBox.hide();
    $aboutBox.hide();
    $contactBox.hide();
  });
  $socialsBtn.on("click", function () {
    $homeBox.hide();
    $historyBox.hide();
    $videoBox.hide();
    $toursBox.hide();
    $socialsBox.show();
    $aboutBox.hide();
    $contactBox.hide();
  });
  $aboutBtn.on("click", function () {
    $homeBox.hide();
    $historyBox.hide();
    $videoBox.hide();
    $toursBox.hide();
    $socialsBox.hide();
    $aboutBox.show();
    $contactBox.hide();
  });
  $contactBtn.on("click", function () {
    $homeBox.hide();
    $historyBox.hide();
    $videoBox.hide();
    $toursBox.hide();
    $socialsBox.hide();
    $aboutBox.hide();
    $contactBox.show();
  });
  //Reflexive content based on VIEWPORT WIDTH
  // VARIABLE DECLARATIONS

  let $theLab = $("#theLab");
  let $ghosty = $("#ghosty");
  let $vw = $(window).width();
  //TEST VW WIDTH WITH EXPECTED BEHAVIOR
  //console.log($vw);
  //!!!!REFRESH WHEN THE SCREEN IS RESIZED!!!//
  $(window).on("resize", function () {
    location.reload();
  });

  if ($vw < 400) {
    $altText.show();
    $theLab.hide();
    $contactBtn.hide();
    $aboutBtn.hide();
    $socialsBtn.hide();
  }

  if ($vw > 600) {
    $theLab.show();
    $altText.hide();
    $historyBtn.show();
    $videoBtn.show();
    $toursBtn.show();
    $socialsBtn.show();
    $aboutBtn.show();
    $contactBtn.show();
  }
  if ($vw < 700) {
    $aboutBtn.hide();
  }
  //!!!!****************** Behavior for the Video box*************** !!!///
  //Each Video is represented by an Icon and displayed on button click///
  //VIDEOS//
  let $vidPlace = $("#vPlaceHold");
  let $vid2 = $("#vid2");
  let $vid3 = $("#vid3");
  let $vid4 = $("#vid4");

  //ICONS//
  let $ico25 = $("#ico25");
  let $ico35 = $("#ico35");
  let $ico45 = $("#ico45");
  //*************************BeHaViOrS************************//
  //**Initially hide the videos***//
  $vidPlace.show();
  $vid2.hide();
  $vid3.hide();
  $vid4.hide();
  //***Icons on Click
  $ico25.on("click", function () {
    $vidPlace.hide();
    $vid2.show();
    $vid3.hide();
    $vid4.hide();
  });
  $ico35.on("click", function () {
    $vidPlace.hide();
    $vid2.hide();
    $vid3.show();
    $vid4.hide();
  });
  $ico45.on("click", function () {
    $vidPlace.hide();
    $vid2.hide();
    $vid3.hide();
    $vid4.show();
  });
});
