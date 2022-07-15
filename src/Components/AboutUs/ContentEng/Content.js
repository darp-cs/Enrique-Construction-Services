import MediaCard from '../../MediaCard/MediaCard'
import {contentStyles, titleStyles, paperStyles} from './styles'
import Paper from '@mui/material/Paper';
const ContentEng = () =>{
    return(
        
        <Paper sx={paperStyles} elevation={3}>
            <div style = {contentStyles}>
                <div style ={titleStyles}>
                    STUCCO STONE CONSTRUCTION
                </div>
                <MediaCard/>
            </div>
        </Paper>

    )
}

export default ContentEng;