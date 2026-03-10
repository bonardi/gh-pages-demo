/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// subscription form injection logic
if (typeof signupConfig !== 'undefined' && signupConfig.enabled) {
    document.addEventListener('DOMContentLoaded', function() {
        var container = document.getElementById('signup-container');
        if (container) {
            container.innerHTML = '\n            <form id="ml-signup" class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2178591/forms/181578117957027664/subscribe" data-code="" method="get">\n                <div class="row input-group-newsletter">\n                    <div class="col">\n                        <input class="form-control" name="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." required />\n                    </div>\n                    <div class="col-auto">\n                        <button id="signup-button" class="btn btn-primary" type="submit">Notify Me!</button>
                        <span id="signup-success" class="text-success ms-2" style="display:none;">✓</span>
                    </div>\n                </div>\n            </form>\n            ';
            // attach submit handler that uses JSONP and shows check
            var form = document.getElementById('ml-signup');
            var button = document.getElementById('signup-button');
            var successMark = document.getElementById('signup-success');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var emailField = form.querySelector('input[name="email"]');
                if (!emailField.value) {
                    return;
                }
                button.disabled = true;
                // JSONP callback function
                window.mlCallback = function(data) {
                    // hide form or just show check
                    successMark.style.display = 'inline';
                };
                var script = document.createElement('script');
                var url = form.action + '?callback=mlCallback&email=' + encodeURIComponent(emailField.value);
                script.src = url;
                document.body.appendChild(script);
            });
        }
    });
} else {
    // form is disabled - you can put alternative content or leave empty
}
