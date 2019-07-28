$(document).ready(function() {
    // store username and password in localstorage
    var loginData = {
        username: "admin",
        password: "Admin123"
    }
    // set Data in LocalStorage 
    localStorage.setItem('login', JSON.stringify(loginData));
    // get Data in localStorage
    var getData = localStorage.getItem('login')
    // login 
    $('#loginform').click(function() {
        var fetchData = JSON.parse(getData);
        var username = $('#username');
        var password = $('#password');
        // username validate
        if (username.val() == null || username.val() == '') {
            alert('Enter username');
            username.focus();
            return false;

        } else if (username.val() != fetchData.username) {
            alert("Username isn't exist");
            username.focus();
            return false;
        }
        // password validate
        if (password.val() == null || password.val() == '') {
            alert('Enter password');
            password.focus();
            return false;

        } else if (password.val() != fetchData.password) {
            alert("Password isn't match");
            password.focus();
            return false;
        }
        if (username.val() == fetchData.username && password.val() == fetchData.password) {
            location.pathname = '/main-survey.html';
            localStorage.setItem('username', 'Hello admin');
        }
    });
    // get username
    var getUsername = localStorage.getItem('username');
    var logiName = $('#logiName').text(getUsername);

    // logout
    $('#logiName').click(function() {
        localStorage.removeItem('username');
        window.location = 'https://deepaksaini199825.github.io/MAD_task/index.html'
    });

    // set login button value
    var setLoginValue = localStorage.getItem('username');
    if (setLoginValue) {
        $('#loginpopup').text(setLoginValue);
        $('#survey_btn').removeAttr('disabled', '');
        $('#loginpopup').click(function() {
            localStorage.removeItem('username');
            location.reload();
        });
        // location set on survey button
        $('#survey_btn').click(function() {
            window.location = 'https://deepaksaini199825.github.io/MAD_task/main-survey.html';
        })

    } else {
        $('#loginpopup').text('Login');
        // Open Login popup
        $('#loginpopup').click(function() {
            $('.login_wrap').toggleClass('openLoginPopup');
            $('.overlay').show();
        })
        // Close Lofin Popup
        $('.closebtn').click(function() {
            $('.login_wrap').removeClass('openLoginPopup');
            $('.overlay').hide();
        });
    }


    // Survey Validation
    $('#surveyForm').click(function() {
        var name = $('#name');
        var mobile = $('#mobile');
        var age = $('#age');
        var gender = $('.gender');
        var country = $('#country');
        var state = $('#state');
        var city = $('#city');
        var house = $('#house');
        // Name 
        if (name.val() == '' || name.val() == null) {
            alert('Enter name');
            name.focus();
            return false;
        }
        // Mobile 
        if (mobile.val() == '' || mobile.val() == null) {
            alert('Enter mobile number');
            mobile.focus();
            return false;
        } else if (mobile.val().length > 10 || mobile.val().length < 10) {
            alert('Enter valid mobile number');
            mobile.focus();
            return false;
        }
        // Age
        if (age.val() == '' || age.val() == null) {
            alert('Enter age');
            age.focus();
            return false;
        }
        // // Gnender
        if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0) {
            alert('Enter select gender');
            return false;
        }
        // Country
        if (country.val() == '' || country.val() == null) {
            alert('Enter country');
            country.focus();
            return false;
        }
        // State
        if (state.val() == '' || state.val() == null) {
            alert('Enter state');
            state.focus();
            return false;
        }
        // city
        if (city.val() == '' || city.val() == null) {
            alert('Enter city');
            city.focus();
            return false;
        }
        // city
        if (house.val() == '' || house.val() == null) {
            alert('Enter houseold type');
            house.focus();
            return false;
        } else {
            window.location = 'https://deepaksaini199825.github.io/MAD_task/screen3.html';
        }
    })

    // change img on select gender 
    var ganderImg = $('#ganderImg');
    $("input[name='gender']").change(function() {
        if ($("input[type='radio']:checked").val() == "male") {
            ganderImg.attr('src', 'images/male.png');
        } else {
            ganderImg.attr('src', 'images/female.png');
        } 
        localStorage.setItem('userImage', ganderImg);
    });

    // set user image
    var getuserImg = $('#getuserImg');
    var getLocaluserImg = localStorage.getItem('userImage');
    getuserImg.attr('src', '' + getLocaluserImg + '');

    // Active Survey Number
    $('#activeNumber > li > span').mouseover(function() {
        $(this).parent().prevAll().children().addClass('active_number');
        $(this).addClass('active_number');
        $(this).parent().nextAll().children().removeClass('active_number');
        $('.dishName ').removeClass('active_number');
    });
    $('#activeConsume > li> span').mouseover(function() {
        $(this).parent().prevAll().children().removeClass('active_number');
        $(this).addClass('active_number');
        $(this).parent().nextAll().children().removeClass('active_number');
    })

    $('.landPage > li > span').click(function() {
        window.location = 'https://deepaksaini199825.github.io/MAD_task/screen4.html';
    })
    $('.nextPage > li > span').click(function() {
        window.location = 'https://deepaksaini199825.github.io/MAD_task/screen5.html';
    })
});