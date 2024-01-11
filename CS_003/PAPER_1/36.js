var ip = '255.44.12.121';
var splitIP = ip.split('.');
var valid = true;

for (var i = 0; i < splitIP.length; i++) {
    if (!(splitIP[i] >= 0 && splitIP[i] <= 255)) {
        valid = false;
        break;
    }
}

if (valid) {
    console.log("valid IP");
    var str = '';
    for (var i = 0; i < splitIP.length; i++) {
        if (i != 3) {
            str += splitIP[i] + '[.]';
        } else {
            str += splitIP[i];
        }
    }
    console.log(str);
} else {
    console.log('Invalid IP');
}
/*var ip = '255.44.12.121';: This initializes a string ip containing an IP address.

var splitIP = ip.split('.');: This splits the IP address into an array of strings using the dot as a delimiter.

var valid = true;: This initializes a boolean variable valid to true, assuming the IP is initially considered valid.

The first loop checks each part of the IP address to ensure it falls within the valid range of 0 to 255.

If any part of the IP address is not within the valid range, the valid variable is set to false, and the loop breaks.

The subsequent conditional checks whether the IP is valid.

If the IP is valid, it prints "valid IP" and formats the IP address with [.] between each part using the second loop.

If the IP is invalid, it prints "Invalid IP".

Now, let's break down the reasoning:

The first loop checks the validity of each part of the IP address, ensuring that each part is a number between 0 and 255.
If any part is found to be invalid, the loop breaks, and the valid variable is set to false.
If the IP is valid, it prints "valid IP" and formats the IP address for display.
If the IP is invalid, it prints "Invalid IP". */