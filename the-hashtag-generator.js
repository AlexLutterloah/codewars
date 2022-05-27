///////////////////////
///// ~ PROBLEM ~ /////
///////////////////////
/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/
////////////////////////
///// ~ SOLUTION ~ /////
////////////////////////

function generateHashtag(str) {
    let noSpace = str.replace(/\s/g, "");

    if (noSpace.length >= 140 || noSpace === "") {
        return false;
    } else {
        let arr = str.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return "#" + arr.join("");
    }
}

console.log(generateHashtag("                                Helloorld"));
