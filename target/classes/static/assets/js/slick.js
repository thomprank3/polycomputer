$(document).ready(function(){
    $('.product-slider').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 3,
        autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:`<button  class='slick-prev pull-left'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAASZJREFUaEPtltENwjAQQ50JYARGYIQyObABI5QN6ASgSvdRQZGSa6xcKuc7dfL8mqYJOx1pp1wQWG9mZUzGgjSgVzGIiOxtVDX2Bs7zygl4ZO+ANLEamEFdbZ+X1nBVwBZQRwN7JuBEkpEVuxlsBWoCMHRtLCqUnfMssz+TIkO5waJDucB6gCoG6wXKC3YDcLBD9wLQ/M5a+0oUf+7NWni4YrC5nR7gXGA9wLnBosNtAosMtxnsD9w9AYPvn6bOU1XAvuBG+wmer4JmoxrYAm5MQFOo4gu6Wf2Ohasac6xPe0RgtGpJwTJGKpYWK2O0aknBMkYqlhYrY7RqScEyRiqWFitjtGpJwTJGKpYWK2O0aknBMkYqlhYrY7RqScEyRiqWFrtbYx+SeEI3HUdLxAAAAABJRU5ErkJggg=="/></button>`,
  nextArrow:`<button  class='slick-next pull-right'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAASFJREFUaEPtltENwkAMQ90JYAM6AhsAk8MIjMAIMEFRxH3wA62cAwfk/tLgPvvk3IA/fYY/5YLBfi1ZJ+bEijjgo1gkiMWfkUpsArahNADnxYpfepEGa1DH9p2HanAZsAuATQO7AigFlwGLY3gCsKoIR4MFTDuOJeFSYJXh0mBV4bqAVYTrBlYN7hNgsdvWrSlvAPaKHdcN7Glhy6HabSh/x6kG1QWsIlQarCpUCqwyVBYsrlI7dfu9agi6FadHpQfcqKr0d7VHg7WFHHCjYk/NdXkKbO7Plb8bTOk+o+3EGNeUM05M6T6j7cQY15QzTkzpPqPtxBjXlDNOTOk+o+3EGNeUM05M6T6j7cQY15QzTkzpPqPtxBjXlDNOTOk+o30H4yxCN8tlcf8AAAAASUVORK5CYII="/></button>`

    });
  });
  const input = document.querySelector(".an");
  const eyeOpen = document.querySelector(".eye-open");
  const eyeClose = document.querySelector(".eye-close");
  eyeOpen.addEventListener("click",function(){
    eyeOpen.classList.add("hidden");
    eyeClose.classList.remove("hidden");
    input.setAttribute("type","password");
  });
  eyeClose.addEventListener("click",function(){
    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    input.setAttribute("type","text");
  });
