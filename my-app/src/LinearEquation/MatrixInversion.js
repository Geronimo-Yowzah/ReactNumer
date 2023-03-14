import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate, log } from 'mathjs'
import Plot from "react-plotly.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
const math = require('mathjs');

const MatrixInversion =()=>{
    const print = () =>{
    }

    function CalMatrixInversion(Ao){
        var A = [];
        var AInverse = [];
        A = Ao;
        var Ratio;
        for(var i=0 ; i < A.length ; i++)
		 {
			  for(var j=0 ; j < A.length ; j++)
			  {
				   if(i==j)
				   {
				    	A[i][j+A.length] = 1;
				   }
				   else
				   {
				    	A[i][j+A.length] = 0;
				   }
			  }
		 }
         for(var i=0 ; i < A.length ; i++)
		 {
			  if(A[i][i] == 0.0)
			  {
				   console.log("Matrix Error!!");
			  }
			  for(var j=0 ; j < A.length  ;j++)
			  {
				   if(i!=j)
				   {
                        Ratio = A[j][i]/A[i][i];
					    for(var k = 0 ; k < 2*A.length ; k++)
					    {
					     	A[j][k] = A[j][k] - Ratio*A[i][k];
					    }
				   }
			  }
		 }
		 
		 for(var i = 0 ; i < A.length ; i++)
		 {
			  for(var j = A.length; j < 2*A.length ; j++)
			  {
			   	A[i][j] = A[i][j]/A[i][i];
			  }
		 }
         for(var i=0 ;i< A.length ; i++)
		 {
            const split = A[i].slice(A[i].length / 2);
            AInverse.push(split);
		 }
         console.log(AInverse);
         setValueX(AInverse);
    }
    
    const [ValueX, setValueX] = useState([]);
    const formattedValueX = ValueX.join(" | ");
    console.log(formattedValueX);

    const [html, setHtml] = useState(null);
    const [A11,setA11] = useState("");const [A12,setA12] = useState("");const [A13,setA13] = useState("");const [A14,setA14] = useState("");
    const [A21,setA21] = useState("");const [A22,setA22] = useState("");const [A23,setA23] = useState("");const [A24,setA24] = useState("");
    const [A31,setA31] = useState("");const [A32,setA32] = useState("");const [A33,setA33] = useState("");const [A34,setA34] = useState("");
    const [A41,setA41] = useState("");const [A42,setA42] = useState("");const [A43,setA43] = useState("");const [A44,setA44] = useState("");


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

    const calculateLinear = () =>{
        var a1 = [];
        var a2 = [];
        var a3 = [];
        var a4 = [];
        var A = [];
        if(Sizematrix == 2){
            a1.push(parseFloat(A11),parseFloat(A12));
            a2.push(parseFloat(A21),parseFloat(A22));
            A.push(a1,a2);
            CalMatrixInversion(A);
        }else if(Sizematrix == 3){
            a1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13));
            a2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23));
            a3.push(parseFloat(A31),parseFloat(A32),parseFloat(A33));
            A.push(a1,a2,a3);
            CalMatrixInversion(A);
        }
        else if(Sizematrix == 4){
            a1.push(parseFloat(A11),parseFloat(A12),parseFloat(A13),parseFloat(A14));
            a2.push(parseFloat(A21),parseFloat(A22),parseFloat(A23),parseFloat(A24));
            a3.push(parseFloat(A31),parseFloat(A32),parseFloat(A33),parseFloat(A34));
            a4.push(parseFloat(A41),parseFloat(A42),parseFloat(A43),parseFloat(A44));
            A.push(a1,a2,a3,a4);
            CalMatrixInversion(A);
        }
        setHtml(print()); 
    }

    return (
        <Container>
            <h2 style={{textAlign:"center" ,padding:"20px"}}>Matrix Inversion Methods</h2>
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
            <h5 style={{textAlign:"center"}}>A<sup>-1</sup> = {formattedValueX}</h5>
            <Container>
            {html}
            </Container>
            
        </Container>
            
        )
    }

export default MatrixInversion
