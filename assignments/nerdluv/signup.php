<?php include("top.html"); ?>
<!-- CSE 190 M, Homework 4 (NerdLuv)
     This provided file is the front page that links to two of the files you are going
     to write, signup.php and matches.php.  You don't need to modify this file. -->
<div>
<form name="frmSignup" action="signup-submit.php" method="POST">
	<fieldset>
		<legend>New User Signup: </legend>
		<div class="row">
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" size="16" maxlength="16" required="required"/>
		</div>
		<div class="row">
			<label for="gender">Gender:</label>
				<input type="radio" name="gender" id="male" value="male" /><label for="male">Male</label>
				<input type="radio" name="gender" id="female" value="female" checked="checked" /><label for="female">Female</label>
		</div>
		<div class="row">
			<label for="age">Age:</label>
			<input type="text" name="age" id="age" size="6" maxlength="2" required="required" />
		</div>
		<div class="row">
			<label for="name">Personality Type:</label>
			<input type="text" name="name" id="name" size="6" maxlength="4" required="required"/> (<a href="http://www.humanmetrics.com/cgi-win/jtypes2.asp" target="_blank" title="Don't know your type" alt="Don't know your type'">Don't Know your type</a>)
		</div>
		<div class="row">
			<label for="fav_os">Favorite OS:</label>
			<select name="fav_os" id="fav_os">
				<option value="windows" selected="selected">Windows</option>
				<option value="linux">Linux</option>				
				<option value="macosx">Mac OS X</option>
			</select>
		</div>
		<div class="row">
			<label for="age">Seeking Age:</label>
			<input type="text" name="age_min" id="age" size="6" placeholder="min" maxlength="2"/> to <input type="text" name="age_max"  id="age" size="6" placeholder="max" maxlength="2"/>
		</div>
		<div class="row">
			<input type="submit" value="Sign Up"/>
		</div>
	</fieldset>
	</form>
	</div>

<?php include("bottom.html"); ?>
