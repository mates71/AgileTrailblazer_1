$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("agailetrailblazers.feature");
formatter.feature({
  "line": 2,
  "name": "Agaile trailblazer",
  "description": "",
  "id": "agaile-trailblazer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 94330,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefination.user_on_the_home_page()"
});
formatter.result({
  "duration": 1803076251,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Agaile trailblazer possitive login test",
  "description": "",
  "id": "agaile-trailblazer;agaile-trailblazer-possitive-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user enter name and email",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user choose a subject",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter a message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click submit button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user should able to see \"Your message was sent successfully. Thanks.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefination.user_enter_name_and_email()"
});
formatter.result({
  "duration": 161374495,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_choose_a_subject()"
});
formatter.result({
  "duration": 88317767,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_enter_a_message()"
});
formatter.result({
  "duration": 70251242,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_click_submit_button()"
});
formatter.result({
  "duration": 2077834837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your message was sent successfully. Thanks.",
      "offset": 25
    }
  ],
  "location": "Stepdefination.user_should_able_to_see(String)"
});
formatter.result({
  "duration": 32756079,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.close_the_driver()"
});
formatter.result({
  "duration": 107837729,
  "status": "passed"
});
formatter.after({
  "duration": 100665,
  "status": "passed"
});
formatter.before({
  "duration": 24856,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefination.user_on_the_home_page()"
});
formatter.result({
  "duration": 1155371727,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Agaile trailblazer negative login test",
  "description": "",
  "id": "agaile-trailblazer;agaile-trailblazer-negative-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user enter name and email",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user choose a subject",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user does not enter a message",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click submit button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user should able to see error message \"Validation errors occurred. Please confirm the fields and submit it again.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefination.user_enter_name_and_email()"
});
formatter.result({
  "duration": 157938049,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_choose_a_subject()"
});
formatter.result({
  "duration": 82797764,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_does_not_enter_a_message()"
});
formatter.result({
  "duration": 37884402,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_click_submit_button()"
});
formatter.result({
  "duration": 2065618745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Validation errors occurred. Please confirm the fields and submit it again.",
      "offset": 39
    }
  ],
  "location": "Stepdefination.user_should_able_to_see_error_message(String)"
});
formatter.result({
  "duration": 25767450,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.close_the_driver()"
});
formatter.result({
  "duration": 71093915,
  "status": "passed"
});
formatter.after({
  "duration": 22893,
  "status": "passed"
});
});