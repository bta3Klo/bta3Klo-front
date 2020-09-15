import React, {Component} from 'react';
import 'materialize-css';
import { Button, Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import axios from "axios";

class Home extends Component {
    state = {
        service:[{
            id: 1,
            firstName: 'mohamed',
            lastName: 'salahat',
            phoneNumber: "0798877432",
            service: "Plumbing",
            price: "20 JD",
        },
        { 
            id:2,
            firstName: 'mohamed',
            lastName: 'salahat',
            phoneNumber: "0798877432",
            service: "Plumbing",
            price: "20 JD",
        }
        ],
    searched: ""
    }

    // componentDidMount() {
    //     axios.get("http://localhost:8080/services")
    //     .then(res => {
    //         this.setState({service: res.data})
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }

    handleChange = (event) => {
        this.setState({searched: event.target.value});
    }

    search = () => {
        console.log(this.state.searched);
        axios.post('http://localhost:8080/serviceName',this.state.searched)
        .then(res => {
            this.setState({service: res.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        let services = this.state.service
    return(
        <div>
        <section>
            <h4>search</h4>
            <input type="text" name="search" placeholder="search for a service" value={this.state.value} onChange={this.handleChange.bind(this)} style={{border:'2px solid black',width:"500px"}} />
            <Button onClick={this.search.bind(this)}>search</Button>
        </section>
        <section>
        {services.map(serve => {
            return( <div key= {serve.id} style={{width:"300px", display: "inline-block", margin:"20px"}}>
  
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{serve.service}</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      provider name: {serve.firstName + " " + serve.lastName + "\n"}
      price: {serve.price}
    </Card>
 
</div>)
        })}
        </section>
        </div>
    )
}}
export  default Home;