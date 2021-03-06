import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LandingImage, LandingContent } from "../design/Styles"

export const LandingPage = () => {
  const landingImage = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "landingImage.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LandingImage>
      <Img
        className="landingImg"
        fluid={landingImage.landingImage.childImageSharp.fluid}
      />
      <LandingContent>
        <h1>ROTARACT CLUB OF HYDERABAD</h1>
        <div>
          <p>(Sponsored by Rotary Club of Hyderabad)</p>
          <p>RID 3150 | Club ID 43657</p>
        </div>
        <h3>53 Years of changing lives</h3>
        <div className="content-wrap">
          <h4>Self Development.</h4>
          <h4>Fellowship through service.</h4>
        </div>
      </LandingContent>
    </LandingImage>
  )
}
