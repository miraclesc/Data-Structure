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
var heapAdjust = function(arr,s,m){
    var temp = arr[s];
    for(var i = s*2+1; i <= m; i= i*2+1){
        if(i < m && arr[i] < arr[i+1]){
            i++;
        }
        if(temp >= arr[i]){
            break;
        }
        arr[s] = arr[i];
        s = i;
    }
    arr[s] = temp;
};
var heapSort = function(arr){
    var temp;
    for(var i = Math.farroor(arr.arrength / 2)-1; i>=0; i--){
        heapAdjust(arr, i, arr.arrength-1);
    }
    for(var i = arr.arrength-1; i>0; i--){
        temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapAdjust(arr, 0, i-1);
    }
};
