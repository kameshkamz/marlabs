// var post;
// jQuery.ajax('https://jsonplaceholder.typicode.com/posts',
// 	 function(data1){
// 		post=data1;
// 		return data1;
// 		console.log(post);
// 	}
	
// );


// var comment;
// jQuery.ajax('https://jsonplaceholder.typicode.com/comments',
// 	function(data2){
// 		comment = data2;
// 		return data2;

// 	}
// 		//console.log(data);
	
// );


// var user;
// jQuery.ajax('https://jsonplaceholder.typicode.com/users',
// 	function(data3){
// 		user=data3;
// 		return data3;
// 		//console.log(data);
// 	}
// );



// console.log(post);




//console.log(posts);






//var data = JSON.parse(localStorage.details);
var data = JSON.parse(localStorage.getItem('details'));
// var posts = new XMLHttpRequest;
// posts.open('GET','http://192.168.1.10:8080/6JsJqueryTest/posts.json',true);
// posts.send();




// var post;
// $.getJSON("https://jsonplaceholder.typicode.com/posts", function(json1){
//     posts = json1;
// });


// var comment;
// $.getJSON("https://jsonplaceholder.typicode.com/comments", function(json2){
//     comments = json2;
// });


// var user;
// $.getJSON("https://jsonplaceholder.typicode.com/users", function(json3){
//     users = json3;
// });
// // data.push(posts, comments, users);
// localStorage.details = JSON.stringify(post);
// localStorage.details = JSON.stringify(comment);
// localStorage.details = JSON.stringify(user);

// var posts = JSON.parse(localStorage.getItem('post'));
//  var comments = JSON.parse(localStorage.getItem('comment'));
//  var users = JSON.parse(localStorage.getItem('user'));


// console.log(posts);



// $http.get("")
//         .success(function(data) {

//         //output of json as a string  -> correct
//         console.log('data: ' + JSON.stringify(data));

//         // store json in local storage
//         $localstorage.setObject('fragenset', data);

//         // restore json from local storage
//         var posts = $localstorage.getObject('fragenset');

//         // output of local storage item -> incorrect
//         // I got: Test xxx: [object Object]
//         console.log('Test xxx: ' + posts);
// })
	 

// $http.get("https://jsonplaceholder.typicode.com/comments")
// 	 .success(function(data) {

// 	 //output of json as a string  -> correct
// 	 console.log('data: ' + JSON.stringify(data));

// 	 // store json in local storage
// 	 $localstorage.setObject('fragenset', data);

// 	 // restore json from local storage
// 	 var comments = $localstorage.getObject('fragenset');

// 	 // output of local storage item -> incorrect
// 	 // I got: Test xxx: [object Object]
// 	 console.log('Test xxx: ' + comments);
// })




// $http.get("https://jsonplaceholder.typicode.com/users")
//         .success(function(data) {

//         //output of json as a string  -> correct
//         console.log('data: ' + JSON.stringify(data));

//         // store json in local storage
//         $localstorage.setObject('fragenset', data);

//         // restore json from local storage
//         var users = $localstorage.getObject('fragenset');

//         // output of local storage item -> incorrect
//         // I got: Test xxx: [object Object]
//         console.log('Test xxx: ' + users);
// })
	
	 



// var comments = new XMLHttpRequest;
// comments.open('GET','http://192.168.1.10:8080/6JsJqueryTest/comments.json',true);
// comments.send();



// var users = new XMLHttpRequest;
// users.open('GET','http://192.168.1.10:8080/6JsJqueryTest/users.json',true);
// users.send();



//  localStorage.setItem('posts',JSON.stringify(posts));
//  localStorage.setItem('comments',JSON.stringify(comments));
//  localStorage.setItem('users',JSON.stringify(users));

// var posts = JSON.parse(localStorage.getItem('posts'));
// var comments = JSON.parse(localStorage.getItem('comments'));
// var users = JSON.parse(localStorage.getItem('users'));


// jQuery.ajax({
// dataType:"json",
// url
// });




var posts = data[0],
	comments = data[1],
	users = data[2];
	 

var postslen = posts.length;
var commentslen = comments.length;
var userslen = users.length;
var start = 0;



function findusername(userId) {
	for (var j = 0; j < userslen; j++) {
		if (users[j].id == userId) {
			return users[j].name;
		}
	}
}




