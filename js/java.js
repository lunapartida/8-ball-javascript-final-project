const points = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no",
];

document.getElementById("response").innerHTML = points;

function myFunction() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("response").innerHTML = points[0];
  document.getElementById("response").style.fontSize = "18px";
  setTimeout(timeup, 4000);
}

// $(document).ready(function () {
//     points.getAnswer = function (question) {
//       $(".ball").effect("shake");
//       $("#response").text(answer);
//       $("#response").fadeIn(3000);
//     };
//     const onClick = Response();
//     {
//       $("#respone").hide();
//       $(".ball").attr;
//       magic8Ball.getAnswer(response);
//     }

//     $("#askme").click(onClick);
//   });
