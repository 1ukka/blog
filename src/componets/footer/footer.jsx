import { Container } from "../container/container";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <h2>All Rights Rserved - Aon2023</h2>
          <ul>
            <li>
              <Link href={"/"}>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaTwitterSquare />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <TiSocialInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
