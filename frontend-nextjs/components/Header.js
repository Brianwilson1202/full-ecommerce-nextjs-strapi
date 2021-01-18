import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import AuthContext from "../context/AuthContext";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const { user } = useContext(AuthContext);

  return (
    <div className={styles.nav}>
      {!isHome && (
        <div>
          <a href="#" onClick={goBack}>
            {"<"} Back{" "}
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <h1>The E-Commerce</h1>
        </Link>
      </div>
      <div className={styles.auth} >
        {user ? (
          <Link href="/account"><a> <img src='/user_avatar.png' alt={user.email}/></a></Link>
        ) : (
          <Link href="/login">Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
