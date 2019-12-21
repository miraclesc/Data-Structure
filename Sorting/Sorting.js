//快速排序
var partition = function(arr, low, high){
    var pivotkey = arr[low];
    while(low < high){
        while(low < high && arr[high] >= pivotkey){
            high--;
        }
        arr[low] = arr[high];
        while(low < high && arr[low] <= pivotkey){
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivotkey;
    return low;
};
var quickSort = function(arr, low, high){
    if(low < high){
        var pivotloc = partition(arr, low, high);
        quickSort(arr, low, pivotloc - 1);
        quickSort(arr, pivotloc+1, high);
    }
};

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
