const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("calculator.proto",{});

const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.calculatorPackage;
//const params={n1:20, n2:10};

const client = new calculatorPackage.Calculator("localhost:8000", grpc.credentials.createInsecure()
);

      client.addition({
        'firstNumber' : 20,
        'secondNumber' : 10   
       }, (err,response)=>{
       
           console.log('Result addition' + JSON.stringify(response));
       })
       client.Subtraction({
        'firstNumber' : 20,
        'secondNumber' : 10   
       }, (err,response)=>{
       
           console.log('Result subtraction' + JSON.stringify(response));
       })
       client.Multiplication({
        'firstNumber' : 20,
        'secondNumber' : 10   
       }, (err,response)=>{
       
           console.log('Result multiplication' + JSON.stringify(response));
       })
       client.Division({
        'firstNumber' : 20,
        'secondNumber' : 10   
       }, (err,response)=>{
       
           console.log('Result Division' + JSON.stringify(response));
       })