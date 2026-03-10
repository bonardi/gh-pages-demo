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
            container.innerHTML = '\n            <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2178591/forms/181578117957027664/subscribe" data-code="" method="post" target="_blank">\n                <div class="row input-group-newsletter">\n                    <div class="col">\n                        <input class="form-control" name="fields[email]" type="email" placeholder="Enter email address..." aria-label="Enter email address..." required />\n                    </div>\n                    <div class="col-auto">\n                        <button class="btn btn-primary" type="submit">Notify Me!</button>\n                    </div>\n                </div>\n            </form>\n            ';
        }
    });
} else {
    // form is disabled - you can put alternative content or leave empty
}
