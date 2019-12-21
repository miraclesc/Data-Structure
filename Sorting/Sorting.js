//堆排序
var heapAdjust = function(L,s,m){
    var temp = L[s];
    for(var i = s*2+1; i <= m; i= i*2+1){
        if(i < m && L[i] < L[i+1]){
            i++;
        }
        if(temp >= L[i]){
            break;
        }
        L[s] = L[i];
        s = i;
    }
    L[s] = temp;
}
var heapSort = function(L){
    var temp;
    for(var i = Math.floor(L.length / 2)-1; i>=0; i--){
        heapAdjust(L, i, L.length-1);
    }
    for(var i = L.length-1; i>0; i--){
        temp = L[0];
        L[0] = L[i];
        L[i] = temp;
        heapAdjust(L, 0, i-1);
    }
}

//快速排序
