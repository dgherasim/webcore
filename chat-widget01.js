function TextWidget() {
	this.serverURL = '';
	this.locationId = '';
	this.heading = '';
	this.subHeading = '';
  this.hl_prefix = '';
  this.popup = 'false';
	this.nameField = function() {
		return [
			'              <div class="form-group">',
			'                <label class="sr-only">Name</label>',
			'                <input type="text" class="form-control" placeholder="Name" id="name" required value="' + this.getName() + '">',
			'              </div>',
		];
	};
	this.emailField = function() {
		return [
			'              <div class="form-group" id="email-group">',
			'                <label class="sr-only">Email</label>',
			'                <input type="text" class="form-control" placeholder="Email" id="email" required value="' + this.getemail() + '" onkeyup="checkemail()">',
			'              </div>',
		];
	};
	this.template = function() {
		return [
			'    <div class="hl_text-widget" id="hl_text-widget">',
			'      <button class="hl_text-widget--btn" id="hl_text-widget--btn">',
			'        <div class="icon widget-open-icon active">',
			'          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="32" height="30" viewBox="0 0 32 30">',
			'            <defs>',
			'              <style>',
			'                .cls-1 {',
			'                  fill: #000;',
			'                  fill-rule: evenodd;',
			'                }',
			'              </style>',
			'            </defs>',
			'            <path d="M27 24.6C27.2 25.8 27.6 26.7 27.9 27.3 28.3 27.9 28.7 28.2 28.7 28.2 29 28.5 29.1 28.9 28.9 29.3 28.8 29.7 28.5 30 28.1 30 28 30 27.9 30 27.8 30 26.7 30 23.4 29.8 20.9 27L19 27C15.9 27 13.2 25.8 11.5 24.9 11 24.6 10.9 24 11.1 23.5 11.4 23 12 22.9 12.5 23.1 14 24 16.3 25 19 25L21.4 25C21.7 25 22 25.1 22.2 25.4 23.3 26.8 24.8 27.5 25.9 27.8 25.4 26.7 25.1 25.4 25 24.1 24.9 23.7 25.1 23.4 25.5 23.2 28.3 21.5 30 19.1 30 16.5 30 14.8 29.3 13 28.2 11.6 27.9 11.2 27.9 10.6 28.3 10.2 28.8 9.9 29.4 9.9 29.7 10.4 31.2 12 32 14.3 32 16.5 32 19.6 30.2 22.5 27 24.6ZM13 21L11.1 21C8.6 23.8 5.2 24 4.2 24 4 24 3.9 24 3.9 24 3.5 24 3.2 23.7 3.1 23.3 2.9 22.9 3 22.5 3.3 22.3 3.4 22.2 4.7 21 5 18.6 1.8 16.5 0 13.6 0 10.5 0 4.7 5.8 0 13 0 20.2 0 26 4.7 26 10.5 26 16.3 20.2 21 13 21ZM13 2C6.9 2 2 5.8 2 10.5 2 13.1 3.7 15.5 6.5 17.2 6.9 17.4 7.1 17.7 7 18.1 6.9 19.6 6.5 20.9 6.1 21.8 7.2 21.5 8.7 20.8 9.8 19.4 10 19.1 10.3 19 10.6 19L13 19C19.1 19 24 15.2 24 10.5 24 5.8 19.1 2 13 2Z"',
			'              class="cls-1" />',
			'          </svg>',
			'        </div>',
			'        <div class="icon widget-close-icon">',
			'          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="24" height="24" viewBox="0 0 23.8 23.9">',
			'            <defs>',
			'              <style>',
			'                .cls-1 {',
			'                  fill: #fff;',
			'                  fill-rule: evenodd;',
			'                }',
			'              </style>',
			'            </defs>',
			'            <path d="M13.3 11.9L23.5 22.2C23.9 22.6 23.9 23.2 23.5 23.6 23.3 23.8 23.1 23.9 22.8 23.9 22.6 23.9 22.3 23.8 22.1 23.6L11.9 13.4 1.7 23.6C1.5 23.8 1.2 23.9 1 23.9 0.7 23.9 0.5 23.8 0.3 23.6 -0.1 23.2-0.1 22.6 0.3 22.2L10.5 11.9 0.3 1.7C-0.1 1.3-0.1 0.7 0.3 0.3 0.7-0.1 1.3-0.1 1.7 0.3L11.9 10.5 22.1 0.3C22.5-0.1 23.1-0.1 23.5 0.3 23.9 0.7 23.9 1.3 23.5 1.7L13.3 11.9Z"',
			'              class="cls-1" />',
			'          </svg>',
			'        </div>',
			'      </button>',
			'      <div class="hl_text-widget--box" id="hl_text-widget--box" style="display: none;">',
			'        <div class="hl_text-widget--box-inner">',
			'          <div class="hl_text-widget--form">',
			'            <div class="hl_text-widget--heading">',
			'              <h1>' + this.getHeading() + '</h1>',
			'              <p>' + this.getSubHeading() + '</p>',
			'            </div>',
      '            <form id="message-form">',
      this.nameField().join('\n'),
			this.emailField().join('\n'),
			'              <div class="form-group">',
			'                <label class="sr-only">Message</label>',
			'                <textarea class="form-control" placeholder="Message" rows="4" id="message" required></textarea>',
			'              </div>',
			'              <div class="text-center">',
			'                <button type="submit" class="btn btn-primary" id="hl_text-widget--send-btn">Send</button>',
			'              </div>',
			'            </form>',
			'            <br>',
			'            <p class="small-text">By submitting you agree to receive e-mails from Webcore Support.',
			'              Rates may be applied.</p>',
			// '            <div class="powered-by">',
			// '               <a href="http://www.gohighlevel.com/?utm_source=text-widget&utm_medium=poweredby&utm_campaign=poweredby" target="_blank">',
			// '                   Powered by HighLevel',
			// '               </a>',
			// '            </div>',
			'          </div>',
			'          <div class="hl_text-widget--thankyou">',
			'            <div class="hl_text-widget--heading">',
			'              <h1>Thank You!</h1>',
			'              <p>Someone will reply to you shortly.</p>',
			'            </div>',
			'            <p class="smiley">&#x1F60A;</p>',
			'            <div class="text-center">',
			'              <button type="text" class="btn btn-default" id="hl_text-widget--send-another">Send Another Message</button>',
			'            </div>',
			// '            <div class="powered-by">',
			// '               <a href="http://www.gohighlevel.com/?utm_source=text-widget&utm_medium=poweredby&utm_campaign=poweredby" target="_blank">',
			// '                   Powered by HighLevel',
			// '               </a>',
			// '            </div>',
			'          </div>',
			'        </div>',
			'      </div>',
			'    </div>',
		];
	};
}

