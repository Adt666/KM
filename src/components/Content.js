import Post from "./Post/index";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import man from "../man.svg"

const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },


    iconButton: {
        padding: 10,
        justifyContent: 'flex-end',
    },
    Paper: {
        display: 'flex',
        borderRadius: '400px 400px 400px 400px',
        maxWidth: 400,
        padding: '2px 4px',
        alignItems: 'right',


    },


}));

const Contents = () => {
    const classes = useStyles();

    return (

        <div className="Contents">
            <Paper component="form" className={classes.Paper}>
                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />

                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>

            <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                CSE Department VAST
        </Typography>
            <div className="rowheading">

                <Typography align="left" color="textPrimary" variant="h6">
                    Posts

            </Typography>
                <div className="button" >
                    Button
                    </div>
            </div>

            <MoreVertRoundedIcon align="right" />

            <div className="Contents-space">
                <Post nickname="Chris" avatar={man} caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            </div>
            <div className="Contents-space">
                <Post nickname="OG" avatar={man} caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            </div>

        </div>

    )
}

export default Contents
