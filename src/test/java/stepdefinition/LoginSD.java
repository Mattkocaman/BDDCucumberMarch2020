package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.LoginPage;
import utils.BasePage;
import utils.ConfigReader;

public class LoginSD {

    private LoginPage loginPage = new LoginPage();

    @Given("^I am on facebook login page$")
    public void iAmOnHomePage(){
        Assert.assertEquals(BasePage.get().getCurrentUrl(), ConfigReader.getProperty("url"));
    }

    @When("^I enter (.+) into (username|password) text fields on homescreen$")
    public void enterDataUserAndPassField(String anyText, String textFields){

        switch (textFields){
            case "username":
                loginPage.enterEmail(anyText);
                break;
            case "password":{
                loginPage.enterPassword(anyText);
                break;
            }
        }

    }
    @And("^I click on login button on home page$")
    public void clickonButton(){
                loginPage.clickOnLoginButton();
    }

    @Then("^I verify invalid login message$")
    public void verifyInvalidLogin(){
        Assert.assertEquals(loginPage.getTextElement(), "Log Into Facebook");
    }
}