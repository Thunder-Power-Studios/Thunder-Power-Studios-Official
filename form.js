function getValue() {
alert(document.getElementById('demo').value);
}

function getValue() {
alert(document.getElementById('demo').value);
}

function getValue() {
var radios = document.getElementsByName('gender');
var number_of_radios = radios.length;
for(var i = 0; i < number_of_radios; i++) {
if(radios[i].checked) {
alert(radios[i].value);
}
}
}

function getValue() {
var value = document.getElementById('sample').value;
alert(value);
}

function getValues() {
var options = document.getElementById('sample').options;
var options_count = document.getElementById('sample').options.length;
var value = [];
for(var i = 0; i < options_count; i++) {
if(options[i].selected) {
value.push(options[i].value);
}
}
alert(JSON.stringify(value));
}

function getValue() {
var value = document.getElementById('sample').value;
alert(value);
}

<script src="form.js"></script>