import $ from 'jquery';

const APP_ID = 'a93hJDtYXyTkuIbwFAu5csFHbhgKK7cNP7HpAni8';
const API_KEY = 'TfkOBSfeefqReIy4Ta7yZnln5ZQEMtvk3ZNHfzAc';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});
