import moment from 'moment';

function contactTemplate(data) {

  let date = moment(data.createdAt).fromNow();

  return `
    <h2>${data.Name} was created on ${date}</h2>
  `
}

export default contactTemplate;
