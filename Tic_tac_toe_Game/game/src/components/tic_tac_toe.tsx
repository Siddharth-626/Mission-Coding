import { Use_tic_tac_toe } from "@/hooks/tic_tac_toe"
import React from "react";


export const Tic_Tac_toe = () => {
    const { board, handleClick, getStatus, reset } = Use_tic_tac_toe()
    return (
        <div className="flex flex-col justify-center h-screen  items-center bg-white">
            <div className=" text-black text-2xl font-sans m-auto">
                {getStatus()}
                <button className=" text-white px-6 py-2 bg-blue-600 rounded-md ml-10" onClick={reset}>
                    Reset!
                </button>
            </div>
            <div className="grid grid-cols-3 rounded-md">
                {board.map((cell, index) => {
                    return <div
                        key={index}
                        className="flex items-center justify-center text-5xl text-black gap-1 w-24 h-24 p-24  bg-slate-200 border-4 border-slate-400 text-slate-900"
                        onClick={() => { if (cell == null) handleClick(index) }}
                    >
                        {cell}
                    </div>
                })}
            </div>
        </div>
    )
}