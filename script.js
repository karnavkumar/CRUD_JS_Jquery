var mainData = [];
getData();
function check(){
	var name = $("#name").val();
	var n = name.toLowerCase().trim();
	var a = $("#number").val();
	for(x in mainData){
		var c = mainData[x].number === a;
		var d = mainData[x].name.toLowerCase().trim();
		if(c === true){
			$("#error").html("number already Exist");
			$("#addValue").prop('disabled', true);
		}else if(d == name.trim().toLowerCase()){
		$("#error").html("name already Exist");
			$("#addValue").prop('disabled', true);
	}else{
		$("#addValue").prop('disabled', false);
		$("#error").html("");
	};
	}
}

function getData() {
	var data = JSON.parse(localStorage.getItem('user'));
	var html = "";
	for (var i = 0; i < data.length; i++) {
		html += "<tr>" +
			"<td>" + (i + 1) + "</td>" +
			"<td>" + data[i].name + "</td>" +
			"<td>" + data[i].number + "</td>" +
			"<td>" + data[i].gender + "</td>" +
			"<td><select data-arrayIndex='" + i + "' id='cityTable"+i+"' name='city'><option>--select City--</option><option id='ahmedabad' value='ahmedabad'>Ahmedabad</option><option id='rajkot' value='rajkot'>rajkot</option><option id='surat' value='surat'>surat</option></select></td>" +
			"<td>" + data[i].city + "</td>" +
			"<td>" + data[i].hobby + "</td>" +
			"<td>" + data[i].birthdate +"</td>" +
		    "<td><button data-arrayIndex='" + i + "' onclick='editData(this)' class='btn btn-default'>Edit</button><button data-arrayIndex='" +
			i + "' onclick='deleteData(this)' class='btn btn-danger'>Delete</button></td>" + "</tr>";
	$("#tableHtml").html(html);	
for(j=0; j<data.length;j++){
	if(data[j].city == 'ahmedabad'){
	$("#cityTable"+j+" option[value='ahmedabad']").attr("selected", true);
}else if(data[j].city == 'rajkot'){
	$("#cityTable"+j+" option[value='rajkot']").attr("selected", true);
}else if(data[j].city == 'surat'){
	$("#cityTable"+j+" option[value='surat']").attr("selected", true);
}else{
	console.log();
}
}

}
}

function updateCity(){
var data = JSON.parse(localStorage.user);
for(i =0; i<data.length;i++){
	var d = data[i].city;
	var k = $("#cityTable"+i).val();
	if(k == '--select City--'){
		alert("select valid city");
		return false
	}else {
	if(d != k){
		data[i]["city"] = k;
	}}
}
localStorage.setItem('user', JSON.stringify(data));
getData();
}

function deleteData(thisEle) {
	var arrayIndex = $(thisEle).attr("data-arrayIndex");
	//console.log(arrayIndex);
	var b = JSON.parse(localStorage.getItem('user'));
	b.splice(arrayIndex, 1);
	mainData.splice(arrayIndex, 1);
	var s = localStorage.setItem('user', JSON.stringify(b));
	console.log(JSON.parse(localStorage.getItem('user')));
	getData();
	console.log(mainData);
}

function addData() {
	var getItm = JSON.parse(localStorage.getItem('user'));
	var name = $("#name").val();
	var number = $("#number").val();
	var gender = $("input[name='gender']:checked").val();
	var hobby;
	$(document).ready(function () {
		var a = [];
		$.each($("input[name='sport']:checked"), function () {
			a.push($(this).val());
		});
		hobby = a.join(", ");
	});
	var city = $("#city").val();
	var birthdate = $("#birthdate").val();
	if (name.trim() == '') {
	$("#error").html('Enter Valid Name');

	} else if (document.getElementById("number").value.length != 10 || number == '') {
		$("#error").html('Please Enter Valid your 10 Digit Number');

	}else if (gender == "") {
		$("#error").html("please select gender");
	} else if (city == "") {
		$("#error").html('Please select City');

	} else if (hobby == '') {
	$("#error").html('Please check atleast on Hobby');

	} else if (birthdate == '') {
		$("#error").html('Please Select birthdate');

	} else {
		var contacts = {
			'name': name,
			'number': number,
			'gender' : gender,
			'city': city,
			'hobby': hobby,
			'birthdate': birthdate
		}
		mainData.push(contacts);
		var a = localStorage.setItem('user', JSON.stringify(mainData));
		console.log(mainData);
		$('#myform')[0].reset();
		$("#error").html('');
		getData();
}
}


function editData(thisEle) {
	var arrayIndex = $(thisEle).attr("data-arrayIndex");
	var data = JSON.parse(localStorage.getItem('user'));
	var name = data[arrayIndex]['name'];
	var number = data[arrayIndex]['number'];
	var gender = data[arrayIndex]['gender'];
	if(gender == 'male'){
		$('#male').prop('checked', true);
	}else {
		$('#female').prop('checked', true);
	}
	var city = data[arrayIndex]['city'];
	var hobby = data[arrayIndex]['hobby'];
	var birthdate = data[arrayIndex]['birthdate'];
	$("#hiddenele").val(arrayIndex);
	$("#name").val(name);
	$("#number").val(number);
	$("#city").val(city);
	$("#birthdate").val(birthdate);
	$('#addValue').css('display', 'none');
	$('#updateValue').css('display', 'block');
		var d = data[arrayIndex].hobby;
		if (d == 'cricket, chess, hockey') {
			$('.hobby').prop('checked', true);
		} else if (d == 'cricket, chess') {
			$('.hobby').prop('checked', false);
			$('#cricket').prop('checked', true);
			$('#chess').prop('checked', true);
		} else if (d == 'chess, hockey') {
			$('.hobby').prop('checked', false);
			$('#hockey').prop('checked', true);
			$('#chess').prop('checked', true);
		} else if (d == 'cricket, hockey') {
			$('.hobby').prop('checked', false);
			$('#hockey').prop('checked', true);
			$('#cricket').prop('checked', true);
		} else if (d == 'cricket') {
			$('.hobby').prop('checked', false);
			$('#cricket').prop('checked', true);
		} else if (d == 'chess') {
			$('.hobby').prop('checked', false);
			$('#chess').prop('checked', true);
		} else if (d == 'hockey') {
			$('.hobby').prop('checked', false);
			$('#hockey').prop('checked', true);
		} else {
			console.log('data not valid');
		}
};


function updateData() {
	var arrayIndex = $("#hiddenele").val();
	console.log(arrayIndex);
	var b = JSON.parse(localStorage.getItem('user'));
	var name = $("#name").val();
	var number = $("#number").val();
	var gender = $("input[name='gender']:checked").val()
	var hobby;
	var a = [];
	$.each($("input[name='sport']:checked"), function () {
		a.push($(this).val());
	});
	hobby = a.join(", ");
	var city = $("#city").val();
	var birthdate = $("#birthdate").val();
	if (name == '' || number == '' || city == '' || birthdate == '' || hobby == '') {
		alert('Enter Valid Credentials');
		return false;
	} else {
		b[arrayIndex]["name"] = name;
		b[arrayIndex]["number"] = number;
		b[arrayIndex]["gender"] = gender;
		b[arrayIndex]["city"] = city;
		b[arrayIndex]["hobby"] = hobby;
		b[arrayIndex]["birthdate"] = birthdate;
		var a = localStorage.setItem('user', JSON.stringify(b));
		$('#addValue').css('display', 'block');
		$('#updateValue').css('display', 'none');
		$('#myform')[0].reset();
		$("#error").html('');
		getData();
	}
}