TextWidget.prototype.getHeading = function() {
  return this.heading || "We'll text you!";
};

TextWidget.prototype.getSubHeading = function() {
  return this.subHeading || 'One of our guys will text you back on this number';
};

TextWidget.prototype.bindClickHandler = function() {
  var _self = this;

  jQuery(function() {
    jQuery('#hl_text-widget--btn').on('click', function() {
      var _this = jQuery(this);
      var _box = jQuery('#hl_text-widget--box');
      _this.toggleClass('active');
      _box.fadeToggle(300);
      _box.toggleClass('active');
      _this.find('.widget-open-icon').toggleClass('active');
      _this.find('.widget-close-icon').toggleClass('active');
    });

    jQuery('#message-form').on('submit', function(e) {

      e.preventDefault();
      var name = jQuery('#name').val();

      var email = jQuery('#email').val();
      // var email = libphonenumber.format(libphonenumber.parse(jQuery('#email').val(), 'US'), 'E.164');
      var message = jQuery('#message').val();
      var name = jQuery('#name').val();

      _self.createCookie('email', email);
      _self.createCookie('name', name);
       var postMessage = `${_self.hl_prefix}: ${message}`;
       if(_self.hl_prefix=='' || _self.hl_prefix==null) postMessage = message;
       
      jQuery.ajax({
        url: _self.serverURL + '/message',
        type: 'POST',
        data: JSON.stringify({
          name: name,
          email: email,
          message: postMessage,
          location_id: _self.locationId
        }),
        contentType: 'application/json',
        success: function(){

          var btn = jQuery('.hl_text-widget--form button')
          if (btn) btn.show();

          var _boxInner = jQuery('.hl_text-widget--form');
          if (_boxInner) _boxInner.css({ marginLeft: '-100%'});

          var msg = jQuery('#message')
          if (msg) msg.val('');
        },
        error: function(xhr, textStatus, errorThrown) {

          var btn = jQuery('.hl_text-widget--form button')
          if (btn) btn.show();

          if (!xhr || !xhr.responseText)
              return;
          var err = JSON.parse(xhr.responseText);
          var errmsgbox = jQuery("#errmsgdisp")
          if (err && err.msg && errmsgbox)
              errmsgbox.html(err.msg)
          else if (errmsgbox)
              errmsgbox.html('There was some issue. Please enter correct name, email and message before you hit send.')
          console.log(xhr.responseText);
        }
      });

      var btn = jQuery('.hl_text-widget--form button')
      if (btn) btn.hide();

    });

    jQuery('#hl_text-widget--send-another').on('click', function(e) {
      e.preventDefault();
      var _boxInner = jQuery('.hl_text-widget--form');
      _boxInner.css({
        marginLeft: ''
      });
    });
    
  });
};

