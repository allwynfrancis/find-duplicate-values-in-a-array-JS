array = [1,1,2,3,1,2,3,25,4,1,2,2,1,2,3,4,4,2,2,3,6,3,5,3,3,3,3,3,5,3,3,2,7,7,5,7,,4,3,3,5,4,5,45,3,6,7,4,46,7,56,46,457];
	array.sort();
var temp = 0;
var count = 0;
var countArray = [];
	for(var i= 0; i<=array.length;i++){
		if(temp != array[i]){ //if temp is not equal to array's value then it is true
			if(count > 0){ //at first the count value is 0 so it goes to the else part
				if(count > 1){
					countArray.push(count);
				}
			}
			temp = array[i];
			count = 1;
			}
		else{
			count++;
		}
	}

	console.log('the number of duplicates in the array is ' + countArray.length );

