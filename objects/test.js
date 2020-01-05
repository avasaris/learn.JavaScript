
describe("pow", function() {

    function makeTest(x,n){
        it(`возводит ${x} в степень ${n} будет `+ x**n, function() {
            assert.equal(pow(x, n), x**n);
        });
    }
  
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            makeTest(i,j);
        }
    }

  });


