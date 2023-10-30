import React from "react";
import classNames from "classnames";
import VerticalContainer from "../../atoms/verticalContainer";
import HorizontalContainer from "../../atoms/horizotalContainer";
import FooterPara from "../../molecules/footerPara";
import FooterLeftContent from "../../molecules/footerLeftContent";
import FooterDownloadContent from "../../molecules/footerDownloadContent";
import FooterLogo from "../../molecules/footerLogo";
import styles from "./footer.module.scss";

const Footer = ({ className = "" }) => {
  return (
    <VerticalContainer className={classNames(styles.footerCotainer, className)}>
      <FooterPara className={classNames(styles.footerCotainer, className)} />
      <VerticalContainer>
        <HorizontalContainer>
          <FooterLeftContent />
          <FooterDownloadContent />
          <FooterLogo />
        </HorizontalContainer>
      </VerticalContainer>
    </VerticalContainer>
  );
};

export default Footer;
