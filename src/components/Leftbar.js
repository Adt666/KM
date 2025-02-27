import logo from "../Logo.svg"
import { mainListItems, secondaryListItems } from './Dashboard/listItems';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

const Leftbar = () => {
    return (
        <Grid className="Left">
            <img src={logo} alt="KM" />
            <Divider />
            <List primary>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Grid>
    )
}

export default Leftbar
