import React from "react";
import Link from "next/link";

import style from "./style.module.css";

function Home() {
  return (
    <main>
      <h1 className={style.logo}>
        <span className={style.logo_blue}>통</span>
        <span className={style.logo_red}>일</span>
        <span className={style.logo_green}>유</span>
        <span className={style.logo_yellow}>녶</span>
      </h1>
      <nav>
        <ul className={style.navbar}>
          <li>
            <Link href={"/att"}>출석체크</Link>
          </li>
          <li>
            <Link href={"/order"}>순서뽑기</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;
