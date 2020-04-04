$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify invalid login with multiple usernames",
  "description": "",
  "id": "login-feature;verify-invalid-login-with-multiple-usernames",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cusername\u003e into username text fields on homescreen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \u003cpassword\u003e into password text fields on homescreen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify invalid login message",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-with-multiple-usernames;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-login-with-multiple-usernames;;1"
    },
    {
      "cells": [
        "alparen@panda.colomb",
        "pandamambaboi"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-with-multiple-usernames;;2"
    },
    {
      "cells": [
        "birsaqbaba@babus.net",
        "oyunreis5678"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-with-multiple-usernames;;3"
    },
    {
      "cells": [
        "hamdireis@bogazici.edu",
        "bogazkilic"
      ],
      "line": 20,
      "id": "login-feature;verify-invalid-login-with-multiple-usernames;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8715544080,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 753891036,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login with multiple usernames",
  "description": "",
  "id": "login-feature;verify-invalid-login-with-multiple-usernames;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter alparen@panda.colomb into username text fields on homescreen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter pandamambaboi into password text fields on homescreen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify invalid login message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "alparen@panda.colomb",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 34
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 387855983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pandamambaboi",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 201250966,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickonButton()"
});
formatter.result({
  "duration": 117876904,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 2437150047,
  "status": "passed"
});
formatter.after({
  "duration": 197052297,
  "status": "passed"
});
formatter.before({
  "duration": 5436754224,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 14146212,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login with multiple usernames",
  "description": "",
  "id": "login-feature;verify-invalid-login-with-multiple-usernames;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter birsaqbaba@babus.net into username text fields on homescreen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter oyunreis5678 into password text fields on homescreen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify invalid login message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "birsaqbaba@babus.net",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 34
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 462779182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oyunreis5678",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 186564578,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickonButton()"
});
formatter.result({
  "duration": 152407688,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1856365871,
  "status": "passed"
});
formatter.after({
  "duration": 180084242,
  "status": "passed"
});
formatter.before({
  "duration": 5775612986,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 9790175,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify invalid login with multiple usernames",
  "description": "",
  "id": "login-feature;verify-invalid-login-with-multiple-usernames;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter hamdireis@bogazici.edu into username text fields on homescreen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter bogazkilic into password text fields on homescreen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button on home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify invalid login message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hamdireis@bogazici.edu",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 36
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 412696077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bogazkilic",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 24
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 188680910,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.clickonButton()"
});
formatter.result({
  "duration": 119988729,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 2763838528,
  "status": "passed"
});
formatter.after({
  "duration": 178028785,
  "status": "passed"
});
});