for(var i=0; i <= 20; i++) 

{

jQuery('#maincontainer').append(`

<div class="postscls" style="margin: 2%;padding: 1%;border: 2px solid red;">

<h2>${posts[i].title}</h2>

<div>${findusername(posts[i].userId)}</div>

<p>${posts[i].body}</p>


<button id="display_${posts[i].id}">Display Comments</button>

<button id="like_${posts[i].id}">Like</button>



<button id="removepost_${posts[i].id}">Remove Post</button><br>



<input type="text" placeholder="Comment Here" id="commentbody_${posts[i].id}"/>

<button id="createcomment_${posts[i].id}">Comment</button> </div> 

`);

}



jQuery(document).on('click', 'button[id^="like_"]',function(){
	alert('You have Liked the post');
});




jQuery(document).on('click', 'button[id^="display_"]', function() {
	jQuery(this).parent().children('.commentContainer').remove();
	var id = jQuery(this).attr('id');
	id = id.replace('display_', '');
	var data = JSON.parse(localStorage.details);
	var comments = data[1];
	var postcomments = comments.filter(function(element) {
		if (element.postId == id) {
			return element;
		}
	});
	var postcmtlen = postcomments.length;
	for (var i = 0; i < postcmtlen; i++) {
		jQuery(this).parent().append(`<div class="commentContainer" style="margin: 2%;padding: 1%;border: 2px solid black;">${postcomments[i].body}<br>
			<button id="removecomment_${postcomments[i].id}">Remove Comment</button></div>`)
	}
});






jQuery(document).on('click', 'button[id^="removepost_"]', function() {
	var id = jQuery(this).attr('id');
	id = id.replace('removepost_', '');
	posts = JSON.parse(localStorage.details)[0];
	comments = JSON.parse(localStorage.details)[1];
	var postcomments = comments.filter(function(element) {
		if (element.postId == id) {
			return element;
		}
	});

	for (var i = 0; i < postcomments.length; i++) {
		var commentidx = comments.findIndex(function(element) {
			if (element.postId == id) {
				return element;
			}
		});
		console.log(commentidx);
		comments.splice(commentidx, 1);
	}

	var postindex = posts.findIndex(function(element) {
		if (element.id == id) {
			return element;
		}
	});

	posts.splice(postindex, 1);
	data = [];
	data.push(posts, comments, users);
	localStorage.details = JSON.stringify(data);
	jQuery(this).parent().remove();
});






jQuery(document).on('click', 'button[id^="removecomment_"]', function() {
	var id = jQuery(this).attr('id');
	id = id.replace('removecomment_', '');
	// var commentindex = comments.find(function(element, index) {
	// 	if (element.id == id) {
	// 		return index;
	// 	}
	// });
	comments = JSON.parse(localStorage.details)[1];
	var commentindex = comments.findIndex(function(element) {
		if (element.id == id) {
			return element;
		}
	});
	console.log(commentindex);
	comments.splice(commentindex, 1);
	data = [];
	data.push(posts, comments, users);
	localStorage.details = JSON.stringify(data);
	jQuery(this).parent().remove();
});





jQuery(document).on('click', 'button[id^="createcomment_"]', function() {
	if (jQuery(this).parent().children('input[id^="commentbody_"]')[0].value) {
		var id = jQuery(this).attr('id');
		id = id.replace('createcomment_', '');
		comments = JSON.parse(localStorage.details)[1];
		var postcomments = comments.filter(function(element) {
			if (element.postId == id) {
				return element;
			}
		});
		var commentsnum = postcomments.length;

		var comment = {
			postId: id,
			id: id+'_'+commentsnum,
			name: 'NewUsername',
			email: 'NewUserEmail',
			body: jQuery(this).parent().children('input[id^="commentbody_"]')[0].value
		}
		console.log(jQuery(this).parent().children('input[id^="commentbody_"]')[0]);
		jQuery(this).parent().children('input[id^="commentbody_"]').css('border: 2px solid red');
		comments.push(comment);
		data[1] = comments;
		localStorage.details = JSON.stringify(data);
		jQuery(this).parent().append(`<div class='commentContainer' style="margin: 2%;padding: 1%;border: 2px solid black;">${comment.body}<br>
			<button id="removecomment_${comment.id}">Remove Comment</button></div>`);
	}
	else {
		alert("Comment can't be empty!");
	}
});