TextWidget.prototype.loadCSS = function() {
  var _self = this;
  jQuery('head').append(
    '<link href="' +
      this.serverURL +
      '/css/text_widget.css" rel="stylesheet" type="text/css" />'
  );
  jQuery('head').append(
    '<script src="https://unpkg.com/libphonenumber-js/bundle/libphonenumber-js.min.js"></script>'
  );
  var checkReady = function(callback) {
    if (window.libphonenumber) {
      callback();
    } else {
      window.setTimeout(function() {
        checkReady(callback);
      }, 100);
    }
  };

  setTimeout(function() {
    checkReady(function() {
      _self.addTemplateToPage();
    });
  }, 600);
};

TextWidget.prototype.getemail = function() {
  return this.readCookie('email') || '';
};

TextWidget.prototype.getName = function() {
	return this.readCookie('name') || '';
};

TextWidget.prototype.createCookie = function(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();
  } else var expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
};

TextWidget.prototype.readCookie = function(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

var checkemail = function(e) {
  var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(jQuery('#email').val());
  // var emailValid = libphonenumber.isValidNumber(libphonenumber.parse(jQuery('#email').val(), 'US'));
  if (!emailValid) {
    document.getElementById("email").setCustomValidity("Please provide valid email address.");
  } else {
    document.getElementById("email").setCustomValidity("");
  }
};

TextWidget.prototype.eraseCookie = function(name) {
  createCookie(name, '', -1);
};

TextWidget.prototype.addTemplateToPage = function() {
  var element = document.createElement('div');
  element.id = 'hl_text-widget';
  element.className = 'hl_text-widget';
  element.innerHTML = this.template().join('\n');
  jQuery('body').append(element);
  this.bindClickHandler();
};

TextWidget.prototype.load = function() {
  var _self = this;
  if (typeof jQuery !== 'undefined') {
    setTimeout(function() {
      _self.loadCSS();
    }, 600);
  } else {
    var script = document.createElement('SCRIPT');
    script.src =
      'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    var checkReady = function(callback) {
      if (window.jQuery) {
        callback(jQuery);
      } else {
        window.setTimeout(function() {
          checkReady(callback);
        }, 100);
      }
    };

    checkReady(function(jQuery) {
      setTimeout(function() {
        _self.loadCSS();
      }, 600);
    });
  }
};

var HIGHLEVEL =
  HIGHLEVEL ||
  (function() {
    return {
      init: function(locationId, extras) {
        var widget = new TextWidget();
        if (extras && extras.baseURL){
          widget.serverURL = extras.baseURL;
        } else {
          widget.serverURL = 'https://api.gohighlevel.com';
        }
        widget.locationId = locationId;
        if (extras && extras.heading) widget.heading = extras.heading;
        if (extras && extras.subHeading) widget.subHeading = extras.subHeading;
        if (extras && extras.prefix) widget.hl_prefix = extras.prefix;
        widget.load();
      }
    };
  })();
