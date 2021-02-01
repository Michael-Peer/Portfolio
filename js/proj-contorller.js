'use strict'

//document.ready() IIFE
$(function onInit() {
  console.log("Ready!!")

  $('.contact-form').on('submit', onFormSubmit)
  renderPortfolio()
})

function renderPortfolio() {

  var projs = getProjs()

  var strHtml = projs.map(function (proj, idx) {
    console.log(idx, 'idx')
    return `
        <div onClick="onOpenModal('${proj.id}')" data-id="${proj.id}" class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid img-portfolio" src="img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
        `
  })

  $('.portfolio-items').html(strHtml)

}

function onOpenModal(projId) {

  var proj = getProjById(projId)
  const categories = proj.labels.join(", ")

  var strHtml = `<h2>${proj.name}</h2>
  <p class="item-intro text-muted">${proj.title}</p>
  <img class="img-fluid d-block mx-auto modal-img" src="img/portfolio/${proj.id}.jpg" alt="">
  <p class="modal-desc">${proj.desc}</p>
  <ul class="list-inline">
    <li>Date: January 2017</li>
    <li class="modal-categories">Categories: ${categories}}</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>
    <button onclick="onGithunLinkClicked('${proj.url}')" class="btn btn-info btn-github" data-dismiss="modal" type="button">
      <i class="fa fa-github mr-1"></i>
      Go to Project</button>`

  $('.modal-body').html(strHtml)


  // $('.portfolio-modal').show()
  // $('.portfolio-modal').attr("aria-hidden", "false")
  // $('.modal-body h2').text(proj.name)
  // $('.item-intro').text(proj.title)
  // $('.modal-desc').text(proj.desc)
  // $('.modal-img').attr('src', `img/portfolio/${proj.id}.jpg`)
  // $('.modal-categories').text(`Categories: ${categories}`)
  // $('.btn-github').data("url", proj.url)

  // $('.btn-github').on('click', function onGithunLinkClicked() {
  // var url = $(this).data("url")
  // window.open(url)
  // })
}


function onGithunLinkClicked(url) {
  window.open(url)
}

function onFormSubmit(ev) {
  ev.preventDefault()

  const inputs = $('.contact-form').serializeArray()
  var email = $('#email-input').val()
  var subject = $('#subject-input').val()
  var msg = $('#message-input').val()
  //add line breaks
  var lbrMsg = msg.replace(/\r\n|\r|\n/g, "%0D%0A");

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=michaelpeer2004@gmail.com&su=${subject}&body=${lbrMsg}`
  window.open(url)
  openCanvas() //close

}
