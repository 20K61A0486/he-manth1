let a=0,b=1,c;
                 console.log('fibonacci numbers upto 50 are')
                 console.log(a);
                 console.log(b);
                 c=a+b;
                 while(a<=50){
                     console.log(c);
                     c=a+b;
                     a=b;
                     b=c;
                 }