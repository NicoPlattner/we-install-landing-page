function loadLanguage() {
	if(['en', 'de', 'hu', 'cz'].includes(window.location.href.split('/')[4])) {
		return;
	}

	var languages = window.navigator.languages;

	for (let i = 0; i < languages.length; i++) {
		if (languages[i] === 'de' || languages[i].split('-')[0] === 'de') {
			window.location.href = "de/home";
			return;
		} else if (languages[i] === 'hu' || languages[i].split('-')[0] === 'hu') {
			window.location.href = "hu/home";
			return;
		} else if (languages[i] === 'cs' || languages[i].split('-')[0] === 'cz') {
			window.location.href = "cz/home";
			return;
		} else if (languages[i] === 'en' || languages[i].split('-')[0] === 'en') {
			window.location.href = "en/home";
			return;
		}
	}

	window.location.href = "en/home";
}

function changeLanguage() {
	var selected = document.getElementById('lang').value;
	var url = window.location.href.split('/');
	url[4] = selected;
	window.location.href = url.join('/');
}

function goToConfirm() {
	var email = document.getElementById('email-field').value;

	fetch('https://rwngheexphrwncvncvbd.supabase.co/rest/v1/Newsletter', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3bmdoZWV4cGhyd25jdm5jdmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1Njc4MDcsImV4cCI6MTk5NDE0MzgwN30.5CuYEKGNfHAoiac-2YcUoqaVmqDDoEmzxCX0eH7-j5Q'
		},
		body: JSON.stringify({ "email": email })
	})

	var url = window.location.href.split('/');
	url[5] = 'newsletter-confirm';
	window.location.href = url.join('/');
}

function goToHome() {
	var url = window.location.href.split('/');
	url[5] = 'home';
	window.location.href = url.join('/');
}
