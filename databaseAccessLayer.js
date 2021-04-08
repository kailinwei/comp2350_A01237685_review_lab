const database = include('/databaseConnection');

const passwordPepper = "SeCretPeppa4MySal+";

function getAllRestaurant(callback) {
	let sqlQuery = "SELECT restaurant_id, name, description FROM restaurant";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}

function addRestaurant(postData, callback) {
	let sqlInsert = "INSERT INTO restaurant (name, description) VALUES (:name, :desc);";
	let params = {	
			name: postData.name,
			desc: postData.description
		};
	console.log(sqlInsert);
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}

// function deletePersonSkill(personId, callback) {
// 	let sqlDeletePersonSkill = "delete from person_skill where person_id = :personID";
// 	let params = {
// 		personID: personId
// 	};
// 	console.log(sqlDeletePersonSkill);
// 	database.query(sqlDeletePersonSkill, params, (err, results, fields) => {
// 		if (err) {
// 			callback(err, null);
// 		}
// 		else {
// 			console.log(results);
// 			callback(null, results);
// 		}		
// 	});	
// }
 
function deleteRestaurant(restaurantId, callback) {
	let sqlDeleteRestaurant = "delete from restaurant where restaurant_id = :restaurantID";
	let params = {
		restaurantID: restaurantId
	};
	console.log(sqlDeleteRestaurant);
	database.query(sqlDeleteRestaurant, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {``
			console.log(results);
			callback(null, results);
		}		
	});	
}


/*------------------------reviews----------------*/

function getReviews( reviewId, callback) {
	let sqlQuery = "SELECT  review_id, restaurant_id, reviewer_name, details, rating FROM review WHERE restaurant_id = :reviewID";
	let params = {
		reviewID: reviewId
	};
	database.query(sqlQuery, params,(err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}



function addReview(postData, callback) {
	let sqlInsert = "INSERT INTO review (restaurant_id, reviewer_name, details, rating) VALUES (:restId, :reviewerName, :details, :rating);";
	const rating = parseInt(postData.rating);
	let params = {	
			restId: postData.restaurant_id,
			reviewerName: postData.name,
			details: postData.review,
			rating: rating
		};
	console.log(sqlInsert);
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}

function deleteReview(reviewId, callback) {
	let sqldeleteRestaurantReview = "delete from review where review_id = :reviewId";
	let params = {
		reviewId: reviewId
	};
	console.log(sqldeleteRestaurantReview);
	database.query(sqldeleteRestaurantReview, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}


function deleteAllReviews(restaurant_id, callback) {
	let sqldeleteRestaurantReview = "delete from review where restaurant_id = :restaurant_id";
	let params = {
		restaurant_id: restaurant_id
	};
	console.log(sqldeleteRestaurantReview);
	database.query(sqldeleteRestaurantReview, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}


module.exports = {getAllRestaurant, addRestaurant, deleteRestaurant, getReviews, addReview, deleteReview, deleteAllReviews}
