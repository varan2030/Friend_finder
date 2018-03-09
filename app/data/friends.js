// ===============================================================================
// DATA
// Below data will hold all friends.
// Initially its just set it to one friend.
// ===============================================================================

var friendsArray = [
	{
	  "name":"Donald Trump",
	  "photo":"http://i42.tinypic.com/1zges1x.jpg",
	  "sex":"male",
	  "scores":[
	     5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
	   ]
	},
	{
	  "name":"Angela Merkel",
	  "photo":"http://i42.tinypic.com/2rf4f2r.jpg",
	  "sex":"female",
	  "scores":[
	     1,
	     2,
	     5,
	     5,
	     1,
	     2,
	     3,
	     1,
	     5,
	     2
	   ]
	},
	{
	  "name":"Hillary Clinton",
	  "photo":"http://i39.tinypic.com/t86wqq.jpg",
	  "sex":"female",
	  "scores":[
	     4,
	     5,
	     3,
	     3,
	     4,
	     5,
	     1,
	     4,
	     3,
	     5
	   ]
	},
	{
	  "name":"Barack Obama",
	  "photo":"http://i39.tinypic.com/2929274.jpg",
	  "sex":"male",
	  "scores":[
	     2,
	     3,
	     1,
	     1,
	     2,
	     3,
	     4,
	     2,
	     1,
	     3
	   ]
	}
];

// Set up table to be accessible to other files using require.
module.exports = friendsArray;