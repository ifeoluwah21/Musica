import React from "react";
import Recents from "../components/Sections/Recents";
import TopChart from "../components/Sections/TopChart";
import NewRelease from "../components/Sections/NewRelease";
import AreaQuery from "../components/Sections/AreaQuery";

import styles from "./Home.module.scss";

const Home = () => {

    return (
        <div className={styles[`wrapper`]}>
            <Recents className={`${styles[`wrapper__recents`]}`} />
            <TopChart className={`${styles[`wrapper__topchart`]}`} />
            <NewRelease className={`${styles[`wrapper__newrelease`]}`} />
            <AreaQuery className={`${styles[`wrapper__areaquery`]}`} />
            {/* <audio src="http://musiqa.xyz/get_file/?file_id=eyJhbGciOiJIUzUxMiIsImlhdCI6MTY2OTgzODI0MiwiZXhwIjoxNjY5ODM5MTQyfQ.eyJrZXkiOiJuMHFpQk1lOE1SdyJ9.L-JJBLN_ODcwVS1OYDA0yignNgIYNlVRr4aQlC0O7iPfcprhaySai24DwmUScWFLfdBAMAgBdydDBCLuOLm54A&ext=mp3" controls></audio> */}
        </div>);
};

export default Home;