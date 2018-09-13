"use strict";

/*
 |--------------------------------------------------------------------------
 | regionalRanges v1.0
 |--------------------------------------------------------------------------
 | Author : Shinji Escorido
 | Json Data holder for regional bet ranges
 |
 */

module.exports = {
	'china' : {
		'Baccarat' : {
			'sportBetRange' : [{"max": "2001", "min": "50", "status": 1, "division": "Player - Banker", "side_bet": [{"max": "180", "min": "5", "division": "Player Pair - Banker Pair"}, {"max": "250", "min": "5", "division": "Tie"}, {"max": "180", "min": "5", "division": "Super 6"}, {"max": "180", "min": "5", "division": "Big - Small"}, {"max": "180", "min": "5", "division": "Bonus"}]}, {"max": "5000", "min": "200", "status": 1, "division": "Player - Banker", "side_bet": [{"max": "450", "min": "20", "division": "Player Pair - Banker Pair"}, {"max": "600", "min": "20", "division": "Tie"}, {"max": "450", "min": "20", "division": "Super 6"}, {"max": "450", "min": "20", "division": "Big - Small"}, {"max": "450", "min": "20", "division": "Bonus"}]}, {"max": "50000", "min": "500", "status": 1, "division": "Player - Banker", "side_bet": [{"max": "4250", "min": "50", "division": "Player Pair - Banker Pair"}, {"max": "6250", "min": "50", "division": "Tie"}, {"max": "4250", "min": "50", "division": "Super 6"}, {"max": "4250", "min": "50", "division": "Big - Small"}, {"max": "4250", "min": "50", "division": "Bonus"}]}],
			'casinoBetRange' : [{"max": "2001", "min": "50", "status": 1, "division": "Player - Banker", "side_bet": [{"max": "180", "min": "5", "division": "Player Pair - Banker Pair"}, {"max": "250", "min": "5", "division": "Tie"}, {"max": "180", "min": "5", "division": "Super 6"}, {"max": "180", "min": "5", "division": "Big - Small"}, {"max": "180", "min": "5", "division": "Bonus"}]}, {"max": "5000", "min": "200", "status": 1, "division": "Player - Banker", "side_bet": [{"max": "450", "min": "20", "division": "Player Pair - Banker Pair"}, {"max": "600", "min": "20", "division": "Tie"}, {"max": "450", "min": "20", "division": "Super 6"}, {"max": "450", "min": "20", "division": "Big - Small"}, {"max": "450", "min": "20", "division": "Bonus"}]}, {"max": "50000", "min": "500", "status": 1, "division": "Player - Banker", "side_bet": [{"max": "4250", "min": "50", "division": "Player Pair - Banker Pair"}, {"max": "6250", "min": "50", "division": "Tie"}, {"max": "4250", "min": "50", "division": "Super 6"}, {"max": "4250", "min": "50", "division": "Big - Small"}, {"max": "4250", "min": "50", "division": "Bonus"}]}]
		},
		'Poker' : {
			'sportBetRange' : [{"max":"1000","min":"20","status":1,"division":"AnteBet","side_bet":[{"max":"35","min":"8","division":"BonusBet"},{"max":"35","min":"8","division":"BonusplusBet"},{"max":"2000","min":"40","division":"FlopBet"},{"max":"1000","min":"20","division":"TurnBet"},{"max":"1000","min":"20","division":"RiverBet"}]},{"max":"2500","min":"50","status":1,"division":"AnteBet","side_bet":[{"max":"50","min":"10","division":"BonusBet"},{"max":"50","min":"10","division":"BonusplusBet"},{"max":"5000","min":"100","division":"FlopBet"},{"max":"2500","min":"50","division":"TurnBet"},{"max":"2500","min":"50","division":"RiverBet"}]},{"max":"5000","min":"200","status":1,"division":"AnteBet","side_bet":[{"max":"75","min":"40","division":"BonusBet"},{"max":"75","min":"40","division":"BonusplusBet"},{"max":"10000","min":"400","division":"FlopBet"},{"max":"5000","min":"200","division":"TurnBet"},{"max":"5000","min":"200","division":"RiverBet"}]},{"max":"10000","min":"500","status":1,"division":"AnteBet","side_bet":[{"max":"150","min":"80","division":"BonusBet"},{"max":"150","min":"80","division":"BonusplusBet"},{"max":"20000","min":"1000","division":"FlopBet"},{"max":"10000","min":"500","division":"TurnBet"},{"max":"10000","min":"500","division":"RiverBet"}]},{"max":"20000","min":"1000","status":1,"division":"AnteBet","side_bet":[{"max":"300","min":"160","division":"BonusBet"},{"max":"300","min":"160","division":"BonusplusBet"},{"max":"40000","min":"2000","division":"FlopBet"},{"max":"20000","min":"1000","division":"TurnBet"},{"max":"20000","min":"1000","division":"RiverBet"}]},{"max":"50000","min":"2500","status":1,"division":"AnteBet","side_bet":[{"max":"600","min":"320","division":"BonusBet"},{"max":"600","min":"320","division":"BonusplusBet"},{"max":"100000","min":"5000","division":"FlopBet"},{"max":"50000","min":"2500","division":"TurnBet"},{"max":"50000","min":"2500","division":"RiverBet"}]}],
			'casinoBetRange' : [{"max":"1000","min":"20","status":1,"division":"AnteBet","side_bet":[{"max":"35","min":"8","division":"BonusBet"},{"max":"35","min":"8","division":"BonusplusBet"},{"max":"2000","min":"40","division":"FlopBet"},{"max":"1000","min":"20","division":"TurnBet"},{"max":"1000","min":"20","division":"RiverBet"}]},{"max":"2500","min":"50","status":1,"division":"AnteBet","side_bet":[{"max":"50","min":"10","division":"BonusBet"},{"max":"50","min":"10","division":"BonusplusBet"},{"max":"5000","min":"100","division":"FlopBet"},{"max":"2500","min":"50","division":"TurnBet"},{"max":"2500","min":"50","division":"RiverBet"}]},{"max":"5000","min":"200","status":1,"division":"AnteBet","side_bet":[{"max":"75","min":"40","division":"BonusBet"},{"max":"75","min":"40","division":"BonusplusBet"},{"max":"10000","min":"400","division":"FlopBet"},{"max":"5000","min":"200","division":"TurnBet"},{"max":"5000","min":"200","division":"RiverBet"}]},{"max":"10000","min":"500","status":1,"division":"AnteBet","side_bet":[{"max":"150","min":"80","division":"BonusBet"},{"max":"150","min":"80","division":"BonusplusBet"},{"max":"20000","min":"1000","division":"FlopBet"},{"max":"10000","min":"500","division":"TurnBet"},{"max":"10000","min":"500","division":"RiverBet"}]},{"max":"20000","min":"1000","status":1,"division":"AnteBet","side_bet":[{"max":"300","min":"160","division":"BonusBet"},{"max":"300","min":"160","division":"BonusplusBet"},{"max":"40000","min":"2000","division":"FlopBet"},{"max":"20000","min":"1000","division":"TurnBet"},{"max":"20000","min":"1000","division":"RiverBet"}]},{"max":"50000","min":"2500","status":1,"division":"AnteBet","side_bet":[{"max":"600","min":"320","division":"BonusBet"},{"max":"600","min":"320","division":"BonusplusBet"},{"max":"100000","min":"5000","division":"FlopBet"},{"max":"50000","min":"2500","division":"TurnBet"},{"max":"50000","min":"2500","division":"RiverBet"}]}]
		},
		'Dragon-Tiger' : {
			'sportBetRange' : [{"max": "2000", "min": "50", "status": 1, "division": "Dragon-Tiger", "side_bet": [{"max": "150", "min": "20", "division": "Tie"}, {"max": "750", "min": "30", "division": "Big&Small"}, {"max": "750", "min": "30", "division": "Odd or Even"}, {"max": "30", "min": "10", "division": "Suited Tie"}, {"max": "250", "min": "20", "division": "Suit"}]}, {"max": "5000", "min": "200", "status": 1, "division": "Dragon-Tiger", "side_bet": [{"max": "380", "min": "80", "division": "Tie"}, {"max": "2000", "min": "150", "division": "Big&Small"}, {"max": "2000", "min": "150", "division": "Odd or Even"}, {"max": "70", "min": "40", "division": "Suited Tie"}, {"max": "480", "min": "80", "division": "Suit"}]}, {"max": "50000", "min": "500", "status": 1, "division": "Dragon-Tiger", "side_bet": [{"max": "3800", "min": "300", "division": "Tie"}, {"max": "20000", "min": "1500", "division": "Big&Small"}, {"max": "20000", "min": "1500", "division": "Odd or Even"}, {"max": "700", "min": "400", "division": "Suited Tie"}, {"max": "4800", "min": "800", "division": "Suit"}]}],
			'casinoBetRange' : [{"max": "2000", "min": "50", "status": 1, "division": "Dragon-Tiger", "side_bet": [{"max": "150", "min": "20", "division": "Tie"}, {"max": "750", "min": "30", "division": "Big&Small"}, {"max": "750", "min": "30", "division": "Odd or Even"}, {"max": "30", "min": "10", "division": "Suited Tie"}, {"max": "250", "min": "20", "division": "Suit"}]}, {"max": "5000", "min": "200", "status": 1, "division": "Dragon-Tiger", "side_bet": [{"max": "380", "min": "80", "division": "Tie"}, {"max": "2000", "min": "150", "division": "Big&Small"}, {"max": "2000", "min": "150", "division": "Odd or Even"}, {"max": "70", "min": "40", "division": "Suited Tie"}, {"max": "480", "min": "80", "division": "Suit"}]}, {"max": "50000", "min": "500", "status": 1, "division": "Dragon-Tiger", "side_bet": [{"max": "3800", "min": "300", "division": "Tie"}, {"max": "20000", "min": "1500", "division": "Big&Small"}, {"max": "20000", "min": "1500", "division": "Odd or Even"}, {"max": "700", "min": "400", "division": "Suited Tie"}, {"max": "4800", "min": "800", "division": "Suit"}]}]
		},
		'Sicbo' : {
			'sportBetRange' : [{"max":"1000","min":"20","status":1,"division":"Big - Small","side_bet":[{"max":"1000","min":"20","division":"Even - Odd"},{"max":"130","min":"5","division":"pair"},{"max":"70","min":"5","division":"triple"},{"max":"130","min":"5","division":"double"},{"max":"40","min":"5","division":"anytriple"},{"max":"200","min":"5","division":"domino"},{"max":"140","min":"5","division":"group"},{"max":"330","min":"5","division":"dice"},{"max":"100","min":"5","division":"sum-4"},{"max":"60","min":"5","division":"sum-5"},{"max":"70","min":"5","division":"sum-6"},{"max":"80","min":"5","division":"sum-7"},{"max":"130","min":"5","division":"sum-8"},{"max":"170","min":"5","division":"sum-9"},{"max":"170","min":"5","division":"sum-10"},{"max":"170","min":"5","division":"sum-11"},{"max":"170","min":"5","division":"sum-12"},{"max":"130","min":"5","division":"sum-13"},{"max":"80","min":"5","division":"sum-14"},{"max":"70","min":"5","division":"sum-15"},{"max":"60","min":"5","division":"sum-16"},{"max":"100","min":"5","division":"sum-17"}]},{"max":"2500","min":"50","status":1,"division":"Big - Small","side_bet":[{"max":"2500","min":"50","division":"Even - Odd"},{"max":"250","min":"5","division":"pair"},{"max":"130","min":"5","division":"triple"},{"max":"250","min":"5","division":"double"},{"max":"80","min":"5","division":"anytriple"},{"max":"400","min":"5","division":"domino"},{"max":"290","min":"5","division":"group"},{"max":"670","min":"5","division":"dice"},{"max":"200","min":"5","division":"sum-4"},{"max":"110","min":"5","division":"sum-5"},{"max":"140","min":"5","division":"sum-6"},{"max":"170","min":"5","division":"sum-7"},{"max":"250","min":"5","division":"sum-8"},{"max":"330","min":"5","division":"sum-9"},{"max":"330","min":"5","division":"sum-10"},{"max":"330","min":"5","division":"sum-11"},{"max":"330","min":"5","division":"sum-12"},{"max":"250","min":"5","division":"sum-13"},{"max":"170","min":"5","division":"sum-14"},{"max":"140","min":"5","division":"sum-15"},{"max":"110","min":"5","division":"sum-16"},{"max":"200","min":"5","division":"sum-17"}]},{"max":"5000","min":"200","status":1,"division":"Big - Small","side_bet":[{"max":"5000","min":"200","division":"Even - Odd"},{"max":"380","min":"5","division":"pair"},{"max":"200","min":"5","division":"triple"},{"max":"380","min":"5","division":"double"},{"max":"130","min":"5","division":"anytriple"},{"max":"600","min":"5","division":"domino"},{"max":"430","min":"5","division":"group"},{"max":"1000","min":"5","division":"dice"},{"max":"300","min":"5","division":"sum-4"},{"max":"170","min":"5","division":"sum-5"},{"max":"210","min":"5","division":"sum-6"},{"max":"250","min":"5","division":"sum-7"},{"max":"380","min":"5","division":"sum-8"},{"max":"500","min":"5","division":"sum-9"},{"max":"500","min":"5","division":"sum-10"},{"max":"500","min":"5","division":"sum-11"},{"max":"500","min":"5","division":"sum-12"},{"max":"380","min":"5","division":"sum-13"},{"max":"250","min":"5","division":"sum-14"},{"max":"210","min":"5","division":"sum-15"},{"max":"170","min":"5","division":"sum-16"},{"max":"300","min":"5","division":"sum-17"}]}],
			'casinoBetRange' : [{"max":"1000","min":"20","status":1,"division":"Big - Small","side_bet":[{"max":"1000","min":"20","division":"Even - Odd"},{"max":"130","min":"5","division":"pair"},{"max":"70","min":"5","division":"triple"},{"max":"130","min":"5","division":"double"},{"max":"40","min":"5","division":"anytriple"},{"max":"200","min":"5","division":"domino"},{"max":"140","min":"5","division":"group"},{"max":"330","min":"5","division":"dice"},{"max":"100","min":"5","division":"sum-4"},{"max":"60","min":"5","division":"sum-5"},{"max":"70","min":"5","division":"sum-6"},{"max":"80","min":"5","division":"sum-7"},{"max":"130","min":"5","division":"sum-8"},{"max":"170","min":"5","division":"sum-9"},{"max":"170","min":"5","division":"sum-10"},{"max":"170","min":"5","division":"sum-11"},{"max":"170","min":"5","division":"sum-12"},{"max":"130","min":"5","division":"sum-13"},{"max":"80","min":"5","division":"sum-14"},{"max":"70","min":"5","division":"sum-15"},{"max":"60","min":"5","division":"sum-16"},{"max":"100","min":"5","division":"sum-17"}]},{"max":"2500","min":"50","status":1,"division":"Big - Small","side_bet":[{"max":"2500","min":"50","division":"Even - Odd"},{"max":"250","min":"5","division":"pair"},{"max":"130","min":"5","division":"triple"},{"max":"250","min":"5","division":"double"},{"max":"80","min":"5","division":"anytriple"},{"max":"400","min":"5","division":"domino"},{"max":"290","min":"5","division":"group"},{"max":"670","min":"5","division":"dice"},{"max":"200","min":"5","division":"sum-4"},{"max":"110","min":"5","division":"sum-5"},{"max":"140","min":"5","division":"sum-6"},{"max":"170","min":"5","division":"sum-7"},{"max":"250","min":"5","division":"sum-8"},{"max":"330","min":"5","division":"sum-9"},{"max":"330","min":"5","division":"sum-10"},{"max":"330","min":"5","division":"sum-11"},{"max":"330","min":"5","division":"sum-12"},{"max":"250","min":"5","division":"sum-13"},{"max":"170","min":"5","division":"sum-14"},{"max":"140","min":"5","division":"sum-15"},{"max":"110","min":"5","division":"sum-16"},{"max":"200","min":"5","division":"sum-17"}]},{"max":"5000","min":"200","status":1,"division":"Big - Small","side_bet":[{"max":"5000","min":"200","division":"Even - Odd"},{"max":"380","min":"5","division":"pair"},{"max":"200","min":"5","division":"triple"},{"max":"380","min":"5","division":"double"},{"max":"130","min":"5","division":"anytriple"},{"max":"600","min":"5","division":"domino"},{"max":"430","min":"5","division":"group"},{"max":"1000","min":"5","division":"dice"},{"max":"300","min":"5","division":"sum-4"},{"max":"170","min":"5","division":"sum-5"},{"max":"210","min":"5","division":"sum-6"},{"max":"250","min":"5","division":"sum-7"},{"max":"380","min":"5","division":"sum-8"},{"max":"500","min":"5","division":"sum-9"},{"max":"500","min":"5","division":"sum-10"},{"max":"500","min":"5","division":"sum-11"},{"max":"500","min":"5","division":"sum-12"},{"max":"380","min":"5","division":"sum-13"},{"max":"250","min":"5","division":"sum-14"},{"max":"210","min":"5","division":"sum-15"},{"max":"170","min":"5","division":"sum-16"},{"max":"300","min":"5","division":"sum-17"}]}]
		}
	}
};
