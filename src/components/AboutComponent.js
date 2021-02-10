import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl';
const leaderImg = {
    height: '105px',
    width:'105px',
    minHeight: '105px',
    maxHeight: '105px',
    minWidth: '105px',
    maxWidth: '105px'
}
function RenderLeader({leader}) {
    return(
        <Stagger in>
            <Fade in>
                    <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                  <Media style={leaderImg} object src={baseUrl + leader.image} alt={leader.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
              </Media>
            </Media>
          </div>
                    </Fade>
            </Stagger>
        
    );

}

function About(props) {
    const leaders = props.leaders.leaders.map((leader) => {
        return (
          <RenderLeader leader={leader} key={leader.id}/>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2020, Madhuban Milk and Milk Products dairy farm is popular in pune .People knows this brand name by their quality of products.=
                    a successful chain started by Ajinkya Bhalghare.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Aug 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Madhuban milk and Milk products pvt lmt</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">25,50,000</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">5-10</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">treat your self with best Dairy products .</p>
                                <footer className="blockquote-footer">Unknown,
                                <cite title="Source Title">Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    