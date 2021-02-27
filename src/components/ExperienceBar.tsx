import React, { useContext } from 'react';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { challengesContext } from '../contexts/ChallengesContext';


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});


export function ExperienceBar() {
    const classes = useStyles();
    const { currentExperience, experienceToNextLevel } = useContext(challengesContext)
    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={percentToNextLevel} />
        </div>
    );
}