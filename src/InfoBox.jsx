import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./Infobox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';

export default function Infobox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COLD_URl ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let HOT_URl ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let RAIN_URl="https://plus.unsplash.com/premium_photo-1674684222755-98a35d94cdfa?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

   
    return(
        <div className="Infobox">
           
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ? RAIN_URl: info.temp>15 ? HOT_URl: COLD_URl
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{""}
          
        {info.humidity>80
          ?( <CloudySnowingIcon/>): info.temp>15 ? (<SunnyIcon/>):(< AcUnitIcon/>)
        }
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary'}}>
        <p>Temperature={info.temp}&deg;C</p>
       <p> Humidity={info.humidity}</p>
       <p>Min Temp={info.tempMin}&deg;C</p>
       <p>Max Temp={info.tempMax}&deg;C</p>
       The Weather can be described as ${info.weather}feels like {info.feelsLike}&deg;C
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    );
    
}