

function proccessData(data) {
  return data.map(function(item) {
    return `
      <li class='contact-list-item' data-contact-id="${item.objectId}">${item.Name}</li>
    `
  }).join('');
}

function contactsTemplate(data) {
  return `
    <h2>My Contacts</h2>
    <ul>${proccessData(data)}</ul>
  `;
}

export default contactsTemplate;
