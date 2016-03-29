var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

var driver;
var url='localhost:3000'

test.before(function(done){
	driver = new webdriver.Builder()
	.withCapabilities(webdriver.Capabilities.chrome())
	.build();
    driver.get(url);
	done();
});

test.after(function(done){
	driver.quit();
	done();
});

test.describe('Add User', function() {
  test.it('should work', function(done) {
    var userBox = driver.findElement(webdriver.By.id('inputUserName'));
	var mailBox = driver.findElement(webdriver.By.id('inputUserEmail'));
	var nameBox = driver.findElement(webdriver.By.id('inputUserFullname'));
	var ageBox = driver.findElement(webdriver.By.id('inputUserAge'));
	var locationBox = driver.findElement(webdriver.By.id('inputUserLocation'));
	var genderBox = driver.findElement(webdriver.By.id('inputUserGender'));
	var addBtn = driver.findElement(webdriver.By.id('btnAddUser'));
    userBox.sendKeys('simple programmer');
	mailBox.sendKeys('simple@simeple.com');
	nameBox.sendKeys('Happy Liou');
	ageBox.sendKeys('16');
	locationBox.sendKeys('LA');
	genderBox.sendKeys('male');
	addBtn.click();
    done();
  });
});

test.describe('User Info', function() {
  test.it('should work', function(done) {
	driver.navigate().refresh();
    var userInfoLink = driver.findElement(webdriver.By.linkText('simple programmer'));
	userInfoLink.click();
	done();
  });
});

test.describe('Delete User', function() {
  test.it('should work', function(done) {
	driver.navigate().refresh();
    var deleteLink = driver.findElement(webdriver.By.linkText('delete'));
	deleteLink.click();
	driver.switchTo().alert().accept();
	done();
  });
});
