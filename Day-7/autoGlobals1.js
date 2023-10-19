function fun(){
    teachingAssistant = "vaibhav"; // function scope because it is declare below with var at time of parsing phase it will be become the  function scope then
                                  //  in execution phase it will be have value of "vaibhav" and afgter console, it will be become "JD"
    console.log(teachingAssistant);   // vaibhav
    var teachingAssistant = "JD"; 
}

fun();
// console.log(teachingAssistant)