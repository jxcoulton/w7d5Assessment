in the larger arrays unshift is going to take longer because it has to change the index value of every item in the arrays
where as push is just adding an item to the array at the end therefore not disrupting any other index values. in the medium 
array, we can see the times becoming more similar as the amount of items that need to be shifted decrease. by time we get to 
the small arrays, using unshift is faster because it does not have to count to the end. it just puts the new item in the front
and slides the other. the push method with a small array has to count through to find the correct placement. in the long run, 
push would be a better choice if available. the scalability is more desirable being closer to linear then unshift.

tinyArray = getSizedArray(10);
smallArray = getSizedArray(100);
mediumArray = getSizedArray(1000);
largeArray = getSizedArray(10000);
extraLargeArray = getSizedArray(100000);

unshift = insert
push = append

Results for the extraLargeArray 
insert 1.0575904 s / 1050000 μs
append 4.0638 ms / 4063.7 μs

Results for the largeArray
insert 9.2622 ms / 9262.1 μs
append 586.8 μs

Results for the mediumArray
insert 186.5 μs
append 156.4 μs

Results for the smallArray
insert 48.9 μs
append 101.8 μs

Results for the tinyArray
insert 36.2 μs
append 89.7 μs