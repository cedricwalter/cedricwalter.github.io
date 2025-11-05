<?php
$name = isset( $_GET['name'] ) ? $_GET['name'] : '';
$email = isset( $_GET['email'] ) ? $_GET['email'] : '';
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Get the gift of 25 free digital marketing tips from Deuce this Christmas</title>
		<meta name="description" content="An Advent calendar made of 3D cubes with different styles and effects." />
		<meta name="keywords" content="advent calendar, web, html template, 3d, cubes, css, javascript, anime.js" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="favicon.ico">
		<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|BioRhyme:400,700" rel="stylesheet" />
		<link rel="stylesheet" type="text/css" href="css/normalize.css" />
		<!-- <link rel="stylesheet" type="text/css" href="css/common.css" /> -->
		<link rel="stylesheet" type="text/css" href="css/subscribe.css" />

		<link href="//fonts.googleapis.com/css?family=Lato:900&amp;subset=latin" type="text/css" rel="stylesheet">
		<link href="//css.createsend1.com/css/reset.min.css?h=8A4FE634ppap" media="screen,projection" rel="stylesheet" type="text/css">
		<link href="//css.createsend1.com/css/hosted-subscribe.min.css?h=5AF3C788ppap" media="screen,projection" rel="stylesheet" type="text/css">

		<!--[if IE]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]--><script>document.documentElement.className = 'js';</script>

		<!-- Facebook Pixel Code -->
		<script>
			!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
			n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
			n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
			t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
			document,'script','https://connect.facebook.net/en_US/fbevents.js');
			fbq('init', '1780572582224337'); // Insert your pixel ID here.
			fbq('track', 'PageView');
		</script>
		<noscript>
			<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1780572582224337&ev=PageView&noscript=1" />
		</noscript>
		<!-- DO NOT MODIFY -->
		<!-- End Facebook Pixel Code -->
	</head>
	<body>
		<div class="ko-mobiletemplate">
			<div class="static-container">
				<div class="vertically-centered-container">

					<header class="ko-header" id="header">
						<h1 style="visibility: visible;" class="ko-heading lato">Get 25 free digital marketing tips in your inbox this Christmas</h1><img style="display: none;" class="ko-heading-image" src="">
						<h2></h2>
					</header>

					<section id="container" class="large ko-absorbclicks">
						<form action="//campaign.mailshooter.co.uk/t/r/s/kkhisi/" method="post" id="subForm">
							<article class="body">
								<p>
									<label class="ko-label" for="fieldName">Name</label>
									<input class="ko-input" id="fieldName" name="cm-name" type="text" value="<?php echo $name; ?>" />
								</p>
								<p>
									<label for="fieldEmail">Email</label>
									<input id="fieldEmail" name="cm-kkhisi-kkhisi" type="email" value="<?php echo $email; ?>" required />
								</p>
								<p>
									<button class="primary huge ko-submitbutton" type="submit">Send me the tips!</button>
								</p>
								<p class="small">You can easily unsubscribe at any time. We value your data and will never share your details with anyone.</p>
							</article>
						</form>
					</section>
					<div class="deuce-logo">
						<h3>Merry Christmas<br /><small>from</small></h3>
						<img src="https://deucecreative.co.uk/logo.png">
					</div>
				</div>
			</div>
		</div>
		<script src="js/charming.min.js"></script>
		<script src="js/anime.min.js"></script>
		<script src="js/textfx.js"></script>
		<script src="js/subscribe.js"></script>
	</body>
</html>
