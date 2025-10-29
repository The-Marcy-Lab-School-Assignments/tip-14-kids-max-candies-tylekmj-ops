/**
 * Kids With the Greatest Number of Candies
 *
 * Given an integer array `candies` and an integer `extraCandies`, return a boolean
 * array where each element indicates whether the corresponding kid can have the
 * greatest number of candies if given all `extraCandies`.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    // We're using Math.max to find the biggest number of all the integers inside "candies."
    // Inside Math.max we use a rest parameter using the spread syntax which will allow us to get ALL of the elements inside of the candies array since we wont initially know the length of the candies array
    //We also do this because Math.max doesn't expect arrays and only wants individual values.
    // Now we store the max number inside the greatest variable for later usage 

    let greatest = Math.max(...candies)

    // We use the map method since we want to keep the length of the candies array and only change the data type in the new array.
    // Inside of map we do a conditional that checks if each individual candy added with extraCandies is less than or equal to greatest. Which'll return a true or false value for each individual element
    
    return candies.map((el) => el + extraCandies >= greatest)
}

module.exports = kidsWithCandies;