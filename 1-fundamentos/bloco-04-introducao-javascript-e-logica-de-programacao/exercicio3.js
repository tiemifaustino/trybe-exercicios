const one = 0;
const two = 3;
const three = 5;

if (one > two && one > three) {
    console.log("one é o maior número");
} else if (two > one && two > three) {
    console.log("two é o maior número");
} else {
    console.log("three é o maior número");
}

if (one > two && one > three) {
    console.log(one + " (one)"+ " é o maior número");
} else if (two > one && two > three) {
    console.log(two + " (two)" + " é o maior número");
} else {
    console.log(three + " (three)" + " é o maior número");
}
