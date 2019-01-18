import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";


class Icons extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Payroll</CardTitle>

              </CardHeader>
              <CardBody className="all-icons">

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Icons;
