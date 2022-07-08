import org.junit.*;
import org.junit.runner.*;
import org.junit.runner.notification.Failure;
public class first_question {
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
    }
@Test
public void A(){
    Solution solution = new Solution();
    int result = solution.show(10);
    Assert.assertEquals(20,result);
}
@Test
public void B(){
    Solution solution = new Solution();
    int result = solution.show(10,20);
    Assert.assertEquals(30,result);
}
@Test
public void C(){
    Solution solution = new Solution();
    int result = solution.show(10,10,10);
    Assert.assertEquals(120,result);
}
@Test
public void D(){
    Solution solution = new Solution();
    int result = solution.show(100);
    Assert.assertEquals(20,result);
}
@Test
public void E(){
    Solution solution = new Solution();
    int result = solution.show(10);
    Assert.assertEquals(20,20,result);
}
}