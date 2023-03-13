function goToConfirm() {

	console.log('test')

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

	window.location.href = "newsletter-confirm.html";
}

function goToHome() {
	 window.location.href = "/we-install-landing-page";
}
