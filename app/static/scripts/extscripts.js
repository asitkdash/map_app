$('.ui.dropdown').dropdown({
    onChange: function (val, text, $selectedItem) {
        document.getElementById('location').value = val;
    }
});

$(document).ready(function(){
     $('#loginbutton').click(function(){
        $('#loginmodal').modal('show');
     });
     $('#offline-map').click(function(){
        $('#legendmodal').modal('show');
     });
});

$('.ui.sidebar').sidebar({
        context: $('#sidemenu'),
        dimPage: false,
        transition: 'overlay',
        exclusive: false,
        closable: false
});
$('.ui.sidebar').sidebar('attach events', '#left-sidebar-toggle');

var locations = ['ebuildings', 'fdbuildings', 'abuildings', 'lm', 'fbuildings', 'pbuildings', 'cy', 'abuildings', 'ssbuildings', 'tbuildings', 'sbuildings', 'embuildings'];

$('.ui.checkbox.ebuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button ebuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button ebuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.fdbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button fdbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button fdbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});

$('.ui.checkbox.abuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button abuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button abuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.bbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button bbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button bbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.lm').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button lm');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button lm');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.fbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button fbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button fbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.pbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button pbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button pbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.cy').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button cy');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button cy');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.abuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button abuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button abuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.ssbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button ssbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button ssbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.tbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button tbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button tbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.sbuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button sbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button sbuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});
$('.ui.checkbox.embuildings').checkbox({
    onChecked: function () {
            var mulButtons = document.getElementsByClassName('button embuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="OFF";
                mulButtons[j].click();
            }
    },
    onUnchecked: function () {
            var mulButtons = document.getElementsByClassName('button embuildings');
            for(let j = 0; j < mulButtons.length; j++){
                mulButtons[j].value="ON";
                mulButtons[j].click();
            }
    }
});