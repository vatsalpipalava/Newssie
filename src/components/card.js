import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


function NewsCard({ apiUrl }) {
  const [mydata, setData] = useState([]);

  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.articles);
      });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(interval);
  }, [apiUrl]);

  return (
    <>
      <Container fluid className="main-container">
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">

          {
            mydata.map((value, index) => (
            <Col key={index} className="container-fluid mt-4">
              <Card className="news-card">
                <Card.Img className="card-img" variant="top" src={value.imageUrl} />
                <Card.Body className="main-content">
                  <p className="news-source">{value.sourceName}</p>
                  <Card.Title className="news-heading">{value.title}</Card.Title>
                  <Card.Text className="news-sub-title">{value.subtitle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default NewsCard;
