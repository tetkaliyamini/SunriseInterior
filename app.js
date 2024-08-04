//Animation HOme
TweenMax.to(".loading h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut,
  });
  
  TweenMax.to(".loading ", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut,
  });
  
  TweenMax.from(".logo ", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  });
  
  TweenMax.staggerFrom(
    "nav ul li ",
    1,
    {
      delay: 2.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    },
    0.2
  );
  
  TweenMax.staggerFrom(
    ".social-media ul li ",
    1,
    {
      delay: 2.4,
      opacity: 0,
      x: 20,
      ease: Expo.easeInOut,
    },
    0.2
  );
  TweenMax.from(".bottom-text ", 2, {
    delay: 2.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".content ", 2, {
    delay: 1.5,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".content h2 ", 2, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".content p ", 2, {
    delay: 3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".content a ", 2, {
    delay: 3.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".hero-post-slides", 2, {
    delay: 2,
    opacity: 0,
    x: -60,
    ease: Expo.easeInOut,
  });
  //Animation services
  TweenMax.from("#services header", 2, {
    scrollTrigger: "#services",
    x: 500,
    start: "bottom center",
  });
  TweenMax.from(".text-s-item", 1, {
    scrollTrigger: ".text-s-item",
    y: 200,
    opacity: 0,
    start: "bottom bottom",
  });
  //Timeline Offer
  let tlOffer = new TimelineMax({
    scrollTrigger: {
      trigger: ".offer",
      start: "center bottom",
    },
  });
  tlOffer.from(".offer-img", 1, {
    x: -200,
    opacity: 0,
  });
  tlOffer.from(
    ".offer-text",
    1,
    {
      x: 200,
      opacity: 0,
    },
    "-=1"
  );
  //Timeline AboutUS
  let tlAbout = new TimelineMax({
    scrollTrigger: {
      trigger: "#about-us",
      start: "top center",
    },
  });
  tlAbout.from(
    ".about-img",
    1,
    {
      x: -200,
      opacity: 0,
    },
    0
  );
  tlAbout.from(
    ".about-text",
    1,
    {
      x: 200,
      opacity: 0,
    },
    "-=1"
  );
  //Timeline Gallery
  let tlGallery = new TimelineMax({
    scrollTrigger: {
      trigger: "#galleryy",
    },
  });
  tlGallery.staggerFrom(
    ".gallery-filters li",
    0.2,
    {
      y: 30,
      opacity: 0,
    },
    0.2
  );
  tlGallery.staggerFrom(
    ".gallery-item",
    0.5,
    {
      y: 30,
      opacity: 0,
    },
    0.2
  );
  //Timeline Subscribe
  let tlSubscribe = new TimelineMax({
    scrollTrigger: {
      trigger: "#contact",
      start: "top center",
    },
  });
  tlSubscribe.from(".subscribe-text", 1, {
    scale: 1.3,
    opacity: 0,
  });
  tlSubscribe.from(".subscribe-card", 1, {
    x: -1000,
    opacity: 0,
  });
  //TimeLine Footer
  let tlFooter = new TimelineMax({
    scrollTrigger: {
      trigger: "footer",
      start: "center bottom",
    },
  });
  tlFooter.from(".right-text-content", 1, {
    x: -300,
    opacity: 0,
  });
  tlFooter.from(
    ".left-text-content",
    1,
    {
      x: 300,
      opacity: 0,
    },
    "-=1"
  );
  //owl caousel HOme
  if ($.fn.owlCarousel) {
    var welcomeSlide = $(".hero-post-slides");
  
    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-up"></i>',
        '<i class="fa fa-angle-down"></i>',
      ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 1000,
      animateOut: "slideOutRight",
      animateIn: "slideInLeft",
    });
    //Page Count
    welcomeSlide.on("changed.owl.carousel", function (event) {
      if (!event.namespace || event.property.name != "position") return;
      $(".page-count").html(
        event.relatedTarget.relative(event.item.index) +
          1 +
          "<span>" +
          "/" +
          event.item.count +
          "</span>"
      );
    });
  }
  
  //Counter Up
  $(".counter").counterUp({
    delay: 25,
    time: 1000,
  });
  
  //FancyBox
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ["zoom", "share", "fullScreen", "download", "thumbs", "close"],
  });
  
  // Filter Gallery
  $(".gallery-filters li").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".gallery-item").show("1000");
    } else {
      $(".gallery-item")
        .not("." + value)
        .hide("1000");
      $(".gallery-item")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".gallery-filters li").click(function () {
    $(this).addClass("active-btn").siblings().removeClass("active-btn");
  });
  
  //owlCaousel FeedBack
  var welcomeSlide = $(".card-post-slides");
  
  welcomeSlide.owlCarousel({
    items: 2,
    margin: 30,
    loop: true,
    nav: true,
    navText: [""],
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    smartSpeed: 1000,
    animateOut: "slideOutRight",
    animateIn: "slideInLeft",
    responsive: {
      0: {
        items: 1,
      },
      767.98: {
        items: 2,
      },
    },
  });
  
  //Jump To Top
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 500) {
      $(".go-top").fadeIn(400);
    } else {
      $(".go-top").fadeOut(400);
    }
  });
  
  //Sticky
  
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".main-head").addClass("sticky");
    } else {
      $(".main-head").removeClass("sticky");
    }
  });
  
  //Scroll Spy
  var dataSpyList = [].slice.call(
    document.querySelectorAll('[data-bs-spy="scroll"]')
  );
  
  // toggle Nav Tablet
  $("header nav button").click(function () {
    $("nav").toggleClass("bg-pink");
  });