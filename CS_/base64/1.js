/*
Base 64 : 
Input 
man :  
Step 1 : Split the word into ASCII Characters
m a n 
  m = 109
  a  = 97
  n  = 110 

Step 2 : Find the binaries of above ASCII numbers in 8 bits only


    m = 109 	=	 01101101
    a =	97		=	 01100001
    n =	110 	=	 01101110

Step 3 : Merge all the binaries and split into 6 bits 
                        011011	  010110  000101 101110

Step 4 : Convert the 6 bit binaries into decimal numbers
    011011 - 27
    010110 - 22
    000101	 - 5
  101110 - 46

Step 5 : Map the above decimals to Base64 character using base64 table

    27		-		b
    22		-		W
    5		-		F
    46      -     	u

man > bWFu (Without newline)


     */
   