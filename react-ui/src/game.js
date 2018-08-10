import { Game, PlayerView } from 'boardgame.io/core';
import { isHigherHand } from './helpers';

const Deuces = Game({
  name: 'deuces',
	setup: () => ({ 
		tableHand: [],
		//TO-DO: on game start, shuffle deck and deal hands out
		players: {
      0: [{rank: 2, suit: 0},{rank: 2, suit: 1},{rank: 2, suit: 2},{rank: 2, suit: 3}],
      1: [{rank: 1, suit: 0},{rank: 1, suit: 1},{rank: 1, suit: 2},{rank: 1, suit: 3}],
		},
		hasControl: true, //if true, player's hand doesn't have to be higher than table hand
	}),
	//playerView: PlayerView.STRIP_SECRETS,
	moves: {
		playHand(G, ctx, playerHand){
			if (G.hasControl || isHigherHand(G.tableHand, playerHand)) {
				const tableHand = [...playerHand];
				const hasControl = false;
				//TO-DO: remove cards from player's hand
				return { ...G, tableHand, hasControl };
			} else {
				//TO-DO: error messages 
				alert("Hand played is lower than hand on table");
				return { ...G };
			}
		},
		pass(G, ctx) {
			const hasControl = true;
			return { ...G, hasControl };
		}
	},
	flow: {
		movesPerTurn: 1,
		endGameIf:(G, ctx)=>{
			if (G.players[ctx.currentPlayer].length === 0) {
				return { winner: ctx.currentPlayer };
			}
		}
	}
})

export default Deuces;


