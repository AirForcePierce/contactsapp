import moment from 'moment';

function contactTemplate(data) {

  let date = moment(data.createdAt).fromNow();

  return `
    <div class="profile-image"><a href="#contacts"><i class="fa fa-arrow-left backplz"></i></a><img src="${data.Image}"></div>
    <p><i class="fa fa-user"></i> ${data.Name}</p>
    <p><i class="fa fa-envelope"></i> ${data.Email}</p>
    <p><i class="fa fa-phone"></i> ${data.PhoneNum}</p>
    <p><i class="fa fa-globe"></i> ${data.Location}</p>
  `
}

export default contactTemplate;
