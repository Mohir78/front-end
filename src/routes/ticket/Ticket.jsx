//components
import Header from "../../components/header/Header"
import t from "./Ticket.module.css";
import { FaGithubSquare } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Ticket = () => {
  return (
    <>
      <Header/>
      <div className="ticket">
        <div className={ t["container"] }>
        <Card sx={{ maxWidth: 340}} style={{borderRadius: 0}}>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=KIUT" className={ t["img"] }/>
      <CardContent className={ t["content"] }>
        <p style={{textDecorationLine: "underline"}}>210000</p>
        <p style={{marginTop: 5}}>Name Surname</p>
      </CardContent>
    </Card>
    <Button className={ t["button-card"] } style={{background: "#268EFF", color: "#fff", borderRadius: 0}}>IMPORTANT REMARKS</Button>

    <Card sx={{ maxWidth: 340, maxHeight: 213}} style={{borderRadius: 0, marginTop: 10}}>
      <CardContent className={ t["content-p"] }>
        <p style={{fontSize: "14px"}}>Codico fistale: RSMT</p>
        <p style={{fontSize: "14px",marginTop: 10}}>PhD programm in:</p>
        <p style={{fontWeight: 700, minWidth: 313}}>ELECTRICAL, ELECTRONICS AND COMMUNICATIONS ENGINEERING</p>
        <p>Common educational path</p>
        <p style={{marginTop: 10}}>Lastest enrollement</p>
        <p style={{fontWeight: 700}}>2021/2022 - Tempo piano</p>
        <p>3 enrollement corp 2019/20</p>
        <p>Academic progress status: <span style={{fontWeight: 700, color: "#39AA45"}}>ACTIVE</span></p>
        <p style={{minWidth: 313}}>Project member Employee faculty cotute inverse ID: 1234567</p>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 1500, maxHeight: 841}} style={{borderRadius: 0}} className={ t["card-main"] }>    
    <List style={{background: "#fff", maxWidth: 707}} className={ t["lists"] }>
      <ListItem button style={{paddingBottom: 21, paddingTop: 21, paddingLeft: 0}}>
        <FaGithubSquare style={{width: 70, height: 70}}/><p className={ t["list-card"] }>ACADEMIC PROGRESS, RULES AND OTHER INFORMATION</p>
      </ListItem>
      <Divider style={{background: "black"}} />
      <ListItem button style={{paddingBottom: 21, paddingTop: 21, paddingLeft: 0}}>
      <FaGithubSquare style={{width: 70, height: 70}}/><p className={ t["list-card"] }>ACADEMIC PROGRESS, RULES AND OTHER INFORMATION</p>
      </ListItem>
      <Divider style={{background: "black"}} />
      <ListItem button style={{paddingBottom: 21, paddingTop: 21, paddingLeft: 0}}>
      <FaGithubSquare style={{width: 70, height: 70}}/><p className={ t["list-card"] }>ACADEMIC PROGRESS, RULES AND OTHER INFORMATION</p>
      </ListItem>
      <Divider style={{background: "black"}} />
      <ListItem button style={{paddingBottom: 21, paddingTop: 21, paddingLeft: 0}}>
      <FaGithubSquare style={{width: 70, height: 70}}/><p className={ t["list-card"] }>ACADEMIC PROGRESS, RULES AND OTHER INFORMATION</p>
      </ListItem>
      <Divider style={{background: "black"}} />
      <ListItem button style={{paddingBottom: 21, paddingTop: 21, paddingLeft: 0}}>
      <FaGithubSquare style={{width: 70, height: 70}}/><p className={ t["list-card"] }>ACADEMIC PROGRESS, RULES AND OTHER INFORMATION</p>
      </ListItem>
      <Divider style={{background: "black"}} />
    </List>
    </Card>
        </div>
      </div>
    </>
  )
}

export default Ticket