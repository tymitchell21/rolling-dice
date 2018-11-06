// function runs when "Run Me" button is pressed
function aThousandDie() {
    // initializes div count and div barGraph to be empty
    document.getElementById("counts").innerHTML = '<h3>Number of Each Outcome</h3>'
    document.getElementById("barGraph").innerHTML = '<h3>Bar Graph of Results</h3>'
    // creates count array that keeps track of outcome counts
    var count = [0,0,0,0,0,0,0,0,0,0,0]
    // loop that repeats 1000 times for each roll
    for (let i=0; i<1000; i++) {
        // generates 2 random numbers between 1 and 6 inclusive
        var num1 = Math.floor((Math.random() * 6) + 1)
        var num2 = Math.floor((Math.random() * 6) + 1)
        // based on what the number is, it increments the respective value in count array
        count[(num1+num2)-2]++
    }
    // variable for label, starts at 2
    var label = 2;
    // loops through count array
    count.forEach (x => {
        // for each value in count, creates p element and puts value in it
        var newElement = document.createElement("p");
        var newText = document.createTextNode(`${label}: ${x}`);
        newElement.appendChild(newText);
        // adds p element to count div
        var destination = document.getElementById("counts");
        destination.appendChild(newElement);

        // creates div with height proportionate to amount
        var newDiv = document.createElement("div");
        newDiv.className = "bars"
        newDiv.style.width = x * 2 + "px"
        // pushes div to barGraph div in html
        var destination2 = document.getElementById("barGraph");
        destination2.appendChild(newDiv);
        // increments label variable by 1
        label++;
    })
}
// adds click event listener to input button with id "run"
document.getElementById("run").addEventListener("click", aThousandDie);