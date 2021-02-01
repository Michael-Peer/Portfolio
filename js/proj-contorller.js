

//document.ready() IIFE
$(function onInit() {
  console.log("Ready!!")

  $('.contact-form').on('submit', onFormSubmit)
  renderPortfolio()
})


function onFormSubmit(ev) {
  ev.preventDefault()

  const inputs = $('.contact-form').serializeArray()
  var email = $('#email-input').val()
  var subject = $('#subject-input').val()
  var msg = $('#message-input').val()
  console.log(email, subject, msg)
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=michaelpeer2004@gmail.com&su=${subject}&b
    ody=${msg}`
  window.open(url)
  openCanvas()//close

}



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
  console.log(projId, "projif")
  var proj = getProjById(projId)

  const categories = proj.labels.join(", ")
  var projUrl = proj.url


  // $('.portfolio-modal').show()
  // $('.portfolio-modal').attr("aria-hidden", "false")
  $('.modal-body h2').text(proj.name)
  $('.item-intro').text(proj.title)
  $('.modal-desc').text(proj.desc)
  $('.modal-img').attr('src', `img/portfolio/${proj.id}.jpg`)
  $('.modal-categories').text(`Categories: ${categories}`)
  $('.btn-github').data("url", proj.url)

  $('.btn-github').on('click', function onGithunLinkClicked() {
    var url = $(this).data("url")
    window.open(url)
  })
}
