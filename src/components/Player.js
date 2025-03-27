import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
const Player=({element})=>{
    const [showChild,setShowChild]=useState(true);
    const toggleChild=()=>{setShowChild(!showChild) //pre-debugging: const toggleChild=()=>{setShowChild(null) //issue debuggin process will be displayed at the bottom of the "README" file
        if(!showChild){
            setTimer(0);
        }
    };
    const [timer,setTimer]=useState(0);
    useEffect(()=>{
        const intervalId=setInterval(() => {
            setTimer(c=>c+1)
        }, 1000);
        return ()=> clearInterval(intervalId)
    },[]    )
    return(
        <>
            
            <div>
                <Card className='w-100 position-relative' style={{maxWidth:"18rem"}}>
                    {showChild&&(
                    <>
                        <Card.Img variant='top' className='img-fluid' style={{height:"380px"}} src={element.image}/>
                        <Card.Body>
                            <Card.Title className='fs-4 text-center'> {element.name}</Card.Title>
                        </Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroup.Item className='fs-5 text-center'>{element.team}</ListGroup.Item>
                            <ListGroup.Item className='fs-5 text-center'>{element.nationality}</ListGroup.Item>
                            <ListGroup.Item className='fs-5 text-center'>{element.age}</ListGroup.Item>
                            <ListGroup.Item className='fs-5 text-center'>timer: {timer}</ListGroup.Item>

                        </ListGroup>
                    </>
                    )}
                    <button onClick={toggleChild} className='btn btn-warning' 
                    style={{
                        marginTop:20,
                        position:"relative",
                        bottom:"10px",
                        left:"50%",
                        transform:"translateX(-50%)",
                        width:"200px"}}>
                            {showChild?"Hide Player":"Show Player"}
                    </button>
                </Card>
            </div>

   
        </>
    )
}
export default Player;