import { Grid, StylesProvider } from '@material-ui/core'
import React from 'react'
import styles from './MovieList.module.css';

function MovieList({filmobj}) {
    return (
        <Grid container className={styles.main}>
            <Grid item xs={3}>EPISODE {filmobj.episode_id}:</Grid>
            <Grid item xs={6}>{filmobj.title}</Grid>
            <Grid item xs={3}>{filmobj.release_date}</Grid>
        </Grid>
    )
}

export default MovieList
