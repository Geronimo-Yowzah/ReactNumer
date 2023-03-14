import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate, log } from 'mathjs'
import Plot from "react-plotly.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
const math = require('mathjs');

const GaussJordan =()=>{
    const print = () =>{
    }

    function CalGuassJordan(A){
        var X = [];
        var Ratio;
        for(var i = 0; i < A.length ; i++){
            if(A[i][i] == 0.0){
                console.log("Matrix Error!!");
                break;
            }
            for(var j=0; j < A.length ; j++){
                if(i!=j){
                    Ratio = A[j][i] / A[i][i];
            
                    for(var k=0; k < A.length+1 ; k++){
                        A[j][k] = A[j][k]- Ratio*A[i][k];
                    }
                }
            }
        }
        for(var i=0 ; i<A.length ; i++){
            X[i] = A[i][A.length]/A[i][i];
        }
        setValueX(X);
    }
    
    function check(A,ValueX){
        var checkX = math.multiply(A,ValueX);
        setcheckValue(checkX);
    }
    
    const [ValueX, setValueX] = useState([]);
    const tofixedValueX = ValueX.map(v => v.toFixed(4));
    const formattedValueX = tofixedValueX.join(" , ");
    const [checkValue,setcheckValue] = useState([]);
    const tofixedcheck = checkValue.map(v => v.toFixed(4));
    const formattedcheck = tofixedcheck.join(" , ");

    const [html, setHtml] = useState(null);
    const [A11,setA11] = useState("");const [A12,setA12] = useState("");const [A13,setA13] = useState("");const [A14,setA14] = useState("");
    const [A21,setA21] = useState("");const [A22,setA22] = useState("");const [A23,setA23] = useState("");const [A24,setA24] = useState("");
    const [A31,setA31] = useState("");const [A32,setA32] = useState("");const [A33,setA33] = useState("");const [A34,setA34] = useState("");
    const [A41,setA41] = useState("");const [A42,setA42] = useState("");const [A43,setA43] = useState("");const [A44,setA44] = useState("");
    const [B11,setB11] = useState("");const [B21,setB21] = useState("");const [B31,setB31] = useState("");const [B41,setB41] = useState("");


    const [Sizematrix, setSizematrix] = useState("3");
    const handleChange = (event) => {
    setSizematrix(event.target.value);
    };

    const inputA11 = (event) =>{
    setA11(event.target.value)
    }
    const inputA12 = (event) =>{
    setA12(event.target.value)
    }
    const inputA13 = (event) =>{
    setA13(event.target.value)
    }
    const inputA14 = (event) =>{
    setA14(event.target.value)
    }
    const inputA21 = (event) =>{
    setA21(event.target.value)
    }
    const inputA22 = (event) =>{
    setA22(event.target.value)
    }
    const inputA23 = (event) =>{
    setA23(event.target.value)
    }
    const inputA24 = (event) =>{
    setA24(event.target.value)
    }
    const inputA31 = (event) =>{
    setA31(event.target.value)
    }
    const inputA32 = (event) =>{
    setA32(event.target.value)
    }
    const inputA33 = (event) =>{
    setA33(event.target.value)
    }
    const inputA34 = (event) =>{
    setA34(event.target.value)
    }
    const inputA41 = (event) =>{
    setA41(event.target.value)
    }
    const inputA42 = (event) =>{
    setA42(event.target.value)
    }
    const inputA43 = (event) =>{
    setA43(event.target.value)
    }
    const inputA44 = (event) =>{
    setA44(event.target.value)
    }
    const inputB11 = (event) =>{
    setB11(event.target.value)
    }
    const inputB21 = (event) =>{
    setB21(event.target.value)
    }
    const inputB31 = (event) =>{
    setB31(event.target.value)
    }
    const inputB41 = (event) =>{
    setB41(event.target.value)
    }

    const calculateLinear = () =>{
        var a1 = [];
        var a2 = [];
        var a3 = [];
        var a4 = [];
        var ac1 = [];
        var ac2 = [];
        var ac3 = [];
        var ac4 = [];
        var A = [];
        const Acheck = [];
        if(Sizematrix == 2){
            a1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13),parseFloat(B11));
            a2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23),parseFloat(B21));
            A.push(a1,a2);
            ac1.push(parseFloat(A11),parseFloat(A12));
            ac2.push(parseFloat(A21),parseFloat(A22));
            Acheck.push(ac1,ac2);
            CalGuassJordan(A);
            check(Acheck,ValueX);
        }else if(Sizematrix == 3){
            a1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13),parseFloat(B11));
            a2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23),parseFloat(B21));
            a3.push(parseFloat(A31),parseFloat(A32),parseFloat(A33),parseFloat(B31));
            A.push(a1,a2,a3);
            ac1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13));
            ac2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23));
            ac3.push(parseFloat(A31),parseFloat(A32),parseFloat(A33));
            Acheck.push(ac1,ac2,ac3);
            CalGuassJordan(A);
            check(Acheck,ValueX);
        }
        else if(Sizematrix == 4){
            a1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13),parseFloat(A14),parseFloat(B11));
            a2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23),parseFloat(A24),parseFloat(B21));
            a3.push(parseFloat(A31),parseFloat(A32),parseFloat(A33),parseFloat(A34),parseFloat(B31));
            a4.push(parseFloat(A41),parseFloat(A42),parseFloat(A43),parseFloat(A44),parseFloat(B41));
            A.push(a1,a2,a3,a4);
            ac1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13),parseFloat(A14));
            ac2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23),parseFloat(A24));
            ac3.push(parseFloat(A31),parseFloat(A32),parseFloat(A33),parseFloat(A34));
            ac4.push(parseFloat(A41),parseFloat(A42),parseFloat(A43),parseFloat(A44));
            Acheck.push(a1,a2,a3,a4);
            CalGuassJordan(A);
            check(Acheck,ValueX);
        }
        setHtml(print()); 
    }

    return (
        <Container>
            <h2 style={{textAlign:"center" ,padding:"20px"}}>Guass-Jordan Methods</h2>
            <Form >
                <Form.Group className="mb-3" style={{textAlign:"center"}}>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <Form.Label>Size of Matrix</Form.Label>
                        <Select
                            value={Sizematrix}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value={2}>2 x 2</MenuItem>
                        <MenuItem value={3}>3 x 3</MenuItem>
                        <MenuItem value={4}>4 x 4</MenuItem>
                        </Select>
                    </FormControl><br></br>
                    <div>
                    {(() => {
                        if (Sizematrix == 2) {
                        return (
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <div style={{paddingTop:"45px"}}><Form.Label>A = </Form.Label></div>
                                <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}}>
                                    <input type="number" id="A11" 
                                        onChange={inputA11} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A12" 
                                        onChange={inputA12} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A21" 
                                        onChange={inputA21} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A22" 
                                        onChange={inputA22} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                </div>
                                <div style={{paddingTop:"45px",paddingLeft:"20px"}}><Form.Label>B = </Form.Label></div>
                                <div style={{display:"grid"}}>
                                    <input type="number" id="B11" 
                                        onChange={inputB11} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="B21" 
                                        onChange={inputB21} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                </div>
                            </div>
                        )
                        } else if (Sizematrix == 3) {
                        return (
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <div style={{paddingTop:"75px"}}><Form.Label>A = </Form.Label></div>
                                <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}}>
                                    <input type="number" id="A11" 
                                        onChange={inputA11} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A12" 
                                        onChange={inputA12} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A13" 
                                        onChange={inputA13} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A21" 
                                        onChange={inputA21} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A22" 
                                        onChange={inputA22} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A23" 
                                        onChange={inputA23} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A31" 
                                        onChange={inputA31} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A32" 
                                        onChange={inputA32} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A33" 
                                        onChange={inputA33} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                </div>
                                <div style={{paddingTop:"75px",paddingLeft:"20px"}}><Form.Label>B = </Form.Label></div>
                                <div style={{display:"grid"}}>
                                    <input type="number" id="B11" 
                                        onChange={inputB11} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="B21" 
                                        onChange={inputB21} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="B31" 
                                        onChange={inputB31} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                </div>
                            </div>
                        )
                        } else if (Sizematrix == 4){
                        return (
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <div style={{paddingTop:"105px"}}><Form.Label>A = </Form.Label></div>
                                <div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)"}}>
                                    <input type="number" id="A11" 
                                        onChange={inputA11} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A12" 
                                        onChange={inputA12} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A13" 
                                        onChange={inputA13} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A14" 
                                        onChange={inputA14} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A21" 
                                        onChange={inputA21} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A22" 
                                        onChange={inputA22} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A23" 
                                        onChange={inputA23} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A24" 
                                        onChange={inputA24} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A31" 
                                        onChange={inputA31} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A32" 
                                        onChange={inputA32} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A33" 
                                        onChange={inputA33} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A34" 
                                        onChange={inputA34} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A41" 
                                        onChange={inputA41} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A42" 
                                        onChange={inputA42} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A43" 
                                        onChange={inputA43} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="A44" 
                                        onChange={inputA44} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                </div>
                                <div style={{paddingTop:"105px",paddingLeft:"20px"}}><Form.Label>B = </Form.Label></div>
                                <div style={{display:"grid"}}>
                                    <input type="number" id="B11" 
                                        onChange={inputB11} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="B21" 
                                        onChange={inputB21} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="B31" 
                                        onChange={inputB31} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                    <input type="number" id="B41" 
                                        onChange={inputB41} 
                                        style={{width:"65px", margin:"10px",display: "inline-block"}} 
                                        className="form-control">
                                    </input>
                                </div>
                            </div>
                        )
                        }
                    })()}
                    </div>
                </Form.Group>
                <Button variant="dark" style={{ margin: '0 auto', display: 'block' }} onClick={calculateLinear}>
                    Calculate
                </Button>
            </Form>
            <br></br>
            <h5 style={{textAlign:"center"}}>X = {formattedValueX}</h5>
            <br></br>
            <Button variant="dark" style={{ margin: '0 auto', display: 'block' }} onClick={calculateLinear}>
                    Check Ax = B
            </Button>
            <br></br>
            <h5 style={{textAlign:"center"}}>B = {formattedcheck}</h5>
            <Container>
            {html}
            </Container>
            
        </Container>
            
        )
    }

export default GaussJordan
