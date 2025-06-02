"use client"
import { createContext, useContext, useState, ReactNode, useReducer, Dispatch, ActionDispatch } from 'react';
import { Action, State } from '../state/types';
import reducer from '../state/reducer';

interface GlobalState {
    state: State
    dispatch: ActionDispatch<[action: Action]>
}

const AppContext = createContext<GlobalState | undefined>(undefined);

export const initialState: State = {
    chart: {
        pieData: {}
    },
    calendarData: []
}

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};