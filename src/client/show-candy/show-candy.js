import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { MdInfoOutline } from "react-icons/md";

function mapStateToProps(state) {
    return {
        candy: state.candyReducer.candy
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


export default withRouter(
    connect(mapStateToProps)(function ShowCandy(props) {
        const classes = useStyles();
        const { candy, history } = props;
        const details = index=>{
            history.push('/client/candy-details/'+index)
        }
        return (
            <div className="center">
                <div className="center-item">
                    <div className={classes.root}>
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <ListSubheader component="div">Candy</ListSubheader>
                            </GridListTile>
                            {candy.map((tile,index) => (
                                <GridListTile key={index}  >
                                    <img src={tile.picture} alt={tile.candyName} />
                                    <GridListTileBar
                                        title={tile.candyName}
                                        subtitle={<span>price: {tile.price}</span>}
                                        actionIcon={
                                            <IconButton
                                                cli aria-label={`info about ${tile.candyName}`}
                                                className={classes.icon}
                                                onClick={() =>details(index)}>
                                                <MdInfoOutline />
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div>
        );
    }));
