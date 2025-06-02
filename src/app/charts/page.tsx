"use client"

import { useEffect, useState } from "react"
import PieChart from "../components/charts/PieChart"
import { useAppContext } from "../context/AppContext"
import styles from './syles.module.css'
import { GET_PIE_DATA } from "../state/actions"

const ChartsPage = () => {
    const { state, dispatch } = useAppContext()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch({ type: GET_PIE_DATA })
        setLoading(true)
    }, [])

    useEffect(() => {
        if (state.chart.pieData.hasOwnProperty('labels')) {
            setLoading(false)
        }
    }, [state.chart.pieData])

    return (
        <div className={styles.pieCartContainer}>
            {!loading ?
                <PieChart pieData={state.chart.pieData} />
                : 'Loading'
            }
        </div>
    )
}

export default ChartsPage