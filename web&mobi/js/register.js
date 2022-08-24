$("#phone").intlTelInput({
    
    defaultCountry: "vn",
    utilsScript: "./js/utils.js",
});

$(function () {
    random();
});


function random() {
 
    var ranUrl = "https://api.v7.cc/v7-ecp/api/v1/captchas/random"
    $.ajax({
        type: "GET",
        url: ranUrl,
        success: function (data) {
            //alert(data.uuid);
            $('#captchauuid').val(data.uuid);
            $("#imageId").attr("src", data.image);
            //$("#myDiv").html('<h2>'+data.msg+'</h2>');
        }
    });
}

self.setInterval("random()", 40000);

function register() {
    $("#submitBtn").attr({
        "disabled": "disabled"
    });
    $("#submitBtn").css({
        "background-color": "#C0C0C0",
        "color": "##C0C0C0"
    });
    $("#submitBtn").text("Không nhấp được");

    var url = "";
	var loginurl = ''
    var passWord = $("#passWord").val();
    var userNum = $("#userNum").val();
    var phone = $("#phone").val();
    var captcha = $("#captcha").val();
    var captchauuid = $("#captchauuid").val();
    var confirmPassword = $("#confirmPassword").val();

    var sha1_result = CryptoJS.HmacSHA1(passWord, userNum);
    $('#jmpassword').val(sha1_result);
    var jmpassword = $("#jmpassword").val();
    var regfingerprint = Date.parse(new Date());


    var portalid;
    if ((navigator.userAgent.match(
            /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        portalid = "EC_MOBILE";

    } else {
        portalid = "EC_DESKTOP";

    }

    var formdata = new FormData();

    formdata.append("ulagentaccount","v7lacom");
    formdata.append("playerid", userNum);
    formdata.append("password", jmpassword);
    formdata.append("currency", "VND2");
    formdata.append("mobile", phone.slice(1));
    formdata.append("portalid", portalid);
    formdata.append("captcha", captcha);
    formdata.append("captchauuid", captchauuid);
    formdata.append("regfingerprint", regfingerprint);
    formdata.append("language", "4");
	
	

   	$.ajax({
		async: false,
		url: url,
		type: 'POST',
		cache: false,
		contentType: false,
		processData: false,
		// dataType: "json",
		data: formdata,
		success: function (data) {
			//console.log(data)
			$('#msg').text('đăng ký thành công')

			 window.location.href = "";
		},
		error: function (res) {
			console.log(res.responseJSON)
		},
	})
}

function checkForm() {

    var userPass = $("#passWord").val();
    var surePass = $("#confirmPassword").val();
    if (userPass != surePass) {
        $("#msg").text("Hai mật khẩu bạn nhập không giống nhau! ");
        $("#msg").css({
            "color": "red"
        });
        return false;
    }
    return true;
}


function validate_form() {
    if (checkForm()) {
      
        register();
    } else {
        return false;
    }
    return false;
}
var text;
var visible;
window.onload = function() {

    visible = true;
    setInterval(blink, 400);
}

// blink = function(){
//     if(!(visible=!visible)){
//         text.style.opacity = 0;
//     }else{
//         text.style.opacity = 1;
//     }
// }
window.addEventListener('DOMContentLoaded', function() {
   
   text = document.getElementById("text");
  
  
   
});