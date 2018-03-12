function demo(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
}

var first = new demo("<h3>Who invented c</h3>", ['Dennis Ritchie', 'Dennis Richard', 'Richard Dennis', 'charles babbage'], 'Dennis Ritchie');
var second = new demo("<h3>In the standard library of C programming language, which of the following header file is designed for basic mathematical operations?</h3>", ['math.h', 'maths.h', 'stdio.h', 'conio.h'], 'math.h');
var third = new demo("<h3>A local variable is stored in ___</h3>", ['code segment', 'stack segment', 'Heap segment', 'Non of these'], 'stack segment');
var fourth = new demo(",<h3>A single line comment in C language source code can begin with _____</h3>", ['//', '/*', '$', '*/'], '//');

var qus = [first, second, third, fourth];
var result = 0;

set_question(qus);

function set_question(ques) {

    var count = 0;
    var mount = 0;

    document.getElementById('demo').innerHTML += "<p><strong>Rules:-<br><br>1.All question are objective Question<br><br>2.THere is only one correct option<br><br>3.Press next to start the Quiz<br></strong></p>";
    document.getElementById('first_option').style.display = 'none';
    document.getElementById('second_option').style.display = 'none';
    document.getElementById('third_option').style.display = 'none';
    document.getElementById('fourth_option').style.display = 'none';

    document.getElementById('next').onclick = function run() {
        document.getElementById('first_option').style.display = 'initial';
        document.getElementById('second_option').style.display = 'initial';
        document.getElementById('third_option').style.display = 'initial';
        document.getElementById('fourth_option').style.display = 'initial ';
        document.getElementById('demo').innerHTML = " ";
        if (mount == 0) {
            mount = count;
        }
        if (ques[mount] != null) {
            try {
                question_load(ques[mount]);
                mount++;
            } catch (error) {
                console.log(error);
            }
        } else {
            document.getElementById('first_option').style.display = 'none';
            document.getElementById('second_option').style.display = 'none';
            document.getElementById('third_option').style.display = 'none';
            document.getElementById('fourth_option').style.display = 'none';
            document.getElementById('question').style.display = 'none';
            document.getElementById('next').style.display = 'none';
            document.getElementById('demo').innerHTML = "Quiz Finished YOu score is " + result;
        }
  
function question_load(id) {
    document.getElementById('first_option').disabled = false;
    document.getElementById('second_option').disabled = false;
    document.getElementById('third_option').disabled = false;
    document.getElementById('fourth_option').disabled = false;
    document.getElementById('question').innerHTML = id.first;
    document.getElementById('first_option').innerHTML = id.second[0];
    document.getElementById('second_option').innerHTML = id.second[1];
    document.getElementById('third_option').innerHTML = id.second[2];
    document.getElementById('fourth_option').innerHTML = id.second[3];
    document.getElementById('next').style.display = 'none';

    document.getElementById('first_option').onclick = function () {
        var button_name = document.getElementById('first_option').innerHTML;
        if (!button_name.localeCompare(id.third)) {
            console.log('sucess');
            run();
            result++;
        } else
            run();
            console.log('fail');
    }
    document.getElementById('second_option').onclick = function () {
        var button_name = document.getElementById('second_option').innerHTML;
        if (!button_name.localeCompare(id.third)) {
            console.log('sucess');
            run();
            result++;
        } else
            run();
            console.log('fail');
    }
    document.getElementById('third_option').onclick = function () {
        var button_name = document.getElementById('third_option').innerHTML;
        if (!button_name.localeCompare(id.third)) {
            console.log('sucess');
           run();
            result++;
        } else
        run();
            console.log('fail');
    }
    document.getElementById('fourth_option').onclick = function () {
        var button_name = document.getElementById('fourth_option').innerHTML;
        if (!button_name.localeCompare(id.third)) {
            console.log('sucess');
            result++;
        } else
            run();
            console.log('fail');
    }
    

}
console.log(result)
  }

}
