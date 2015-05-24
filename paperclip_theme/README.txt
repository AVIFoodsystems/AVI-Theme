/*------------------------------------------------------------------
Project:    Paperclip
Author:     Yevgeny S.
URL:        http://simpleqode.com/
            https://twitter.com/YevSim
Version:    1.2.0
Created:        11/03/2014
Last change:    18/02/2015
-------------------------------------------------------------------*/

====
FAQs
====

Q: 	How do I create a new page?
A: 	You can use template.html to easily create a new page for your website.
   	Navigation panel, footer and other default assets are already included into it.
   
Q: 	Do you make use of CSS pre-processors?
A: 	Yes, LESS is used to create this template.

Q: 	How do I create a different color scheme?
A: 	You can easily create your own color scheme in a matter of one minute. Please follow the steps below: 

	1. Open less/global.less file and change the value of the two global LESS variables: @primary-color and @secondary-color.
	2. Recompile less/style.css to css/style.css using your favourite LESS compiler (e.g. Winless).

Q: 	How do I edit styles?
A: 	You need to edit files form the /less folder (do not edit the original Bootstrap files from the /less/bootstrap folder).
After all changes are made you need to recompile the less/style.less file to css/style.css.

Q: 	How do I set up the contact form?

A: 	This template contains a fully functioning PHP contact form with spam protection powered by reCaptcha. 
	Note: The contact form will not work in your local environment without a server that supports PHP. 
	In order to set up the contact form, please follow the steps below:

	1. Open the /config.php file and fill out the required information:

	 - reCaptcha Public ($publickey) and Private ($privatekey) keys.
	 Please go to https://www.google.com/recaptcha/admin/create if you don't have the keys yet.
	 - Sender name and email address ($mail_sender)
	 This is a name and email address you will see in the вЂњFrom:вЂќ line of new emails you will receive.
	 - Your email address ($to_email)
	 This is an email address new emails will be sent to.
	 - Email subject ($mail_subject)
	 This is a subject of new emails you will receive.

	2. In /contact-us.html and /contact-us_option-1.html you need to insert your reCaptcha Public key (see Step 1) at the end of these lines:

	http://www.google.com/recaptcha/api/challenge?k=YOUR_PUBLIC_KEY (e.g. http://www.google.com/recaptcha/api/challenge?k=09sdv0sf9v0sdf9b0df9b09dfb).

	3. Save all files.
   
