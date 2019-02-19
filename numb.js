var N = prompt('','');
for(var i = 1; i < N; i++){
    if( (N / i ^ 0) === (N/i)){
        alert(i);
    }
}