function encode(s)
{
    // link to api
    const link = "https://www.nuggetshub.org/api/encode";
    
    // try fetching json from api, shouldn't except but better safe than sorry
    try{
        const obj = Json.parse(link);
    } catch(e) {
        console.log("aint a thing stupid (en)" + e);
        return "";
    }

    // string to be returned
    let str = "";

    // loop through character in the input
    for(let i = 0; i < s.length(); i++)
    {
        // get the character at the index
        let bruh = s.charAt(i);
        // null coalescing operator; if the left hand side is null then the right hand side is used
        // if the given letter doesnt match anything in the api (it's a space or other character) then just use that original character
        str += obj.bruh ?? s.charAt(i);
    }

    return str;
}

function decode(s)
{
    // link to api
    const link = "https://www.nuggetshub.org/api/decode";

    // same as encode, better safe than sorry 
    try{
    const obj = Json.parse(link);
    } catch(e) {
        console.log("aint a thing stupid (de)" + e);
        return "";
    }

    // return string
    let str = "";

    // split the input into individual words
    let temp = s.split(" ");

    // loop through every word
    foreach(bruh in temp)
    {
        // loop through each series of three (1 letter in most cases)
        for(i = 0; i < bruh.length; i+=3)
        {
            // some fancy regex stuff to check if there's anything not alphanumeric in the word
            if (!bruh.charAt(i).match(/^[0-9a-zA-Z]+$/))
            { 
                // add the symbol
                s += bruh.charAt(i);
                // offset the loop so that the next index will be 1 after the current
                i -= 2;
                // fuck everything else
                continue;
            }

            // if the second char is a 6; potentially one of the two-char letters
            if(bruh.charAt(1) == '6')
            {
                // make a str with the first and second characters
                let something = bruh.substring(i, i+2);
                // same null coalescing, if it is a 2 letter char then add it otherwise just add the symbols
                str += obj.something ?? bruh;
                // offset the loop so that the next index will be 2 after the current
                i--;
                // fuck everything else
                continue;
            }

            // if it's alphanumeric and isnt a two char letter, then get the str of the char
            thing = bruh.substring(i, i+3);

            // add the char according to the api, again better safe than sorry
            str += obj.thing ?? thing;
        }   
    }

    return str;
}