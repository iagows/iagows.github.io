---
title: Contact
subtitle: Send me a word or two
tags: [contact, email]
---
## Talk to me

<form action="https://getsimpleform.com/messages?form_api_token=abcc6c03684597cbdfb5359cc23302bf" method="post">
	<input type='hidden' name='redirect_to' value='https://iagows.github.io/thankyou/' />
	<!-- all your input fields here.... -->
	<div class="form-row">
		<div class="form-group col-md-6">
			<label for="name">Name</label>
			<input type="text" class="form-control" id="name" name="name" required>
		</div>
		<div class="form-group col-md-6">
			<label for="email">E-mail</label>
      		<input type="email" class="form-control" id="email" name="email" required>
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
			<label for="message">Message</label>
			<textarea class="form-control" id="message" rows="5" name="message" required></textarea>
		</div>
	</div>
	<input type='submit' value='Submit' />
</form>