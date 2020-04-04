package runnerTest.webPages;

import org.openqa.selenium.By;

public class LoginPage extends ElementUtil {

    private By erroMessage = By.xpath("//span[contains(text(), 'Log Into Facebook')]");
    private By emailTextField = By.id("email");
    private By passwordTextField = By.id("pass");
    private By loginButton = By.id("loginbutton");



    public void clickOnLoginButton() {
        clickOn(loginButton);
    }

    public void enterEmail(String enterEmail) {
        sendValue(emailTextField, enterEmail);
    }

    public void enterPassword(String enterPassword) {
        sendValue(passwordTextField, enterPassword);
    }

    public String getTextElement(){
        return getTextFromElement(erroMessage);
    }

}