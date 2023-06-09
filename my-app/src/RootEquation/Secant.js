import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs';
import Plot from "react-plotly.js";

const Secant =()=>{
    const print = () =>{
        console.log(data)
        setI(data.map((x)=>x.iteration));
        setValuex(data.map((x)=>x.x));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="50%">Iteration</th>
                            <th width="50%">X</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.x}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Plot style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}
                    data = {datachart}
                    layout={{
                    width: 1000, height: 600,
                    title: "Secant Chart",
                    }}
                />
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

    const CalSecant = (x0,x1) => {
        var X_0,X_1,er,x2;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        
        var obj={};
        var objChart = {};
        var objChart1 = {}
        var x = [];
        var y = [];
        var X1= [];
        var y1= [];
        do{
            X_0 = {
                x:x0
            }
            X_1 = {
                x:x1
            }
            
            x2 = x1-((evaluate(Equation,X_1)*(x0-x1))/(evaluate(Equation,X_0)-evaluate(Equation,X_1)));
            er = error(x0, x1);
            iter++;
            obj = {
                iteration:iter,
                x:x1,
            }
            data.push(obj);
            x.push(iter)
            y.push(x1)
            X1.push(iter)
            y1.push(er)
            x0 = x1;
            x1 = x2;
        }while(er>e && iter<MAX)  
        objChart = {
            x:x,
            y:y,
            name: "Iteration/Value X",
            mode: "markers+lines",
            type: "scatter",
            marker: {color: 'green'}
        }
        objChart1 = {
            x:X1,
            y:y1,
            name: "Iteration/Error",
            mode: "markers+lines",
            type: "scatter",
            marker: {color: 'red'}
        }
        datachart.push(objChart)
        datachart.push(objChart1)
        console.log("data");          
        setX(x2);
    }

    const data =[];
    const datachart = [];
    const [valuex, setValuex] = useState([]);
    const [valueI, setI] = useState([]);
     
   
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("x^3 - 5*x + 1")
    const [X,setX] = useState(0)
    const [X0,setX0] = useState(0)
    const [X1,setX1] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }

    const inputX1 = (event) =>{
        console.log(event.target.value)
        setX1(event.target.value)
    }

    const calculateRoot = () =>{
        const x0num = parseFloat(X0)
        const x1num = parseFloat(X1)
        CalSecant(x0num,x1num)
     
        setHtml(print());
           
        console.log(valueI)
        console.log(valuex)
        
    }

    return (
            <Container>
                <h2 style={{textAlign:"center" ,padding:"20px"}}>Secant Methods</h2>
                <Form >
                    <Form.Group className="mb-3" style={{textAlign:"center"}}>
                        <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                        <br></br>
                        <Form.Label>Input X0</Form.Label>
                        <input type="number" id="X0" onChange={inputX0} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                        <Form.Label>Input X1</Form.Label>
                        <input type="number" id="X1" onChange={inputX1} style={{width:"20%", margin:"15px",display: "inline-block"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" style={{ margin: '0 auto', display: 'block' }} onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5 style={{textAlign:"center"}}>Answer = {X.toPrecision(7)}</h5>
                <Container>
                {html}
                </Container>
               
            </Container>
           
    )
}

export default Secant