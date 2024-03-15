import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function CardInformation() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const [people, setPeople] = React.useState([
        {id: 1, name: "lucky"},
        {id: 2, name: "pun"},
        {id: 3, name: "yi"},
        {id: 4, name: "modem"},
    ])

    const [widgets, setWidgets] = React.useState([])
    console.log("wideget =>", widgets);

    const handleOnDrag = (e, widgetType) => {
        e.dataTransfer.setData("widgetType", widgetType)
    }
    const handleOnDrop = (e) => {
        const widgetType = e.dataTransfer.getData("widgetType")
        console.log("widgetType", widgetType);
        setWidgets([...widgets, widgetType])
    }
    const handleDragOver = (e) => {
        e.preventDefault()
    }


    return (
        <div className='widgets' draggable onDragStart={(e) => handleOnDrag(e, "Widget A")} onDrop={handleOnDrop} onDragOver={handleDragOver}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
                            <PersonIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Sutthirak Sutsaenya"
                    subheader="September 17, 2002"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        ไม่ได้เก่งตั้งแต่เกิด แต่พ่อสอนให้เปิดตั้งแต่เด็ก
                        เก่งกว่าโดดยาง ก็โดดเสยคางอะครับ
                        หน้าผมไม่เหมาะกับรองพื้นหรอก เหมาะกับรองเท้ามากกว่า
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}