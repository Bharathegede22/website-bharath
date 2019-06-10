
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });


    //  Counter Js

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-gallery').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 6,
            }

        }
    });


$('.active-blog-slider').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 60000,
        smartSpeed: 60000,
        animateOut: 'fadeOut',
      })


    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
    });

      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();

    
          var small_data = {
            data: [
                {   
                    filter: "inter",
                    img: "./img/malaysia.jpg",
                    location: "MALAYSIA",
                    id:"#malaysia",
                    description: "Malaysia is the one of the world most popular for coastal tourism. Langkawi, Kedah most famous nature island escape for family. Malaysia is food heaven",
                    price:"259,900"
                    
                },
                {   
                    filter: "inter",
                    img: "./img/jordan.jpg",
                    location: "JORDAN",
                    id:"#jordan",
                    description: "Jordan's most famous national park is Wadi Rum, where you can spend the night amid the silent desert expanse at a simple Bedouin Beit Shar (goat-hair tent) ",
                    price:"259,900" 
                },

                {   
                    filter: "inter",
                    img: "./img/japan.jpg",
                    location: "JAPAN",
                    id:"#japan",
                    description: "The awesome weapon of the super cool ultra warrior. Ninjas: Just as famous asJapan's samurai, the sneaky ninja is loved all over the world. ... Temples: Some",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/dubai.jpg",
                    location: "DUBAI",
                    id:"#dubai",
                    description: "Glitzy Dubai is the United Arab Emirates' holiday hot spot. ... Dubai is famous for sightseeing attractions such as the Burj Khalifa (the world's tallest building) and ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/singapore.jpeg",
                    location: "SINGAPORE",
                    id:"#singapore",
                    description: "Singapore is a multi-cultured country. This is well known for various type of cuisines, night life style, shopping and specially for it's economic growth. Singapore is hub of  ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/indonesia.jpg",
                    location: "INDONESIA",
                    id:"#indonesia",
                    description: "Besakih, Bali, Indonesia: The Mother Temple of Besakih, or Pura Besakih, in the village of Besakih on the slopes of Mount Agung in eastern",
                    price:"259,900"
                    
                },
                {   
                    filter: "inter",
                    img: "./img/usa.jpeg",
                    location: "USA",
                    id:"#usa",
                    description: "The United States is famous for many cultural achievements including its thriving film industry and the creation of many forms of  ",
                    price:"259,900" 
                },

                {   
                    filter: "inter",
                    img: "./img/thailand.jpeg",
                    location: "THAILAND",
                    id:"#thailand",
                    description: "Thailand is famous for its beaches, but the one thing tourists love about this nation are its people. Thai people are among the ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/greece.jpg",
                    location: "GREECE",
                    id:"#greece",
                    description: "Greece is famous for many different reasons, including its historical sites, being the birthplace of democracy, the ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/kenya.jpg",
                    location: "KENYA",
                    id:"#kenya",
                    description: "Famous for its classic savanna safaris, Kenya is a country of dramatic extremes and classic contrasts. Deserts and alpine  ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/russia.jpeg",
                    location: "RUSSIA",
                    id:"#russia",
                    description: "Russia represents one of the most sprawling and beautiful examples of 15th century religious architecture anywhere on Earth. ",
                    price:"259,900"
                    
                },
                {   
                    filter: "inter",
                    img: "./img/canada.jpeg",
                    location: "CANADA",
                    id:"#canada",
                    description: "Canada is known for the production of maple syrup, for having more lakes than any other country, as a popular filming ",
                    price:"259,900" 
                },

                {   
                    filter: "inter",
                    img: "./img/france.jpeg",
                    location: "FRANCE",
                    id:"#france",
                    description: "Paris, the City of Light is the world's most visited capital. The city is proud of its many monuments from the iconic Eiffel Tower to the ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/srilanka.jpeg",
                    location: "SRI LANKA",
                    id:"#srilanka",
                    description: "The most popular items among tourists are handloom fabrics, leather products, reproduction antiques, jewelry and ceramics.  ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/egypt.jpg",
                    location: "EGYPT",
                    id:"#egypt",
                    description: "Egypt is famous for its ancient civilization and some of the world’s most famous monuments, including the Giza pyramids, the  ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/maurtius.jpeg",
                    location: "MAURITIUS",
                    id:"#mauritius",
                    description: "SÎle aux Cerfs Island, known in English as the deer island is an island near the east coast of ",
                    price:"259,900"
                    
                },
                {   
                    filter: "inter",
                    img: "./img/hongkong.jpg",
                    location: "HONGKONG",
                    id:"#hongkong",
                    description: "Temple Street is the most famous open air market inHong Kong, which is well known as a commercial center where you ",
                    price:"259,900" 
                },

                {   
                    filter: "inter",
                    img: "./img/turkey.jpeg",
                    location: "TURKEY",
                    id:"#turkey",
                    description: "Textiles from Tulu. Turkey is not the only country in the world that is famous for its beautiful textiles, but only Turkey has Tulu, an amazing  ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/australia.jpg",
                    location: "AUSTRALIA",
                    id:"#australia",
                    description: "Australia is world famous for its natural wonders and wide open spaces, its beaches, deserts, the bush, and the Outback. Australia ",
                    price:"259,900" 
                },
                
                {   
                    filter: "inter",
                    img: "./img/newzland.jpeg",
                    location: "NEW ZEALAND",
                    id:"#newzealand",
                    description: "A small island nation home to around 4.5 million people located in the Pacific Ocean, New Zealand isfamous for its national rugby ",
                    price:"259,900"
                    
                },
                {   
                    filter: "inter",
                    img: "./img/fiji.jpg",
                    location: "FIJI",
                    id:"#fiji",
                    description: "Fresh food. Fiji is known to have some of the best food in the South Pacific thanks to the Indian, Southeast Asian and Chinese ",
                    price:"259,900" 
                },

                {   
                    filter: "inter",
                    img: "./img/iseral.jpeg",
                    location: "ISRAEL",
                    id:"#israel",
                    description: "Israel has the highest number of museums per capita in the world. In 2009, the two most visited sites were the Western Wall and the  ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/spain.jpeg",
                    location: "SPAIN",
                    id:"#spain",
                    description: "Paella. Originating in Valencia, paella is a rice dish prepared with meat or seafood and probably takes the crown in terms of ",
                    price:"259,900" 
                },
                {   
                    filter: "inter",
                    img: "./img/italy.jpeg",
                    location: "ITALY",
                    id:"#spain",
                    description: "Art and architecture in Italy. Italy has given rise to a number of architectural styles, including classical Roman, Renaissance,  ",
                    price:"259,900" 
                },
                
               
                    // Domestic details
                {   
                    filter: "dom",
                    img: "./img/andaman.jpeg",
                    location: "ANDAMAN",
                    id:"#andaman",
                    description: "Coral Reefs. Head to Jolly Buoy Island or Red Skin Island for the best view of the multicoloured coral reefs that Andaman is  ",
                    price:"259,900"
                    
                },
                {   
                    filter: "dom",
                    img: "./img/goa.jpeg",
                    location: "GOA",
                    id:"#goa",
                    description: "Goa is a coastal region located in the western part of India famous as most popular tourist destination. Bounded by Arabian  ",
                    price:"259,900" 
                },

                {   
                    filter: "dom",
                    img: "./img/gujarat.jpg",
                    location: "GUJARAT",
                    id:"#gujarat",
                    description: "Gujarat is famous for its rich cultural heritage, especially dance (garba and dandiya raas) and food (dhokla, fafda, khakra, etc.). ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/kar.jpeg",
                    location: "KARNATAKA",
                    id:"#kar",
                    description: "It is a hilly location and is famous for its lush greensurroundings and pleasant climate. It is also an important agricultural town in  ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/kerala.jpg",
                    location: "KERALA",
                    id:"#kerala",
                    description: "Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its   ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/nepal.jpeg",
                    location: "NEPAL",
                    id:"#nepal",
                    description: "Besides being known for its breathtaking vistas Nepal also holds some impressive world records. Like, for instance, the ",
                    price:"259,900"
                    
                },
                {   
                    filter: "dom",
                    img: "./img/delhi.jpg",
                    location: "DELHI",
                    id:"#delhi",
                    description: "Delhi is famous for its tourist attractions,food,and it's marketplaces. Since its the national capital of the country you can explore rashtrapati bhavan, parliament house, India gate. If you are dedicated to history you can visit qutub minar, humay",
                    price:"259,900" 
                },

                {   
                    filter: "dom",
                    img: "./img/himachal.jpg",
                    location: "HIMACHAL PRADESH",
                    id:"#himachal",
                    description: "Himachal Pradesh is famous for its Himalayan landscapes and popular hill-stations. Many outdoor activities such as rock  ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/bhutan.jpg",
                    location: "BHUTAN",
                    id:"#bhutan",
                    description: "Bhutan is known for its natural beauty, forest conservation, gross national happiness, great culture & heritage and biodiversity. ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/tamil.jpg",
                    location: "TAMIL NADU",
                    id:"#tamil",
                    description: "About CoimbatoreThe highly industrialized town of Coimbatore is often termed as the 'Manchester of India'. It is the  ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/punjab.jpg",
                    location: "PUNJAB",
                    id:"#punjab",
                    description: "Punjab is well known for tourist destinations in various cities like Amritsar, Jalandhar, Ludhiana, Patialaand Bathinda etc.. Famous  ",
                    price:"259,900"
                    
                },
                {   
                    filter: "dom",
                    img: "./img/jandk.jpg",
                    location: "JAMMU & KASHMIR",
                    id:"#jandk",
                    description: "Jammu known as the City of temples isfamous for its beautiful temples and Basmati rice. The ",
                    price:"259,900" 
                },

                {   
                    filter: "dom",
                    img: "./img/sikkim.jpg",
                    location: "SIKKIM",
                    id:"#sikkim",
                    description: "Kirateshwar Mahadev Temple in Legship is dedicated to Hindu God Shiva. The Rumtek monastery is among Sikkim's most famous  ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/rajasthan.jpg",
                    location: "RAJASTHAN",
                    id:"#rajasthan",
                    description: "Rajasthan is one of the most popular tourist destinations in India, for both domestic and international tourists. Rajasthan  ",
                    price:"259,900" 
                },
                {   
                    filter: "dom",
                    img: "./img/odisha.jpeg",
                    location: "ODISHA",
                    id:"#odisha",
                    description: "The capital city of Odisha, Bhubaneshwar is most famous for its temples (there are over 700, mostly devoted to Lord Shiva) ",
                    price:"259,900" 
                }
                
            ]

        };

          var small_source   = $("#small-template").html();
          var small_template = Handlebars.compile(small_source);
          $("#small-content-placeholder").html(small_template(small_data));


         
        

      });
      
 });

 
 