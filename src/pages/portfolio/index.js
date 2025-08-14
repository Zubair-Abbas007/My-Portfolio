import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, skills } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        {/* Projects Section */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 portfolio_list"> {/* New class for the list */}
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="portfolio_item_simple">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                {data.link && <a href={data.link}>View Project</a>}
              </div>
            );
          })}
        </div>

       {/* Skills Section */}
<Row className="mb-5 mt-3 pt-md-3">
  <Col lg="8">
    <h1 className="display-4 mb-4"> My Skills </h1>
    <hr className="t_border my-2 ml-0 text-left" />
  </Col>
</Row>
<div className="mb-5 skills_section">
  {skills.map((skill, i) => {
    return (
      <div key={i} className="skill_item">
        <p>
          {skill.name} - {skill.value}%
        </p>
        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${skill.value}%`,
            }}
            aria-valuenow={skill.value}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  })}
</div>
      </Container>
    </HelmetProvider>
  );
};