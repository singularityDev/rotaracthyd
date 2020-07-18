import React from "react"
import { Container, SectionWrapper, Div } from "../design/Styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <SectionWrapper
      bgcolor="#fe91ca"
      display="flex"
      flexWrap="wrap"
      textAlign="center"
    >
      <Div margin="2rem">
        <Container height="80%">
          <br></br>
          <br></br>
          <h1>PAGE NOT FOUND 😕</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Div>
    </SectionWrapper>
  </Layout>
)

export default NotFoundPage
