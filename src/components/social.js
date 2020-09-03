// Social panel with component-scoped CSS.
// https://www.gatsbyjs.com/tutorial/part-two/

import React from "react"
import socialStyles from "./social.module.css"
import { useStaticQuery, graphql } from "gatsby"

import { SocialIcon } from "react-social-icons"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            linkedin
            facebook
            instagram
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  return (
    <div className={socialStyles.social}>
        <SocialIcon url={`https://linkedin.com/in/${social.linkedin}/`} />
        <SocialIcon url={`https://www.instagram.com/${social.instagram}/`} />
        <SocialIcon url={`https://www.facebook.com/${social.facebook}/`} />
    </div>
  )
}

export default Social