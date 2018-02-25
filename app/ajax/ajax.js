var answerArray = [];

for(var i = 1; i <= 10; i++){
    var answer = $("#q" + i).val();
    answerArray.push(answer);
}

var survey = {
    name : $('#name').val(),
    photoLink: $('#photoLink').val(),
    survey : answerArray
}

console.log(survey);

$.post("/api/friends", survey, function (data){
    console.log("Posting to API");
}); 