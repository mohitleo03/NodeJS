var fs = require("fs");
function generateTestCase({ test_case_name, input, output }) {
  var TestCase =
    `\n@Test
public void ` +
    test_case_name +
    `(){
    Solution solution = new Solution();
    int result = solution.show(` +
    input.join(",") +
    `);
    Assert.assertEquals(` +
    output.join(",") +
    `,result);
}`;
  return TestCase;
}
function getJunitRunnerCode(question_name) {
  var junitRunnerCode =
    `import org.junit.*;
import org.junit.runner.*;
import org.junit.runner.notification.Failure;
public class ` +
    question_name +
    ` {
    public static void main(String[] args) {
        Result result = JUnitCore.runClasses(TestCases.class);
        String finalResult = result.wasSuccessful()?"Passed":"Failed";
        System.out.print("Result-" + finalResult+";");
        System.out.print("Time-"+(double)result.getRunTime()/1000+";");
        System.out.print("Total-"+result.getRunCount()+";");
        System.out.print("Success-"+((result.getRunCount())-(result.getFailureCount()))+";");
        System.out.print("Failed-"+result.getFailureCount()+";");
        for (Failure failure : result.getFailures()) {
            System.out.print("Fail-"+failure.toString()+";");
        }
    }`;
  return junitRunnerCode;
}

function addTestCase(file_name, code) {
  fs.appendFile(file_name, code, function (err) {
    if (err) throw err;
    console.log("test case added successfully.");
  });
}
const test_cases = [
  {
    test_case_name: "A",
    input: [10],
    output: [20],
  },
  {
    test_case_name: "B",
    input: [10, 20],
    output: [30],
  },
  {
    test_case_name: "C",
    input: [10, 10, 10],
    output: [120],
  },
  {
    test_case_name: "D",
    input: [100],
    output: [20],
  },
  {
    test_case_name: "E",
    input: [10],
    output: [20, 20],
  },
];
const question_name = "first_question";
var complete_code = "";
test_cases.forEach((test_case, index) => {
  if (index == 0) {
    complete_code =
      getJunitRunnerCode(question_name) + generateTestCase(test_case);
  } else {
    complete_code = complete_code + generateTestCase(test_case);
  }
});
complete_code = complete_code + `\n}`
addTestCase(question_name+".java",complete_code);