Q: 	Do you provide support for this item?
A: 	Yes, do not hesitate to contact me via the WrapBootstrap contact page or Twitter (https://twitter.com/YevSim).


=========
CHANGELOG
=========

Version 1.2.0 - 18/02/2015

 - Update Bootstrap to v3.3.2
 - Update Font Awesome to v4.3.0
 - Update Isotope to v2.1.0
 - Update Ligtbox to v2.7.1
 - Update jQuery to v1.11.2
 - Move original Bootstrap CSS and JS files into separate folders
 - Rename Font Awesome folder
 - Move Isotope JS into /js folder
 - Remove Isotope CSS
 - Add imagesloaded plugin
 - Add functional PHP contact form to contact-us.html, contact-us_option-1.html
 - Google map on contact-us_option-1.html is now built with Google Maps API
 - Remove unnecessary data attributes from sign-in.html
 - Add missing input labels to sign-in.html and sign-up.html
 - Replace lost password javascript with native collapse plugin
 - Replace sign in navbar button with link; replace .pull-right with .navbar-right
 - Set @grid-float-breakpoint to @screen-md-min
 - Add navbar submenu autoalign
 - Fix navbar dropdown menu last item border radius
 - Remove UI elements sidebar affix
 - Remove color options

Version 1.1 - 14/08/2014

- NEW: Navbar Submenu added
- NEW: Additional Color Schemes added
- NEW: Contact Us: Option 1 template added
- NEW: About Us: Option 1 template added
- NEW: Timeline Center template added
- NEW: Timeline Right template added
- NEW: Timeline Left template added
- NEW: Pricing Joint template added
- NEW: Pricing Table template added
- NEW: Search Results template added
- NEW: Blog Sidebar Left template added
- NEW: Blog No Sidebar template added
- NEW: Blog Post Sidebar Left template added
- NEW: Blog Post No Sidebar template added
- IMPROVED: Homepage main slider modified
- IMPROVED: Homepage fullscreen page modidied
- UPDATED: Twitter Bootstrap 3.2
- UPDATED: FontAwesome 4.1.0
- LESS code optimized
- Small bugs corrected

Version 1.0 - 06/04/2014

- Initial release

=======
CREDITS
=======

*** GENERAL FILES ***

1. Twitter Bootstrap

URL: http://getbootstrap.com/
AUTHOR: @mdo and @fat
LICENSE: MIT License

2. Font Awesome

URL: http://fontawesome.io/
AUTHOR: Dave Gandy
LICENSE: MIT license

*** CSS FILES ***

1. CSS Animation

URL: https://daneden.me/animate/
AUTHOR: Dan Eden
LICENSE: MIT license

*** JS FILES ***

1. Scroll to top script

URL: http://www.dynamicdrive.com/dynamicindex3/scrolltop.htm
AUTHOR: Dynamic Drive
LICENSE: http://www.dynamicdrive.com/notice.htm

2. Isotope

URL: http://isotope.metafizzy.co/
AUTHOR: David DeSandro
LICENSE: Commercial Developer Lisence (isotope/isotope_commercial_developer_license.pdf)

*** IMAGES, .PSD & VIDEO FILES ***

1. Clients and General Pictures

URL: http://www.flickr.com/photos/ter-burg/with/8969237159/
AUTHOR: Sebastiaan ter Burg
LICENSE: Creative Commons

URL: https://www.flickr.com/photos/ter-burg/page40/
AUTHOR: Sebastiaan ter Burg
LICENSE: CC BY 2.0

2. Responsive Showcase 

URL: http://www.pixeden.com/psd-web-elements/responsive-showcase-psd
AUTHOR: Pixeden.com
LICENSE: Royalty free for use in both personal and commercial projects

3. Home Slider Background: 

image-1.png, coming-soon.jpg

URL: https://s3.amazonaws.com/ooomf-com-files/gZS7V4x3RoifjfQNlBXk_image.jpeg
AUTHOR: Namphuong Van
LICENSE: Creative Commons

image-2.png

URL: http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_5252bb51404f8_1.JPG
AUTHOR: Daniel Robert Dinu
LICENSE: Creative Commons

image-3.png

URL: http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52d092fc163a3_1.JPG
AUTHOR: Todd Quackenbush
LICENSE: Creative Commons

image-4.png

URL: https://s3.amazonaws.com/ooomf-com-files/oD0ceO7TUqdlh6YLVA6B_reef%20insp-72.jpg
AUTHOR: Taylor Leopold
LICENSE: Creative Commons

image-5.jpg

URL: https://s3.amazonaws.com/ooomf-com-files/QSTuECF6S9mZ1CBm9cog_DSC07753.jpg
AUTHOR: Wojtek Witkowski
LICENSE: Creative Commons

4. iphone.png

URL: http://www.pixeden.com/psd-mock-up-templates/iphone-5s-psd-vector-mockup
AUTHOR: Pixeden
LICENSE:  Royalty free for use in both personal and commercial projects.

5. item-2.png

URL: https://dribbble.com/shots/959424-Freebies-My-safari-browser-psd-template
AUTHOR: Ilya Aleksandrov
LICENSE: Free for Commercial and Personal Purposes

6. our-team.jpg

URL: https://www.flickr.com/photos/familymwr/5112333179/in/photolist-6eSNHd-8ML5hB-8MPazf-dU3PK3-dGHJp6-c3vzPE-7TgyVR-8tRkFF-8vt5fr-fneKek-cJLzGh-dHr62P-8spPrc-dGHJA4-appMwf-dSeNmW-dKEE9m-duGXCU-dfSv6m-7g9SG7-auoUTh-dPd3F4-c7KXDo-9Mr37L-8ML3xv-cuGwgb-eQD91V-8vxkDy-8vw4mN-9MpYcg-b4hm3T-dJztLW-qH9SD-eaDzYM-exEJyC-8prAe4-c8aLfC-aV1kzK-8vw3w7-dLMgG2-9Mk75x-a6YTZ5-8FmW5j-7RJ3vb-a1NTmS-cv6bbd-cbfhnu-f69tzw-c5i1JE-BCba/
Author: U.S. Army
License: CC BY 2.0

7. Video File

URL: http://vimeo.com/67449472
AUTHOR: Joan LLopart 
LICENSE: Creative Commons