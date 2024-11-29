
import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

export const Use_tic_tac_toe = () => {
    const [board, setboard] = useState(initialBoard);
    const [isXnext, setIsXnext] = useState(true);

    const winnerPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const handleClick = (index: number) => {
        const winner = calculateWinner();
        console.log(winner);

        if (winner) return;
        const newBoard = [...board];
        newBoard[index] = isXnext ? "X" : "0";
        setboard(newBoard)
        setIsXnext(!isXnext)
    }
    const calculateWinner = () => {
        console.log("calulate");

        for (let i = 0; i < winnerPattern.length; i++) {
            const [a, b, c] = winnerPattern[i];
            if(board.every((element) => element !== null)){
                return "Its a Draw";
            }
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return `Player ${board[a]} Wins`;
            }
        }
        return null;
    }
    const getStatus = () => {
        const winner = calculateWinner();
        if (winner) {
            return winner;
        }
        else {
            return isXnext ? `Player X Play` : "Player O Play"
        }

    }

    const reset = () => {
        setboard(initialBoard);
    }

    return { board, handleClick, calculateWinner, getStatus, reset }
}
