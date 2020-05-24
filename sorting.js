const bubbleSort = (list) => {

    var step = []

    step.push({
        list : [...list],
        i : -1,
        j : -1,
    })

    for(var i = 0;i< list.length - 1;i++){
        for(var j = 0;j < list.length - i - 1; j++){
            step.push({
                list : [...list],
                i : j,
                j : j+1,
            });
            if(list[j] > list[j+1]){
                swap(list, j, j+1);
                step.push({
                    list : [...list],
                    i : j,
                    j : j+1,
                });
            }
        }
    }
    step.push({
        list : [...list],
        i : -1,
        j : -1,
    });

    return step;
}

const swap = (arr, first_Index, second_Index) => {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function mergeSort(arr){
    var n = arr.length;
    var step = [];

    step.push({
        list : [...arr],
        i : -1,
        j : -1,
    })

    for(var curr_size = 1;curr_size <= n-1; curr_size *= 2){

        for(var left_start = 0; left_start < n-1; left_start += 2*curr_size){

            var mid = Math.min(left_start + curr_size - 1, n-1);
            var right_end = Math.min(left_start + 2*curr_size - 1, n-1);

            step.push({
                list : [...arr],
                i : left_start,
                j : right_end
            });
            merge(arr, left_start, mid, right_end);
            step.push({
                list : [...arr],
                i : left_start,
                j : right_end
            });
        }
    }

    step.push({
        list : [...arr],
        i : -1,
        j : -1
    });

    return step;
}

function merge(arr, l, m, r){
    var n1 = m - l + 1;
    var n2 = r - m;

    var left = [];
    var right = [];

    for(var i = 0;i < n1;i++){
        left.push(arr[l+i]);
    }
    for(var j = 0;j < n2;j++){
        right.push(arr[m + 1 + j]);
    }

    var i = 0;
    var j = 0;
    var k = l;

    while(i < n1 && j < n2){
        if(left[i] <= right[j]){
            arr[k] = left[i];
            i++;
        }else{
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while(i < n1){
        arr[k] = left[i];
        i++;
        k++;
    }

    while(j < n2){
        arr[k] = right[j];
        j++;
        k++;
    }
    console.log('pas di merge : ');
    console.log(arr);
}



module.exports = {
    bubbleSort : bubbleSort,
    mergeSort : mergeSort
};
